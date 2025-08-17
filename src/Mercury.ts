import { APClient } from "./APClient";
import { KEYMASTER_CLIENT_ID, PacketType } from "./Constants";
import { Header } from "./proto";

declare module "buffer" {
	interface Buffer {
		append(buffer: Buffer): Buffer;
		appendUInt8BE(value: number): Buffer;
		appendUInt16BE(value: number): Buffer;
	}
}

Buffer.prototype.append = function (buffer: Buffer) {
	return Buffer.concat([this, buffer]);
};

Buffer.prototype.appendUInt8BE = function (value: number) {
	const buffer = Buffer.alloc(1);
	buffer.writeUInt8(value);
	return this.append(buffer);
};

Buffer.prototype.appendUInt16BE = function (value: number) {
	const buffer = Buffer.alloc(2);
	buffer.writeUInt16BE(value);
	return this.append(buffer);
};

export enum MercuryMethod {
	GET = "GET",
	SUB = "SUB",
	UNSUB = "UNSUB",
	SEND = "SEND",
}

export interface MercuryPending {
	parts: Buffer[];
	partial: Buffer | null;
	callback: ((opts: { header: Header; body: Buffer[] }) => any) | null;
}

export interface Token {
	accessToken: string;
	expiresIn: number;
	tokenType: string;
	scope: string[];
	permissions: number[];
}

export class MercuryClient extends APClient {
	pending = new Map<string, MercuryPending>();
	access_token!: string;

	constructor(data: Partial<MercuryClient>) {
		super(data);

		this.handlers[PacketType.MercuryReq] = (data) => this.onMercuryResponse(PacketType.MercuryReq, data);
		this.handlers[PacketType.MercurySub] = (data) => this.onMercuryResponse(PacketType.MercurySub, data);
		this.handlers[PacketType.MercuryUnsub] = (data) => this.onMercuryResponse(PacketType.MercuryUnsub, data);
		this.handlers[PacketType.MercuryEvent] = (data) => this.onMercuryResponse(PacketType.MercuryEvent, data);
	}

	private mercuryPacketType(method: MercuryMethod) {
		switch (method) {
			case MercuryMethod.SEND:
			case MercuryMethod.GET:
				return PacketType.MercuryReq;
			case MercuryMethod.SUB:
				return PacketType.MercurySub;
			case MercuryMethod.UNSUB:
				return PacketType.MercuryUnsub;
		}
	}

	async fetchAccessToken(scope: string) {
		if (this.access_token) return this.access_token;

		const response = await this.mercuryRequest({
			method: MercuryMethod.GET,
			uri: `hm://keymaster/token/authenticated?scope=${scope}&client_id=${KEYMASTER_CLIENT_ID}&device_id=${this.deviceId}`,
		});

		const [payload] = response.body;
		const data = JSON.parse(payload.toString()) as Token;
		console.log("Fetched Access Token", data.accessToken);
		this.access_token = data.accessToken;

		return data.accessToken;
	}

	mercuryRequest(opts: { payload?: Buffer[]; uri: string; method: MercuryMethod; contentType?: string }) {
		const seq = this.getNextSeq();
		let packet = Buffer.alloc(0);

		packet = packet.appendUInt16BE(seq.length);
		packet = packet.append(seq);
		packet = packet.appendUInt8BE(1);
		packet = packet.appendUInt16BE(1 + (opts.payload ? opts.payload.length : 0));

		const header = {} as Header;
		header.uri = opts.uri;
		header.method = opts.method;
		if (opts.contentType) {
			header.contentType = opts.contentType;
		}

		const headerBuffer = Buffer.from(Header.encode(header).finish());
		packet = packet.appendUInt16BE(headerBuffer.length).append(headerBuffer);

		if (opts.payload) {
			for (let part of opts.payload) {
				packet = packet.appendUInt16BE(part.length).append(part);
			}
		}

		const packetType = this.mercuryPacketType(opts.method);

		this.send(packetType, packet);

		return new Promise<{ header: Header; body: Buffer[] }>((resolve, reject) => {
			this.pending.set(seq.toString("hex"), {
				parts: [],
				partial: null,
				callback: resolve,
			});
		});
	}

	onMercuryResponse(cmd: PacketType, data: Buffer) {
		const seqLen = data.readUInt16BE(0);
		const seq = data.slice(2, seqLen + 2).toString("hex");
		const flags = data[seqLen + 2];
		const count = data.readUInt16BE(seqLen + 3);
		data = data.slice(seqLen + 5);

		let pending = this.pending.get(seq);
		if (!pending) {
			console.warn(`Ignore seq ${seq} cmd ${cmd}`);
			// return Promise.reject(new Error('Invalid command'));
			// return;
			pending = {
				partial: null,
				callback() {},
				parts: [],
			};
		}

		for (let i = 0; i < count; i++) {
			const size = data.readUInt16BE(0);
			let part = data.slice(2, size + 2);
			data = data.slice(size + 2);
			if (pending?.partial) {
				pending.partial = Buffer.concat([pending.partial, part]);
				part = pending.partial;
				pending.partial = null;
			}

			if (i === count - 1 && flags === 2) {
				pending.partial = part;
			} else {
				pending.parts.push(part);
			}
		}

		if (flags === 1) {
			return this.completeRequest(cmd, pending);
		} else {
			console.log("mercury", "pending", seq);
			this.pending.set(seq, pending);
		}

		return Promise.resolve();
	}

	completeRequest(cmd: PacketType, pending: MercuryPending) {
		const headerData = pending.parts.shift()!;
		const header = Header.decode(headerData);

		const response = { header, body: pending.parts };
		pending.callback?.(response);
		this.emit("mercury", response);
		console.log("mercury", header);

		return response;
	}

	toJSON() {
		return {
			...super.toJSON(),
			access_token: this.access_token,
		};
	}
}
