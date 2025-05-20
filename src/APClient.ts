import { PacketType } from "./Constants";
import { APLoginFailed, APWelcome, AuthenticationType, ClientResponseEncrypted, CpuFamily, Os } from "./proto";
import { APNoise } from "./APNoise";
import { v4 as uuid } from "uuid";
import { FileId, ProductInfo, SpotifyId } from "./Util";
import { XMLParser } from "fast-xml-parser";

const parser = new XMLParser();

export class APClient extends APNoise {
	username!: string;
	auth_type!: AuthenticationType;
	auth_data!: Buffer;
	// use PacketType as key for handlers
	handlers: { [key in PacketType]?: (payload: Buffer) => any } = {};
	callbacks: { [key: number]: (payload: Buffer | Error) => any } = {};
	deviceId = uuid();
	setReady!: (value?: any) => void;
	ready = new Promise((resolve, reject) => {
		this.setReady = resolve;
	});
	seq = 0;
	productInfo!: ProductInfo;

	constructor(data: Partial<APClient>) {
		super();

		if (typeof data.auth_data === "string") {
			if (data.auth_type === AuthenticationType.AUTHENTICATION_USER_PASS) data.auth_data = Buffer.from(data.auth_data);
			else data.auth_data = Buffer.from(data.auth_data, "base64");
		}
		Object.assign(this, data);
		this.handlers[PacketType.APWelcome] = this.onAPWelcome;
		this.handlers[PacketType.Ping] = this.onPing;
		this.handlers[PacketType.AuthFailure] = this.onAuthFailure;
		this.handlers[PacketType.AesKey] = this.onAESKey;
		this.handlers[PacketType.AesKeyError] = this.onAESKeyError;
		this.handlers[PacketType.ProductInfo] = this.onProductInfo;
	}

	async connect() {
		await super.connect();
		return this.ready;
	}

	override onHandshakeComplete() {
		super.onHandshakeComplete();
		this.authenticate();
	}

	authenticate() {
		this.send(
			PacketType.Login,
			ClientResponseEncrypted.encode({
				loginCredentials: {
					username: this.username,
					typ: this.auth_type,
					authData: this.auth_data,
				},
				systemInfo: {
					systemInformationString: `librespot-f037e46-eTOHfBmn`,
					deviceId: this.deviceId,
					cpuFamily: CpuFamily.CPU_X86_64,
					os: Os.OS_OSX,
				},
				versionString: "librespot 0.1.0",
			}).finish(),
		);
	}

	request(cmd: PacketType, payload: Uint8Array, receive?: PacketType) {
		return new Promise((resolve, reject) => {
			this.callbacks[receive ?? cmd] = (payload: Buffer | Error) => {
				if (payload instanceof Error) return reject(payload);
				resolve(payload);
			};

			this.send(cmd, payload);
		});
	}

	send(cmd: PacketType, payload: Uint8Array) {
		// console.log("send", PacketType[cmd])
		this.socket.write(this.send_cipher.encode(cmd, Buffer.from(payload)));
	}

	getNextSeq() {
		const seq = Buffer.alloc(8);
		seq.writeBigUInt64BE(BigInt(this.seq++));
		return seq;
	}

	onAESKeyError(payload: Buffer) {
		const seq = payload.readUint32BE(0);

		const callback = this.callbacks[seq];
		if (callback) callback(new Error("aes key error"));

		console.log("aes key error", new Uint8Array(payload));
	}

	onAESKey(payload: Buffer) {
		const seq = payload.readUint32BE(0);

		const data = payload.slice(4);
		console.log("aes key", data);

		const callback = this.callbacks[seq];
		if (callback) callback(data);

		return data;
	}

	sendKeyRequest(id: SpotifyId, file: FileId) {
		const seq = Buffer.alloc(4);
		const seqId = this.seq++;
		seq.writeUInt32BE(seqId);
		const data = file.bytes.append(id.toBytes()).append(seq).appendUInt16BE(0);

		return this.request(PacketType.RequestKey, data, seqId) as Promise<Buffer>;
	}

	onAPWelcome(payload: Buffer) {
		const welcome = APWelcome.decode(payload);

		this.username = welcome.canonicalUsername;
		this.auth_type = welcome.reusableAuthCredentialsType;
		this.auth_data = Buffer.from(welcome.reusableAuthCredentials);
		this.emit("credentials");

		return welcome;
	}

	onPing(payload: Buffer) {
		const server_timestamp = payload.readUInt32BE(0) * 1000;
		console.log("ping", new Date(server_timestamp));

		this.send(PacketType.Pong, Buffer.from([0, 0, 0, 0]));

		return server_timestamp;
	}

	onAuthFailure(payload: Buffer) {
		const failure = APLoginFailed.decode(payload);
		console.log("auth failure", failure);

		return failure;
	}

	onAudioKey(payload: Buffer) {
		return payload;
	}

	onProductInfo(payload: Buffer) {
		try {
			const str = payload.toString("utf8");
			const {
				products: { product },
			} = parser.parse(str) as { products: { product: ProductInfo } };
			this.productInfo = product;
			console.dir(product, { breakLength: Infinity });
		} catch (error) {
			console.error(error);
		}

		this.setReady();
	}

	onMessage = (cmd: PacketType, payload: Buffer) => {
		console.log("packet", PacketType[cmd] || cmd);
		const callback = this.callbacks[cmd];
		const handler = this.handlers[cmd];
		if (callback) callback(payload);
		if (handler) return handler.call(this, payload);
	};

	toJSON() {
		return {
			...super.toJSON(),
			username: this.username,
			auth_type: this.auth_type,
			auth_data: this.auth_data.toString("base64"),
		};
	}
}
