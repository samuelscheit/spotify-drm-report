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
import { FileId, SpotifyId, SpotifyItemTypes, skipStream } from "./Util";
import { Readable, Transform } from "stream";
import { writeFileSync } from "fs";

export class SPClient extends MercuryClient {
	client_token!: string;
	expires_at!: Date;

	// Hash-related properties
	private raw_hashes?: string;
	private js_pack?: string;
	private client_version?: string;
	private xpui_route_num?: string;
	private xpui_route_tracks_num?: string;
	private xpui_route?: string;
	private xpui_route_tracks?: string;
	private device_id?: string;
	private client_id?: string;

	async connect() {
		const [promise] = await Promise.all([super.connect(), this.getSession])
		return promise
	}

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

	async fetchList2(id: SpotifyId, opts?: { offset?: number; limit?: number }) {

		const operationNames = {
			playlist: "fetchPlaylist",
			album: "getAlbum",
			// artist: "fetchArtist",
			// show: "fetchShow",
			// episode: "fetchEpisode",
			// track: "fetchTrack",
		} as Record<SpotifyItemTypes, string>

		const operationName = operationNames[id.type]
		if (!operationName) throw new Error("Unkown type: " + id.type)
		const hash = await this.partHash(operationName)

		const { data } = await this.fetch({
			url: `/pathfinder/v1/query`,
			params: {
				operationName,
				variables: JSON.stringify({
					uri: id.toUri(), offset: 0, limit: 100,
					...opts,
					...(id.type === SpotifyItemTypes.Album ? {
						locale: "",
					} : {})
				}),
				extensions: `{"persistedQuery":{"version":1,"sha256Hash":"${hash}"}}`,
				// extensions: `{"persistedQuery":{"version":1,"sha256Hash":"b39f62e9b566aa849b1780927de1450f47e02c54abf1e66e513f96e849591e41"}}`,
			},
			baseURL: "https://api-partner.spotify.com",
		});


		if (data.albumUnion) {
			console.log("album", data.albumUnion.name)
			return {
				tracks: data.albumUnion.tracks.items.map((x: any) => x.track),
				name: data.albumUnion.name,
			}
		} else if (data.playlistV2) {
			return {
				tracks: data.playlistV2.content.items.map((x: any) => x.itemV2.data),
				name: data.playlistV2.name,
			}
		} else {
			console.dir(data, { depth: null })
			throw new Error("Unkown list type")
		}

		return data.playlistV2;
	}

