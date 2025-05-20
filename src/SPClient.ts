import crypto, { createHash } from "crypto";
import axios, { AxiosRequestConfig } from "axios";
import { MercuryClient } from "./Mercury";
import {
	ChallengeAnswer,
	ChallengeAnswersRequest,
	ChallengeType,
	ChallengesResponse,
	ClientDataRequest,
	ClientTokenRequest,
	ClientTokenRequestType,
	ClientTokenResponse,
	HashCashAnswer,
	HashCashParameters,
	StorageResolveResponse,
	Track,
} from "./proto/";
import { AUDIO_AESIV, KEYMASTER_CLIENT_ID } from "./Constants";
import { FileId, SpotifyId, skipStream } from "./Util";
import { Readable } from "stream";

export class SPClient extends MercuryClient {
	client_token!: string;
	expires_at!: Date;

	async fetch(opts: AxiosRequestConfig) {
		// client token is not required
		const [access_token] = await Promise.all([
			// this.fetchClientToken(),
			this.fetchAccessToken("playlist-read"),
		]);

		const response = await axios({
			params: {
				salt: crypto.randomBytes(4).readUInt32BE(0),
				product: "0",
				country: "DE",
			},
			headers: {
				Authorization: `Bearer ${access_token}`,
				// "client-token": client_token,
				"User-Agent": `Spotify/117300517 OSX/14.0 (librespot)`,
			},
			baseURL: this.spclient,
			...opts,
		});
		if (response.status >= 400) throw new Error(`Request failed with status ${response.status}\n${response.data}`);

		return response.data;
	}

	async fetchMetadata(id: SpotifyId) {
		const metadata = await this.fetch({
			url: `/metadata/4/${id.type}/${id.toBase16()}`,
		});
		if (!metadata.file && metadata.alternative) {
			const alt = metadata.alternative.find((alt: any) => alt.file);
			if (alt) metadata.file = alt.file;
		}
		metadata.file?.forEach((file: any) => {
			file.fileId = FileId.from(file.file_id);
		});
		if (this.productInfo?.catalogue === "free") metadata.file?.shift();

		return metadata as Track;
	}

	async fetchLyrics(id: SpotifyId, fileId?: FileId) {
		return this.fetch({
			url: `/color-lyrics/v2/track/${id.toBase62()}${fileId ? `/image/spotify:image:${fileId.toBase16()}` : ""
				}?format=json&vocalRemoval=false&market=from_token`,
		});
	}

	async fetchPlaylist(id: SpotifyId) {
		const data = this.fetch({
			url: `/playlist/v2/playlist/${id.toBase62()}?format=json`,
		});

		return data;
	}

	async fetchPlaylist2(id: SpotifyId, opts?: { offset?: number; limit?: number }) {
		const { data } = await this.fetch({
			url: `/pathfinder/v1/query`,
			params: {
				operationName: "fetchPlaylist",
				variables: JSON.stringify({ uri: id.toUri(), offset: 0, limit: 100, ...opts }),
				extensions: `{"persistedQuery":{"version":1,"sha256Hash":"b39f62e9b566aa849b1780927de1450f47e02c54abf1e66e513f96e849591e41"}}`,
			},
			baseURL: "https://api-partner.spotify.com",
		});

		return data.playlistV2;
	}

	async fetchSong(id: SpotifyId) {
		const metadata = await this.fetchMetadata(id);
		if (!metadata.file) {
			throw new Error("No file found for: " + id.toUri() + " " + metadata.name);
		}
		const [file] = metadata.file;

		const key = this.sendKeyRequest(id, file.fileId).catch((e) => {
			throw e;
		});
		const data = await this.fetchFileURL(file.fileId);

		const encrypted = await this.fetchFile(data.cdnurl[0]);
		const decrypted = this.decryptFile(encrypted, await key);

		// spotify has a 0xa7 byte header for ogg files
		const stream = skipStream(0xa7, decrypted);
		// const stream = decrypted;

		return {
			stream,
			metadata,
			file,
		};
	}

	async fetchFileURL(id: FileId) {
		const response = await this.fetch({
			url: `/storage-resolve/files/audio/interactive/${id.toBase16()}`,
			responseType: "arraybuffer",
		});

		return StorageResolveResponse.decode(response);
	}

