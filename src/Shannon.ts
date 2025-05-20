// @ts-nocheck
import ShannonCipher from "shannon";

const HEADER_SIZE = 3;
const MAC_SIZE = 4;

export class Shannon extends ShannonCipher {
	encodeNonce = 0;
	decodeNonce = 0;
	decodeState = "header";
	payloadLength = 0;
	cmd = 0;

	constructor(key: Buffer) {
		super(key);
	}

	// encrypt(data: Buffer): Buffer {
	// 	return super.encrypt(data)
	// }
	// decrypt(data: Buffer): Buffer {
	// 	return super.decrypt(data)
	// }
	// update(data: Buffer): Buffer {
	// 	return super.stream(data)
	// }
	// nonce(data: Buffer): Buffer {
	// 	return super.nonce(data)
	// }
	// key(data: Buffer): Buffer {
	// 	return super.key(data)
	// }
	// final(data?: Buffer | undefined): Buffer {
	// 	return super.final(data)
	// }

	encode(cmd: number, payload: Buffer): Buffer {
		const buf = Buffer.alloc(3 + payload.length);

		buf.writeUInt8(cmd, 0);
		buf.writeUInt16BE(payload.length, 1);
		payload.copy(buf, 3);

		const nonce = Buffer.alloc(4);
		nonce.writeUInt32BE(this.encodeNonce++);

		this.nonce(nonce);

		const result: Buffer = this.encrypt(buf);

		// copy the buffer, because .finish() modifies it
		const copy = Buffer.alloc(result.length);
		result.copy(copy);

		const mac = this.finish(Buffer.alloc(4));

		return Buffer.concat([result, mac]);
	}

	decode(buf: Buffer) {
		if (this.decodeState === "header") {
			if (buf.length >= HEADER_SIZE) {
				const nonce = Buffer.alloc(4);
				nonce.writeUInt32BE(this.decodeNonce++);

				this.nonce(nonce);

				const header = buf.slice(0, HEADER_SIZE);
				const result = this.decrypt(header);

				const cmd = result[0];
				const size = result.readUInt16BE(1);

				this.decodeState = "payload";
				this.payloadLength = size;
				this.cmd = cmd;
				buf = buf.slice(HEADER_SIZE);
			}
		}

		if (this.decodeState === "payload") {
			if (buf.length >= this.payloadLength + MAC_SIZE) {
				this.decodeState = "header";

				const payloadWithMac = buf.slice(0, this.payloadLength + MAC_SIZE);

				const payload = payloadWithMac.slice(0, this.payloadLength);
				const result = this.decrypt(payload);

				const mac = payloadWithMac.slice(this.payloadLength);
				const verifiedMac = this.finish(Buffer.alloc(4));
				if (Buffer.compare(mac, verifiedMac) !== 0) {
					throw new Error("invalid mac");
				}

				return {
					cmd: this.cmd,
					payload: result,
					newBuffer: buf.slice(this.payloadLength + MAC_SIZE),
				};
			}
		}

		return {
			newBuffer: buf,
		};
	}
}