	async fetchSong(id: SpotifyId, type: "ogg" | "mp3" | "aac" = "ogg", hasPremium = false) {
		const metadata = await this.fetchMetadata(id);
		if (!metadata.file) {
			throw new Error("No file found for: " + id.toUri() + " " + metadata.name);
		}
		const file = metadata.file.find(x => {
			// Check if format is too high bitrate for free users
			if (!hasPremium) {
				const bitrate = Number(x.format.replace("MP4","").match(/\d+/))
				// Assume x.bitrate is in kbps, and free users are limited to 160kbps for OGG, 128kbps for MP3/AAC
				if (x.format.includes("OGG") && bitrate >= 160) return false;
				else if (x.format.includes("MP4") && bitrate >= 256) return false;
				else if (x.format.includes("AAC") && bitrate > 24) return false;
			}

			if (type === "ogg" && x.format.includes("OGG")) return true;
			else if (type === "mp3" && x.format.includes("MP4")) return true;
			else if (type === "aac" && x.format.includes("AAC")) return true;
			return false;
		})
		if (!file) throw new Error(`${type} file not found: ${JSON.stringify(metadata)}`)

		const key = this.sendKeyRequest(id, file.fileId).catch((e) => {
			throw e;
		});
		const data = await this.fetchFileURL(file.fileId);

		const encrypted = await this.fetchFile(data.cdnurl[0]);
		const decrypted = this.decryptFile(encrypted, await key);

		if (type === "ogg") {
			// spotify has a 0xa7 byte header for ogg files
			var stream = skipStream(0xa7, decrypted);
			// const stream = decrypted;
		} else {
			var stream = decrypted as Transform;
		}

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


	/**
	 * Establishes a session with Spotify and extracts necessary URLs and identifiers
	 */
	private async getSession(): Promise<void> {
		const response = await axios.get("https://open.spotify.com/intl-de/", {
			headers: {
				"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
			}
		});

		if (response.status >= 400) {
			throw new Error(`Could not get session: ${response.status}`);
		}

		if (typeof response.data !== 'string') {
			throw new Error("Invalid HTML response");
		}

		// Extract JavaScript pack URL using regex patterns
		let jsPackPattern = /https:\/\/open\.spotifycdn\.com\/cdn\/build\/web-player\/web-player.*?\.js/g;
		let matches = response.data.match(jsPackPattern);

		if (!matches || matches.length < 2) {
			// Try alternative CDN pattern
			jsPackPattern = /https:\/\/open-exp\.spotifycdn\.com\/cdn\/build\/web-player\/web-player.*?\.js/g;
			matches = response.data.match(jsPackPattern);
		}

		if (!matches || matches.length < 2) {
			writeFileSync(__dirname + "/../test.html", response.data)
			throw new Error("Could not find JavaScript pack URL");
		}

		this.js_pack = matches[1];
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

	/**
	 * Extracts a specific hash by name from the raw JavaScript content
	 */
	async partHash(name: string) {
		if (name === "fetchPlaylist") {
			return "b39f62e9b566aa849b1780927de1450f47e02c54abf1e66e513f96e849591e41"
		} else if (name === "getAlbum") {
			return "46ae954ef2d2fe7732b4b2b4022157b2e18b7ea84f70591ceb164e4de1b5d5d3"
		} else {
			throw new Error("unsupported operation: " + name)
		}

		if (!this.raw_hashes) {
			await this.getSha256Hash();
		}

		if (!this.raw_hashes) {
			throw new Error("Could not get playlist hashes");
		}

		try {
			const queryMatch = this.raw_hashes.split(`"${name}","query","`);
			if (queryMatch.length > 1) {
				return queryMatch[1].split('"')[0];
			}
		} catch (error) {
			// Fall through to mutation attempt
		}

		try {
			const mutationMatch = this.raw_hashes.split(`"${name}","mutation","`);
			if (mutationMatch.length > 1) {
				return mutationMatch[1].split('"')[0];
			}
		} catch (error) {
			throw new Error(`Could not find hash for ${name}`);
		}

		throw new Error(`Could not find hash for ${name}`);
	}

	/**
	 * Fetches and parses Spotify's web player JavaScript files to extract hashes and routing information
	 */
	async getSha256Hash(): Promise<void> {
		if (!this.js_pack) {
			await this.getSession();
		}

		if (!this.js_pack) {
			throw new Error("Could not get playlist hashes");
		}

		const response = await axios.get(this.js_pack);

		if (response.status >= 400) {
			throw new Error(`Could not get playlist hashes: ${response.status}`);
		}

		if (typeof response.data !== 'string') {
			throw new Error("Invalid HTML response");
		}

		this.raw_hashes = response.data;

		// Extract client version
		const clientVersionMatch = response.data.split('clientVersion:"');
		if (clientVersionMatch.length > 1) {
			this.client_version = clientVersionMatch[1].split('"')[0];
		}

		// Extract xpui route numbers
		const xpuiRouteMatch = response.data.split(':"xpui-routes-search"');
		if (xpuiRouteMatch.length > 1) {
			const parts = xpuiRouteMatch[0].split(',');
			this.xpui_route_num = parts[parts.length - 1];
		}

		const xpuiRouteTracksMatch = response.data.split(':"xpui-routes-track-v2"');
		if (xpuiRouteTracksMatch.length > 1) {
			const parts = xpuiRouteTracksMatch[0].split(',');
			this.xpui_route_tracks_num = parts[parts.length - 1];
		}

		// Extract xpui routes using regex
		if (this.xpui_route_num) {
			const xpuiRoutePattern = new RegExp(`${this.xpui_route_num}:"([^"]*)"`, 'g');
			const matches = [...response.data.matchAll(xpuiRoutePattern)];
			if (matches.length > 0) {
				this.xpui_route = matches[matches.length - 1][1];
			}
		}

		if (this.xpui_route_tracks_num) {
			const xpuiRouteTracksPattern = new RegExp(`${this.xpui_route_tracks_num}:"([^"]*)"`, 'g');
			const matches = [...response.data.matchAll(xpuiRouteTracksPattern)];
			if (matches.length > 0) {
				this.xpui_route_tracks = matches[matches.length - 1][1];
			}
		}

		// Fetch additional JavaScript files
		if (this.xpui_route && this.xpui_route_tracks) {
			const urls = [
				`https://open.spotifycdn.com/cdn/build/web-player/xpui-routes-search.${this.xpui_route}.js`,
				`https://open.spotifycdn.com/cdn/build/web-player/xpui-routes-track-v2.${this.xpui_route_tracks}.js`,
			];

			for (const url of urls) {
				try {
					const jsResponse = await axios.get(url);

					if (jsResponse.status >= 400) {
						throw new Error(`Could not get xpui hashes from ${url}: ${jsResponse.status}`);
					}

					this.raw_hashes += jsResponse.data;
				} catch (error) {
					console.warn(`Failed to fetch ${url}:`, error);
				}
			}
		}
	}
}