	async fetchFile(url: string) {
		const response = await this.fetch({
			url: url,
			responseType: "stream",
		});

		return response;
	}

	decryptFile(file: Readable, key: Buffer) {
		const decipher = crypto.createDecipheriv("aes-128-ctr", key, AUDIO_AESIV);
		file.pipe(decipher);
		return decipher
	}

	hashCash(prefix: Buffer, length: number) {
		console.log("hashCash", prefix, length);

		// after a certain number of seconds, the challenge expires
		const TIMEOUT = 5 * 1000; // 5 seconds

		let startTime = Date.now();

		let md = createHash("sha1").update(Buffer.alloc(0)).digest();
		let target = Buffer.from(md.slice(12, 20)).readBigUInt64BE();
		let counter = 0n;

		let suffix;

		while (true) {
			let elapsed = Date.now() - startTime;
			if (elapsed >= TIMEOUT) {
				throw new Error(`${TIMEOUT} milliseconds expired`);
			}

			suffix = Buffer.concat([Buffer.from(BigInt(target + counter).toString(16), "hex"), Buffer.from(counter.toString(16), "hex")]);

			let hash = createHash("sha1").update(prefix).update(suffix).digest();

			if (Buffer.from(hash.slice(12, 20)).readBigUInt64BE().toString(2).padStart(64, "0").slice(-length) === "0".repeat(length)) {
				break;
			}

			counter++;
		}

		console.log("Found suffix", suffix.toString("hex").toUpperCase());

		return suffix;
	}

	async fetchClientToken() {
		if (this.client_token && this.expires_at > new Date()) return this.client_token;

		const { data, status } = await axios({
			url: "https://clienttoken.spotify.com/v1/clienttoken",
			method: "POST",
			headers: {
				Accept: "application/x-protobuf",
			},
			responseType: "arraybuffer",
			data: ClientTokenRequest.encode({
				requestType: ClientTokenRequestType.REQUEST_CLIENT_DATA_REQUEST,
				clientData: {
					clientId: KEYMASTER_CLIENT_ID,
					connectivitySdkData: {
						deviceId: this.deviceId,
						platformSpecificData: {
							desktopMacos: {
								systemVersion: "14.0",
								hwModel: "iMac21,1",
								compiledCpuType: "x86_64",
							},
						},
					},
				} as ClientDataRequest,
			} as Partial<ClientTokenRequest>).finish(),
		});

		let response = ClientTokenResponse.decode(data);

		if (response.challenges) {
			const { challenges, state } = response.challenges as ChallengesResponse;
			const challenge = challenges.find((x) => x.evaluateHashcashParameters);
			if (!challenge) throw new Error("No challenge found");
			const { length, prefix: prefixHex } = challenge.evaluateHashcashParameters! as HashCashParameters;

			const prefix = Buffer.from(prefixHex, "hex");

			const answer = this.hashCash(prefix, length).slice(0, 0x10);
			const suffix = answer.toString("hex").toUpperCase();

			const hashCashResponse = await axios({
				url: "https://clienttoken.spotify.com/v1/clienttoken",
				method: "POST",
				headers: {
					Accept: "application/x-protobuf",
				},
				responseType: "arraybuffer",
				data: ClientTokenRequest.encode({
					requestType: ClientTokenRequestType.REQUEST_CHALLENGE_ANSWERS_REQUEST,
					challengeAnswers: {
						state: state,
						answers: [
							{
								ChallengeType: ChallengeType.CHALLENGE_HASH_CASH,
								answer: "hashCash",
								hashCash: {
									suffix: suffix,
								} as HashCashAnswer,
							},
						] as ChallengeAnswer[],
					} as ChallengeAnswersRequest,
				} as Partial<ClientTokenRequest>).finish(),
			});

			response = ClientTokenResponse.decode(hashCashResponse.data);
		}

		if (!response.grantedToken) throw new Error("No token found");

		this.client_token = response.grantedToken.token;
		this.expires_at = new Date(response.grantedToken.refreshAfterSeconds * 1000 + Date.now());
		this.emit("credentials");

		return this.client_token;
	}

	toJSON() {
		return {
			...super.toJSON(),
			client_token: this.client_token,
		};
	}
}
