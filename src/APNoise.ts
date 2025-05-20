import axios from "axios";
import net from "net";
import "missing-native-js-functions";
import crypto from "crypto";
import { APResponseMessage, ClientHello, ClientResponsePlaintext, Cryptosuite, Platform, Product, ProductFlags } from "./proto";
import { Shannon } from "./Shannon";
import { DH_PRIME, INTRO, PacketType } from "./Constants";
import EventEmitter from "events";
import { Mutex } from "async-mutex";

export class APNoise extends EventEmitter {
	socket!: net.Socket;
	dh = crypto.createDiffieHellman(DH_PRIME, Buffer.from([2]));
	accumulator = Buffer.alloc(0);
	sentIntro = false;
	handshakeComplete = false;
	send_cipher!: Shannon;
	recv_cipher!: Shannon;
	spclient!: string;
	setConnected!: (value?: any) => void;
	connected = new Promise((resolve, reject) => {
		this.setConnected = resolve;
	});
	mutex = new Mutex();
	resolve?: (value: unknown) => void;

	constructor() {
		super();
		this.dh.generateKeys();
	}

	async getAccessPoint() {
		const response = await axios("https://apresolve.spotify.com/?type=accesspoint&type=dealer&type=spclient");

		return response.data as { accesspoint: string[]; dealer: string[]; spclient: string[] };
	}

	async connect() {
		const { accesspoint, spclient } = await this.getAccessPoint();
		this.spclient = `https://${spclient.first()}`;
		const [host, port] = accesspoint.first()!.split(":");

		this.socket = net.createConnection({
			host,
			port: Number(port),
		});
		this.socket.on("connect", this.onConnect);
		this.socket.on("data", (data) => {
			this.mutex.runExclusive(() => {
				this.onData(data);
			});
		});
		this.socket.on("error", console.error);
		this.socket.on("close", this.onClose);

		await new Promise((res) => {
			this.resolve = res;
		});

		return this.connected;
	}

	disconnect() {
		this.socket.end();
	}

	onClose(e: any) {
		console.log("closed", e);
	}

	send(cmd: PacketType, payload: Buffer) {
		this.socket.write(this.send_cipher.encode(cmd, payload));
	}
	// 01j8zvouWdSpa3zOww8zKX
	// 01j8zvouWdSpa3zOww8zKX

	private write(data: Uint8Array) {
		let sizeBuffer = Buffer.from([0, 0, 0, 0]);
		let size = 4 + data.length;
		sizeBuffer.writeUInt32BE(size, 0);

		if (!this.sentIntro) {
			this.sentIntro = true;
			size += INTRO.length;
			sizeBuffer.writeUInt32BE(size, 0);

			sizeBuffer = Buffer.concat([INTRO, sizeBuffer]);
		}

		const buffer = Buffer.concat([sizeBuffer, data]);

		this.socket.write(buffer);
		this.accumulator = Buffer.concat([this.accumulator, buffer]);
	}

	onHandshakeComplete() {
		this.resolve?.(undefined);
	}

	onConnect = async () => {
		this.setConnected();
		console.log("connected");
		const clientNonce = crypto.randomBytes(0x10);

		this.write(
			ClientHello.encode({
				buildInfo: {
					product: Product.PRODUCT_CLIENT,
					productFlags: [ProductFlags.PRODUCT_FLAG_NONE],
					platform: Platform.PLATFORM_OSX_X86_64,
					version: 117300517,
				},
				cryptosuitesSupported: [Cryptosuite.CRYPTO_SUITE_SHANNON],
				loginCryptoHello: {
					diffieHellman: {
						gc: this.dh.getPublicKey(),
						serverKeysKnown: 1,
					},
				},
				clientNonce,
				padding: Buffer.from([0x1e]),
				fingerprintsSupported: [],
				powschemesSupported: [],
			}).finish(),
		);
	};

	onMessage = (cmd: PacketType, payload: Buffer) => {};

	onData = (data: Buffer) => {
		if (this.handshakeComplete) {
			const input = Buffer.concat([this.accumulator, data]);
			const result = this.recv_cipher.decode(input);
			if (!result.cmd) return (this.accumulator = result.newBuffer);

			this.accumulator = result.newBuffer;
			this.onData(Buffer.alloc(0));

			return this.onMessage(result.cmd, result.payload);
		}
		this.accumulator = Buffer.concat([this.accumulator, data]);

		const size = data.readUInt32BE(0);
		const payload = data.slice(4, size);

		const response = APResponseMessage.decode(payload);
		if (!response.challenge) return;

		const remote_key = response.challenge!.loginCryptoChallenge!.diffieHellman!.gs;
		const remote_signature = response.challenge!.loginCryptoChallenge!.diffieHellman!.gsSignature;
		const shared_secret = this.dh.computeSecret(remote_key);
		const { challenge, send_key, recv_key } = this.compute_keys(shared_secret, this.accumulator!);

		this.send_cipher = new Shannon(send_key);
		this.recv_cipher = new Shannon(recv_key);

		this.write(
			ClientResponsePlaintext.encode({
				loginCryptoResponse: {
					diffieHellman: {
						hmac: challenge,
					},
				},
				powResponse: {},
				cryptoResponse: {},
			}).finish(),
		);

		this.accumulator = Buffer.alloc(0);
		this.handshakeComplete = true;
		this.onHandshakeComplete();
	};

	compute_keys(sharedSecret: Buffer, packets: Buffer) {
		let data = Buffer.alloc(0);

		for (let i = 1; i < 6; i++) {
			const mac = crypto
				.createHmac("sha1", sharedSecret)
				.update(packets)
				.update(Buffer.from([i]))
				.digest();

			data = Buffer.concat([data, mac]);
		}

		const mac = crypto.createHmac("sha1", data.slice(0, 0x14)).update(packets).digest();

		return {
			challenge: mac,
			send_key: data.slice(0x14, 0x34),
			recv_key: data.slice(0x34, 0x54),
		};
	}

	toJSON() {
		return {
			spclient: this.spclient,
		};
	}
}
