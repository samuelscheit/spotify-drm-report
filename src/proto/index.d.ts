import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a ClientResponseEncrypted. */
export interface IClientResponseEncrypted {
	/** ClientResponseEncrypted loginCredentials */
	loginCredentials: ILoginCredentials;

	/** ClientResponseEncrypted accountCreation */
	accountCreation?: AccountCreation | null;

	/** ClientResponseEncrypted fingerprintResponse */
	fingerprintResponse?: IFingerprintResponseUnion | null;

	/** ClientResponseEncrypted peerTicket */
	peerTicket?: IPeerTicketUnion | null;

	/** ClientResponseEncrypted systemInfo */
	systemInfo: ISystemInfo;

	/** ClientResponseEncrypted platformModel */
	platformModel?: string | null;

	/** ClientResponseEncrypted versionString */
	versionString?: string | null;

	/** ClientResponseEncrypted appkey */
	appkey?: ILibspotifyAppKey | null;

	/** ClientResponseEncrypted clientInfo */
	clientInfo?: IClientInfo | null;
}

/** Represents a ClientResponseEncrypted. */
export class ClientResponseEncrypted implements IClientResponseEncrypted {
	/**
	 * Constructs a new ClientResponseEncrypted.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IClientResponseEncrypted);

	/** ClientResponseEncrypted loginCredentials. */
	public loginCredentials: ILoginCredentials;

	/** ClientResponseEncrypted accountCreation. */
	public accountCreation: AccountCreation;

	/** ClientResponseEncrypted fingerprintResponse. */
	public fingerprintResponse?: IFingerprintResponseUnion | null;

	/** ClientResponseEncrypted peerTicket. */
	public peerTicket?: IPeerTicketUnion | null;

	/** ClientResponseEncrypted systemInfo. */
	public systemInfo: ISystemInfo;

	/** ClientResponseEncrypted platformModel. */
	public platformModel: string;

	/** ClientResponseEncrypted versionString. */
	public versionString: string;

	/** ClientResponseEncrypted appkey. */
	public appkey?: ILibspotifyAppKey | null;

	/** ClientResponseEncrypted clientInfo. */
	public clientInfo?: IClientInfo | null;

	/**
	 * Creates a new ClientResponseEncrypted instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ClientResponseEncrypted instance
	 */
	public static create(properties?: IClientResponseEncrypted): ClientResponseEncrypted;

	/**
	 * Encodes the specified ClientResponseEncrypted message. Does not implicitly {@link ClientResponseEncrypted.verify|verify} messages.
	 * @param message ClientResponseEncrypted message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IClientResponseEncrypted, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ClientResponseEncrypted message, length delimited. Does not implicitly {@link ClientResponseEncrypted.verify|verify} messages.
	 * @param message ClientResponseEncrypted message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IClientResponseEncrypted, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ClientResponseEncrypted message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ClientResponseEncrypted
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientResponseEncrypted;

	/**
	 * Decodes a ClientResponseEncrypted message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ClientResponseEncrypted
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientResponseEncrypted;

	/**
	 * Verifies a ClientResponseEncrypted message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ClientResponseEncrypted message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ClientResponseEncrypted
	 */
	public static fromObject(object: { [k: string]: any }): ClientResponseEncrypted;

	/**
	 * Creates a plain object from a ClientResponseEncrypted message. Also converts values to other types if specified.
	 * @param message ClientResponseEncrypted
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ClientResponseEncrypted, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ClientResponseEncrypted to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ClientResponseEncrypted
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a LoginCredentials. */
export interface ILoginCredentials {
	/** LoginCredentials username */
	username?: string | null;

	/** LoginCredentials typ */
	typ: AuthenticationType;

	/** LoginCredentials authData */
	authData?: Uint8Array | null;
}

/** Represents a LoginCredentials. */
export class LoginCredentials implements ILoginCredentials {
	/**
	 * Constructs a new LoginCredentials.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ILoginCredentials);

	/** LoginCredentials username. */
	public username: string;

	/** LoginCredentials typ. */
	public typ: AuthenticationType;

	/** LoginCredentials authData. */
	public authData: Uint8Array;

	/**
	 * Creates a new LoginCredentials instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns LoginCredentials instance
	 */
	public static create(properties?: ILoginCredentials): LoginCredentials;

	/**
	 * Encodes the specified LoginCredentials message. Does not implicitly {@link LoginCredentials.verify|verify} messages.
	 * @param message LoginCredentials message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ILoginCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified LoginCredentials message, length delimited. Does not implicitly {@link LoginCredentials.verify|verify} messages.
	 * @param message LoginCredentials message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ILoginCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a LoginCredentials message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns LoginCredentials
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): LoginCredentials;

	/**
	 * Decodes a LoginCredentials message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns LoginCredentials
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): LoginCredentials;

	/**
	 * Verifies a LoginCredentials message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a LoginCredentials message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns LoginCredentials
	 */
	public static fromObject(object: { [k: string]: any }): LoginCredentials;

	/**
	 * Creates a plain object from a LoginCredentials message. Also converts values to other types if specified.
	 * @param message LoginCredentials
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: LoginCredentials, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this LoginCredentials to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for LoginCredentials
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** AuthenticationType enum. */
export enum AuthenticationType {
	AUTHENTICATION_USER_PASS = 0,
	AUTHENTICATION_STORED_SPOTIFY_CREDENTIALS = 1,
	AUTHENTICATION_STORED_FACEBOOK_CREDENTIALS = 2,
	AUTHENTICATION_SPOTIFY_TOKEN = 3,
	AUTHENTICATION_FACEBOOK_TOKEN = 4,
}

/** AccountCreation enum. */
export enum AccountCreation {
	ACCOUNT_CREATION_ALWAYS_PROMPT = 1,
	ACCOUNT_CREATION_ALWAYS_CREATE = 3,
}

/** Represents a FingerprintResponseUnion. */
export class FingerprintResponseUnion implements IFingerprintResponseUnion {
	/**
	 * Constructs a new FingerprintResponseUnion.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IFingerprintResponseUnion);

	/** FingerprintResponseUnion grain. */
	public grain?: IFingerprintGrainResponse | null;

	/** FingerprintResponseUnion hmacRipemd. */
	public hmacRipemd?: IFingerprintHmacRipemdResponse | null;

	/**
	 * Creates a new FingerprintResponseUnion instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns FingerprintResponseUnion instance
	 */
	public static create(properties?: IFingerprintResponseUnion): FingerprintResponseUnion;

	/**
	 * Encodes the specified FingerprintResponseUnion message. Does not implicitly {@link FingerprintResponseUnion.verify|verify} messages.
	 * @param message FingerprintResponseUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IFingerprintResponseUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified FingerprintResponseUnion message, length delimited. Does not implicitly {@link FingerprintResponseUnion.verify|verify} messages.
	 * @param message FingerprintResponseUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IFingerprintResponseUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a FingerprintResponseUnion message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns FingerprintResponseUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): FingerprintResponseUnion;

	/**
	 * Decodes a FingerprintResponseUnion message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns FingerprintResponseUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): FingerprintResponseUnion;

	/**
	 * Verifies a FingerprintResponseUnion message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a FingerprintResponseUnion message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns FingerprintResponseUnion
	 */
	public static fromObject(object: { [k: string]: any }): FingerprintResponseUnion;

	/**
	 * Creates a plain object from a FingerprintResponseUnion message. Also converts values to other types if specified.
	 * @param message FingerprintResponseUnion
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: FingerprintResponseUnion, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this FingerprintResponseUnion to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for FingerprintResponseUnion
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a FingerprintGrainResponse. */
export class FingerprintGrainResponse implements IFingerprintGrainResponse {
	/**
	 * Constructs a new FingerprintGrainResponse.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IFingerprintGrainResponse);

	/** FingerprintGrainResponse encryptedKey. */
	public encryptedKey: Uint8Array;

	/**
	 * Creates a new FingerprintGrainResponse instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns FingerprintGrainResponse instance
	 */
	public static create(properties?: IFingerprintGrainResponse): FingerprintGrainResponse;

	/**
	 * Encodes the specified FingerprintGrainResponse message. Does not implicitly {@link FingerprintGrainResponse.verify|verify} messages.
	 * @param message FingerprintGrainResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IFingerprintGrainResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified FingerprintGrainResponse message, length delimited. Does not implicitly {@link FingerprintGrainResponse.verify|verify} messages.
	 * @param message FingerprintGrainResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IFingerprintGrainResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a FingerprintGrainResponse message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns FingerprintGrainResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): FingerprintGrainResponse;

	/**
	 * Decodes a FingerprintGrainResponse message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns FingerprintGrainResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): FingerprintGrainResponse;

	/**
	 * Verifies a FingerprintGrainResponse message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a FingerprintGrainResponse message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns FingerprintGrainResponse
	 */
	public static fromObject(object: { [k: string]: any }): FingerprintGrainResponse;

	/**
	 * Creates a plain object from a FingerprintGrainResponse message. Also converts values to other types if specified.
	 * @param message FingerprintGrainResponse
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: FingerprintGrainResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this FingerprintGrainResponse to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for FingerprintGrainResponse
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a FingerprintHmacRipemdResponse. */
export class FingerprintHmacRipemdResponse implements IFingerprintHmacRipemdResponse {
	/**
	 * Constructs a new FingerprintHmacRipemdResponse.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IFingerprintHmacRipemdResponse);

	/** FingerprintHmacRipemdResponse hmac. */
	public hmac: Uint8Array;

	/**
	 * Creates a new FingerprintHmacRipemdResponse instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns FingerprintHmacRipemdResponse instance
	 */
	public static create(properties?: IFingerprintHmacRipemdResponse): FingerprintHmacRipemdResponse;

	/**
	 * Encodes the specified FingerprintHmacRipemdResponse message. Does not implicitly {@link FingerprintHmacRipemdResponse.verify|verify} messages.
	 * @param message FingerprintHmacRipemdResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IFingerprintHmacRipemdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified FingerprintHmacRipemdResponse message, length delimited. Does not implicitly {@link FingerprintHmacRipemdResponse.verify|verify} messages.
	 * @param message FingerprintHmacRipemdResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IFingerprintHmacRipemdResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a FingerprintHmacRipemdResponse message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns FingerprintHmacRipemdResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): FingerprintHmacRipemdResponse;

	/**
	 * Decodes a FingerprintHmacRipemdResponse message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns FingerprintHmacRipemdResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): FingerprintHmacRipemdResponse;

	/**
	 * Verifies a FingerprintHmacRipemdResponse message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a FingerprintHmacRipemdResponse message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns FingerprintHmacRipemdResponse
	 */
	public static fromObject(object: { [k: string]: any }): FingerprintHmacRipemdResponse;

	/**
	 * Creates a plain object from a FingerprintHmacRipemdResponse message. Also converts values to other types if specified.
	 * @param message FingerprintHmacRipemdResponse
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: FingerprintHmacRipemdResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this FingerprintHmacRipemdResponse to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for FingerprintHmacRipemdResponse
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PeerTicketUnion. */
export class PeerTicketUnion implements IPeerTicketUnion {
	/**
	 * Constructs a new PeerTicketUnion.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IPeerTicketUnion);

	/** PeerTicketUnion publicKey. */
	public publicKey?: IPeerTicketPublicKey | null;

	/** PeerTicketUnion oldTicket. */
	public oldTicket?: IPeerTicketOld | null;

	/**
	 * Creates a new PeerTicketUnion instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns PeerTicketUnion instance
	 */
	public static create(properties?: IPeerTicketUnion): PeerTicketUnion;

	/**
	 * Encodes the specified PeerTicketUnion message. Does not implicitly {@link PeerTicketUnion.verify|verify} messages.
	 * @param message PeerTicketUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IPeerTicketUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified PeerTicketUnion message, length delimited. Does not implicitly {@link PeerTicketUnion.verify|verify} messages.
	 * @param message PeerTicketUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IPeerTicketUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a PeerTicketUnion message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns PeerTicketUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PeerTicketUnion;

	/**
	 * Decodes a PeerTicketUnion message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns PeerTicketUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PeerTicketUnion;

	/**
	 * Verifies a PeerTicketUnion message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a PeerTicketUnion message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns PeerTicketUnion
	 */
	public static fromObject(object: { [k: string]: any }): PeerTicketUnion;

	/**
	 * Creates a plain object from a PeerTicketUnion message. Also converts values to other types if specified.
	 * @param message PeerTicketUnion
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: PeerTicketUnion, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this PeerTicketUnion to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for PeerTicketUnion
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PeerTicketPublicKey. */
export class PeerTicketPublicKey implements IPeerTicketPublicKey {
	/**
	 * Constructs a new PeerTicketPublicKey.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IPeerTicketPublicKey);

	/** PeerTicketPublicKey publicKey. */
	public publicKey: Uint8Array;

	/**
	 * Creates a new PeerTicketPublicKey instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns PeerTicketPublicKey instance
	 */
	public static create(properties?: IPeerTicketPublicKey): PeerTicketPublicKey;

	/**
	 * Encodes the specified PeerTicketPublicKey message. Does not implicitly {@link PeerTicketPublicKey.verify|verify} messages.
	 * @param message PeerTicketPublicKey message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IPeerTicketPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified PeerTicketPublicKey message, length delimited. Does not implicitly {@link PeerTicketPublicKey.verify|verify} messages.
	 * @param message PeerTicketPublicKey message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IPeerTicketPublicKey, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a PeerTicketPublicKey message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns PeerTicketPublicKey
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PeerTicketPublicKey;

	/**
	 * Decodes a PeerTicketPublicKey message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns PeerTicketPublicKey
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PeerTicketPublicKey;

	/**
	 * Verifies a PeerTicketPublicKey message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a PeerTicketPublicKey message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns PeerTicketPublicKey
	 */
	public static fromObject(object: { [k: string]: any }): PeerTicketPublicKey;

	/**
	 * Creates a plain object from a PeerTicketPublicKey message. Also converts values to other types if specified.
	 * @param message PeerTicketPublicKey
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: PeerTicketPublicKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this PeerTicketPublicKey to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for PeerTicketPublicKey
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PeerTicketOld. */
export class PeerTicketOld implements IPeerTicketOld {
	/**
	 * Constructs a new PeerTicketOld.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IPeerTicketOld);

	/** PeerTicketOld peerTicket. */
	public peerTicket: Uint8Array;

	/** PeerTicketOld peerTicketSignature. */
	public peerTicketSignature: Uint8Array;

	/**
	 * Creates a new PeerTicketOld instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns PeerTicketOld instance
	 */
	public static create(properties?: IPeerTicketOld): PeerTicketOld;

	/**
	 * Encodes the specified PeerTicketOld message. Does not implicitly {@link PeerTicketOld.verify|verify} messages.
	 * @param message PeerTicketOld message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IPeerTicketOld, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified PeerTicketOld message, length delimited. Does not implicitly {@link PeerTicketOld.verify|verify} messages.
	 * @param message PeerTicketOld message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IPeerTicketOld, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a PeerTicketOld message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns PeerTicketOld
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PeerTicketOld;

	/**
	 * Decodes a PeerTicketOld message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns PeerTicketOld
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PeerTicketOld;

	/**
	 * Verifies a PeerTicketOld message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a PeerTicketOld message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns PeerTicketOld
	 */
	public static fromObject(object: { [k: string]: any }): PeerTicketOld;

	/**
	 * Creates a plain object from a PeerTicketOld message. Also converts values to other types if specified.
	 * @param message PeerTicketOld
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: PeerTicketOld, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this PeerTicketOld to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for PeerTicketOld
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SystemInfo. */
export class SystemInfo implements ISystemInfo {
	/**
	 * Constructs a new SystemInfo.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ISystemInfo);

	/** SystemInfo cpuFamily. */
	public cpuFamily: CpuFamily;

	/** SystemInfo cpuSubtype. */
	public cpuSubtype: number;

	/** SystemInfo cpuExt. */
	public cpuExt: number;

	/** SystemInfo brand. */
	public brand: Brand;

	/** SystemInfo brandFlags. */
	public brandFlags: number;

	/** SystemInfo os. */
	public os: Os;

	/** SystemInfo osVersion. */
	public osVersion: number;

	/** SystemInfo osExt. */
	public osExt: number;

	/** SystemInfo systemInformationString. */
	public systemInformationString: string;

	/** SystemInfo deviceId. */
	public deviceId: string;

	/**
	 * Creates a new SystemInfo instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns SystemInfo instance
	 */
	public static create(properties?: ISystemInfo): SystemInfo;

	/**
	 * Encodes the specified SystemInfo message. Does not implicitly {@link SystemInfo.verify|verify} messages.
	 * @param message SystemInfo message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ISystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified SystemInfo message, length delimited. Does not implicitly {@link SystemInfo.verify|verify} messages.
	 * @param message SystemInfo message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ISystemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a SystemInfo message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns SystemInfo
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): SystemInfo;

	/**
	 * Decodes a SystemInfo message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns SystemInfo
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): SystemInfo;

	/**
	 * Verifies a SystemInfo message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a SystemInfo message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns SystemInfo
	 */
	public static fromObject(object: { [k: string]: any }): SystemInfo;

	/**
	 * Creates a plain object from a SystemInfo message. Also converts values to other types if specified.
	 * @param message SystemInfo
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: SystemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this SystemInfo to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for SystemInfo
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** CpuFamily enum. */
export enum CpuFamily {
	CPU_UNKNOWN = 0,
	CPU_X86 = 1,
	CPU_X86_64 = 2,
	CPU_PPC = 3,
	CPU_PPC_64 = 4,
	CPU_ARM = 5,
	CPU_IA64 = 6,
	CPU_SH = 7,
	CPU_MIPS = 8,
	CPU_BLACKFIN = 9,
}

/** Brand enum. */
export enum Brand {
	BRAND_UNBRANDED = 0,
	BRAND_INQ = 1,
	BRAND_HTC = 2,
	BRAND_NOKIA = 3,
}

/** Os enum. */
export enum Os {
	OS_UNKNOWN = 0,
	OS_WINDOWS = 1,
	OS_OSX = 2,
	OS_IPHONE = 3,
	OS_S60 = 4,
	OS_LINUX = 5,
	OS_WINDOWS_CE = 6,
	OS_ANDROID = 7,
	OS_PALM = 8,
	OS_FREEBSD = 9,
	OS_BLACKBERRY = 10,
	OS_SONOS = 11,
	OS_LOGITECH = 12,
	OS_WP7 = 13,
	OS_ONKYO = 14,
	OS_PHILIPS = 15,
	OS_WD = 16,
	OS_VOLVO = 17,
	OS_TIVO = 18,
	OS_AWOX = 19,
	OS_MEEGO = 20,
	OS_QNXNTO = 21,
	OS_BCO = 22,
}

/** Represents a LibspotifyAppKey. */
export class LibspotifyAppKey implements ILibspotifyAppKey {
	/**
	 * Constructs a new LibspotifyAppKey.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ILibspotifyAppKey);

	/** LibspotifyAppKey version. */
	public version: number;

	/** LibspotifyAppKey devkey. */
	public devkey: Uint8Array;

	/** LibspotifyAppKey signature. */
	public signature: Uint8Array;

	/** LibspotifyAppKey useragent. */
	public useragent: string;

	/** LibspotifyAppKey callbackHash. */
	public callbackHash: Uint8Array;

	/**
	 * Creates a new LibspotifyAppKey instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns LibspotifyAppKey instance
	 */
	public static create(properties?: ILibspotifyAppKey): LibspotifyAppKey;

	/**
	 * Encodes the specified LibspotifyAppKey message. Does not implicitly {@link LibspotifyAppKey.verify|verify} messages.
	 * @param message LibspotifyAppKey message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ILibspotifyAppKey, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified LibspotifyAppKey message, length delimited. Does not implicitly {@link LibspotifyAppKey.verify|verify} messages.
	 * @param message LibspotifyAppKey message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ILibspotifyAppKey, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a LibspotifyAppKey message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns LibspotifyAppKey
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): LibspotifyAppKey;

	/**
	 * Decodes a LibspotifyAppKey message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns LibspotifyAppKey
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): LibspotifyAppKey;

	/**
	 * Verifies a LibspotifyAppKey message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a LibspotifyAppKey message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns LibspotifyAppKey
	 */
	public static fromObject(object: { [k: string]: any }): LibspotifyAppKey;

	/**
	 * Creates a plain object from a LibspotifyAppKey message. Also converts values to other types if specified.
	 * @param message LibspotifyAppKey
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: LibspotifyAppKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this LibspotifyAppKey to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for LibspotifyAppKey
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ClientInfo. */
export class ClientInfo implements IClientInfo {
	/**
	 * Constructs a new ClientInfo.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IClientInfo);

	/** ClientInfo limited. */
	public limited: boolean;

	/** ClientInfo fb. */
	public fb?: IClientInfoFacebook | null;

	/** ClientInfo language. */
	public language: string;

	/**
	 * Creates a new ClientInfo instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ClientInfo instance
	 */
	public static create(properties?: IClientInfo): ClientInfo;

	/**
	 * Encodes the specified ClientInfo message. Does not implicitly {@link ClientInfo.verify|verify} messages.
	 * @param message ClientInfo message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ClientInfo message, length delimited. Does not implicitly {@link ClientInfo.verify|verify} messages.
	 * @param message ClientInfo message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IClientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ClientInfo message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ClientInfo
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientInfo;

	/**
	 * Decodes a ClientInfo message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ClientInfo
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientInfo;

	/**
	 * Verifies a ClientInfo message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ClientInfo message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ClientInfo
	 */
	public static fromObject(object: { [k: string]: any }): ClientInfo;

	/**
	 * Creates a plain object from a ClientInfo message. Also converts values to other types if specified.
	 * @param message ClientInfo
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ClientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ClientInfo to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ClientInfo
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ClientInfoFacebook. */
export class ClientInfoFacebook implements IClientInfoFacebook {
	/**
	 * Constructs a new ClientInfoFacebook.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IClientInfoFacebook);

	/** ClientInfoFacebook machineId. */
	public machineId: string;

	/**
	 * Creates a new ClientInfoFacebook instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ClientInfoFacebook instance
	 */
	public static create(properties?: IClientInfoFacebook): ClientInfoFacebook;

	/**
	 * Encodes the specified ClientInfoFacebook message. Does not implicitly {@link ClientInfoFacebook.verify|verify} messages.
	 * @param message ClientInfoFacebook message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IClientInfoFacebook, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ClientInfoFacebook message, length delimited. Does not implicitly {@link ClientInfoFacebook.verify|verify} messages.
	 * @param message ClientInfoFacebook message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IClientInfoFacebook, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ClientInfoFacebook message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ClientInfoFacebook
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientInfoFacebook;

	/**
	 * Decodes a ClientInfoFacebook message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ClientInfoFacebook
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientInfoFacebook;

	/**
	 * Verifies a ClientInfoFacebook message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ClientInfoFacebook message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ClientInfoFacebook
	 */
	public static fromObject(object: { [k: string]: any }): ClientInfoFacebook;

	/**
	 * Creates a plain object from a ClientInfoFacebook message. Also converts values to other types if specified.
	 * @param message ClientInfoFacebook
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ClientInfoFacebook, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ClientInfoFacebook to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ClientInfoFacebook
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a APWelcome. */
export class APWelcome implements IAPWelcome {
	/**
	 * Constructs a new APWelcome.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IAPWelcome);

	/** APWelcome canonicalUsername. */
	public canonicalUsername: string;

	/** APWelcome accountTypeLoggedIn. */
	public accountTypeLoggedIn: AccountType;

	/** APWelcome credentialsTypeLoggedIn. */
	public credentialsTypeLoggedIn: AccountType;

	/** APWelcome reusableAuthCredentialsType. */
	public reusableAuthCredentialsType: AuthenticationType;

	/** APWelcome reusableAuthCredentials. */
	public reusableAuthCredentials: Uint8Array;

	/** APWelcome lfsSecret. */
	public lfsSecret: Uint8Array;

	/** APWelcome accountInfo. */
	public accountInfo?: IAccountInfo | null;

	/** APWelcome fb. */
	public fb?: IAccountInfoFacebook | null;

	/**
	 * Creates a new APWelcome instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns APWelcome instance
	 */
	public static create(properties?: IAPWelcome): APWelcome;

	/**
	 * Encodes the specified APWelcome message. Does not implicitly {@link APWelcome.verify|verify} messages.
	 * @param message APWelcome message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IAPWelcome, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified APWelcome message, length delimited. Does not implicitly {@link APWelcome.verify|verify} messages.
	 * @param message APWelcome message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IAPWelcome, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a APWelcome message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns APWelcome
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): APWelcome;

	/**
	 * Decodes a APWelcome message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns APWelcome
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): APWelcome;

	/**
	 * Verifies a APWelcome message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a APWelcome message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns APWelcome
	 */
	public static fromObject(object: { [k: string]: any }): APWelcome;

	/**
	 * Creates a plain object from a APWelcome message. Also converts values to other types if specified.
	 * @param message APWelcome
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: APWelcome, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this APWelcome to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for APWelcome
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** AccountType enum. */
export enum AccountType {
	Spotify = 0,
	Facebook = 1,
}

/** Represents an AccountInfo. */
export class AccountInfo implements IAccountInfo {
	/**
	 * Constructs a new AccountInfo.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IAccountInfo);

	/** AccountInfo spotify. */
	public spotify?: IAccountInfoSpotify | null;

	/** AccountInfo facebook. */
	public facebook?: IAccountInfoFacebook | null;

	/**
	 * Creates a new AccountInfo instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns AccountInfo instance
	 */
	public static create(properties?: IAccountInfo): AccountInfo;

	/**
	 * Encodes the specified AccountInfo message. Does not implicitly {@link AccountInfo.verify|verify} messages.
	 * @param message AccountInfo message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified AccountInfo message, length delimited. Does not implicitly {@link AccountInfo.verify|verify} messages.
	 * @param message AccountInfo message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an AccountInfo message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns AccountInfo
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): AccountInfo;

	/**
	 * Decodes an AccountInfo message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns AccountInfo
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): AccountInfo;

	/**
	 * Verifies an AccountInfo message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an AccountInfo message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns AccountInfo
	 */
	public static fromObject(object: { [k: string]: any }): AccountInfo;

	/**
	 * Creates a plain object from an AccountInfo message. Also converts values to other types if specified.
	 * @param message AccountInfo
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: AccountInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this AccountInfo to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for AccountInfo
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AccountInfoSpotify. */
export class AccountInfoSpotify implements IAccountInfoSpotify {
	/**
	 * Constructs a new AccountInfoSpotify.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IAccountInfoSpotify);

	/**
	 * Creates a new AccountInfoSpotify instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns AccountInfoSpotify instance
	 */
	public static create(properties?: IAccountInfoSpotify): AccountInfoSpotify;

	/**
	 * Encodes the specified AccountInfoSpotify message. Does not implicitly {@link AccountInfoSpotify.verify|verify} messages.
	 * @param message AccountInfoSpotify message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IAccountInfoSpotify, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified AccountInfoSpotify message, length delimited. Does not implicitly {@link AccountInfoSpotify.verify|verify} messages.
	 * @param message AccountInfoSpotify message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IAccountInfoSpotify, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an AccountInfoSpotify message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns AccountInfoSpotify
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): AccountInfoSpotify;

	/**
	 * Decodes an AccountInfoSpotify message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns AccountInfoSpotify
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): AccountInfoSpotify;

	/**
	 * Verifies an AccountInfoSpotify message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an AccountInfoSpotify message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns AccountInfoSpotify
	 */
	public static fromObject(object: { [k: string]: any }): AccountInfoSpotify;

	/**
	 * Creates a plain object from an AccountInfoSpotify message. Also converts values to other types if specified.
	 * @param message AccountInfoSpotify
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: AccountInfoSpotify, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this AccountInfoSpotify to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for AccountInfoSpotify
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AccountInfoFacebook. */
export class AccountInfoFacebook implements IAccountInfoFacebook {
	/**
	 * Constructs a new AccountInfoFacebook.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IAccountInfoFacebook);

	/** AccountInfoFacebook accessToken. */
	public accessToken: string;

	/** AccountInfoFacebook machineId. */
	public machineId: string;

	/**
	 * Creates a new AccountInfoFacebook instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns AccountInfoFacebook instance
	 */
	public static create(properties?: IAccountInfoFacebook): AccountInfoFacebook;

	/**
	 * Encodes the specified AccountInfoFacebook message. Does not implicitly {@link AccountInfoFacebook.verify|verify} messages.
	 * @param message AccountInfoFacebook message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IAccountInfoFacebook, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified AccountInfoFacebook message, length delimited. Does not implicitly {@link AccountInfoFacebook.verify|verify} messages.
	 * @param message AccountInfoFacebook message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IAccountInfoFacebook, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an AccountInfoFacebook message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns AccountInfoFacebook
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): AccountInfoFacebook;

	/**
	 * Decodes an AccountInfoFacebook message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns AccountInfoFacebook
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): AccountInfoFacebook;

	/**
	 * Verifies an AccountInfoFacebook message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an AccountInfoFacebook message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns AccountInfoFacebook
	 */
	public static fromObject(object: { [k: string]: any }): AccountInfoFacebook;

	/**
	 * Creates a plain object from an AccountInfoFacebook message. Also converts values to other types if specified.
	 * @param message AccountInfoFacebook
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: AccountInfoFacebook, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this AccountInfoFacebook to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for AccountInfoFacebook
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ClientTokenRequest. */
export class ClientTokenRequest implements IClientTokenRequest {
	/**
	 * Constructs a new ClientTokenRequest.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IClientTokenRequest);

	/** ClientTokenRequest requestType. */
	public requestType: ClientTokenRequestType;

	/** ClientTokenRequest clientData. */
	public clientData?: IClientDataRequest | null;

	/** ClientTokenRequest challengeAnswers. */
	public challengeAnswers?: IChallengeAnswersRequest | null;

	/** ClientTokenRequest request. */
	public request?: "clientData" | "challengeAnswers";

	/**
	 * Creates a new ClientTokenRequest instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ClientTokenRequest instance
	 */
	public static create(properties?: IClientTokenRequest): ClientTokenRequest;

	/**
	 * Encodes the specified ClientTokenRequest message. Does not implicitly {@link ClientTokenRequest.verify|verify} messages.
	 * @param message ClientTokenRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IClientTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ClientTokenRequest message, length delimited. Does not implicitly {@link ClientTokenRequest.verify|verify} messages.
	 * @param message ClientTokenRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IClientTokenRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ClientTokenRequest message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ClientTokenRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientTokenRequest;

	/**
	 * Decodes a ClientTokenRequest message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ClientTokenRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientTokenRequest;

	/**
	 * Verifies a ClientTokenRequest message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ClientTokenRequest message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ClientTokenRequest
	 */
	public static fromObject(object: { [k: string]: any }): ClientTokenRequest;

	/**
	 * Creates a plain object from a ClientTokenRequest message. Also converts values to other types if specified.
	 * @param message ClientTokenRequest
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ClientTokenRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ClientTokenRequest to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ClientTokenRequest
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ClientDataRequest. */
export class ClientDataRequest implements IClientDataRequest {
	/**
	 * Constructs a new ClientDataRequest.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IClientDataRequest);

	/** ClientDataRequest clientVersion. */
	public clientVersion: string;

	/** ClientDataRequest clientId. */
	public clientId: string;

	/** ClientDataRequest connectivitySdkData. */
	public connectivitySdkData?: spotify.clienttoken.data.v0.IConnectivitySdkData | null;

	/** ClientDataRequest data. */
	public data?: "connectivitySdkData";

	/**
	 * Creates a new ClientDataRequest instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ClientDataRequest instance
	 */
	public static create(properties?: IClientDataRequest): ClientDataRequest;

	/**
	 * Encodes the specified ClientDataRequest message. Does not implicitly {@link ClientDataRequest.verify|verify} messages.
	 * @param message ClientDataRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IClientDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ClientDataRequest message, length delimited. Does not implicitly {@link ClientDataRequest.verify|verify} messages.
	 * @param message ClientDataRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IClientDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ClientDataRequest message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ClientDataRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientDataRequest;

	/**
	 * Decodes a ClientDataRequest message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ClientDataRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientDataRequest;

	/**
	 * Verifies a ClientDataRequest message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ClientDataRequest message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ClientDataRequest
	 */
	public static fromObject(object: { [k: string]: any }): ClientDataRequest;

	/**
	 * Creates a plain object from a ClientDataRequest message. Also converts values to other types if specified.
	 * @param message ClientDataRequest
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ClientDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ClientDataRequest to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ClientDataRequest
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ChallengeAnswersRequest. */
export class ChallengeAnswersRequest implements IChallengeAnswersRequest {
	/**
	 * Constructs a new ChallengeAnswersRequest.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IChallengeAnswersRequest);

	/** ChallengeAnswersRequest state. */
	public state: string;

	/** ChallengeAnswersRequest answers. */
	public answers: IChallengeAnswer[];

	/**
	 * Creates a new ChallengeAnswersRequest instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ChallengeAnswersRequest instance
	 */
	public static create(properties?: IChallengeAnswersRequest): ChallengeAnswersRequest;

	/**
	 * Encodes the specified ChallengeAnswersRequest message. Does not implicitly {@link ChallengeAnswersRequest.verify|verify} messages.
	 * @param message ChallengeAnswersRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IChallengeAnswersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ChallengeAnswersRequest message, length delimited. Does not implicitly {@link ChallengeAnswersRequest.verify|verify} messages.
	 * @param message ChallengeAnswersRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IChallengeAnswersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ChallengeAnswersRequest message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ChallengeAnswersRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ChallengeAnswersRequest;

	/**
	 * Decodes a ChallengeAnswersRequest message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ChallengeAnswersRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ChallengeAnswersRequest;

	/**
	 * Verifies a ChallengeAnswersRequest message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ChallengeAnswersRequest message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ChallengeAnswersRequest
	 */
	public static fromObject(object: { [k: string]: any }): ChallengeAnswersRequest;

	/**
	 * Creates a plain object from a ChallengeAnswersRequest message. Also converts values to other types if specified.
	 * @param message ChallengeAnswersRequest
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ChallengeAnswersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ChallengeAnswersRequest to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ChallengeAnswersRequest
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ClientTokenResponse. */
export class ClientTokenResponse implements IClientTokenResponse {
	/**
	 * Constructs a new ClientTokenResponse.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IClientTokenResponse);

	/** ClientTokenResponse responseType. */
	public responseType: ClientTokenResponseType;

	/** ClientTokenResponse grantedToken. */
	public grantedToken?: IGrantedTokenResponse | null;

	/** ClientTokenResponse challenges. */
	public challenges?: IChallengesResponse | null;

	/** ClientTokenResponse response. */
	public response?: "grantedToken" | "challenges";

	/**
	 * Creates a new ClientTokenResponse instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ClientTokenResponse instance
	 */
	public static create(properties?: IClientTokenResponse): ClientTokenResponse;

	/**
	 * Encodes the specified ClientTokenResponse message. Does not implicitly {@link ClientTokenResponse.verify|verify} messages.
	 * @param message ClientTokenResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IClientTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ClientTokenResponse message, length delimited. Does not implicitly {@link ClientTokenResponse.verify|verify} messages.
	 * @param message ClientTokenResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IClientTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ClientTokenResponse message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ClientTokenResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientTokenResponse;

	/**
	 * Decodes a ClientTokenResponse message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ClientTokenResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientTokenResponse;

	/**
	 * Verifies a ClientTokenResponse message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ClientTokenResponse message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ClientTokenResponse
	 */
	public static fromObject(object: { [k: string]: any }): ClientTokenResponse;

	/**
	 * Creates a plain object from a ClientTokenResponse message. Also converts values to other types if specified.
	 * @param message ClientTokenResponse
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ClientTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ClientTokenResponse to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ClientTokenResponse
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TokenDomain. */
export class TokenDomain implements ITokenDomain {
	/**
	 * Constructs a new TokenDomain.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ITokenDomain);

	/** TokenDomain domain. */
	public domain: string;

	/**
	 * Creates a new TokenDomain instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns TokenDomain instance
	 */
	public static create(properties?: ITokenDomain): TokenDomain;

	/**
	 * Encodes the specified TokenDomain message. Does not implicitly {@link TokenDomain.verify|verify} messages.
	 * @param message TokenDomain message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ITokenDomain, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified TokenDomain message, length delimited. Does not implicitly {@link TokenDomain.verify|verify} messages.
	 * @param message TokenDomain message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ITokenDomain, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a TokenDomain message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns TokenDomain
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TokenDomain;

	/**
	 * Decodes a TokenDomain message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns TokenDomain
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TokenDomain;

	/**
	 * Verifies a TokenDomain message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a TokenDomain message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns TokenDomain
	 */
	public static fromObject(object: { [k: string]: any }): TokenDomain;

	/**
	 * Creates a plain object from a TokenDomain message. Also converts values to other types if specified.
	 * @param message TokenDomain
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: TokenDomain, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this TokenDomain to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for TokenDomain
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GrantedTokenResponse. */
export class GrantedTokenResponse implements IGrantedTokenResponse {
	/**
	 * Constructs a new GrantedTokenResponse.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IGrantedTokenResponse);

	/** GrantedTokenResponse token. */
	public token: string;

	/** GrantedTokenResponse expiresAfterSeconds. */
	public expiresAfterSeconds: number;

	/** GrantedTokenResponse refreshAfterSeconds. */
	public refreshAfterSeconds: number;

	/** GrantedTokenResponse domains. */
	public domains: ITokenDomain[];

	/**
	 * Creates a new GrantedTokenResponse instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns GrantedTokenResponse instance
	 */
	public static create(properties?: IGrantedTokenResponse): GrantedTokenResponse;

	/**
	 * Encodes the specified GrantedTokenResponse message. Does not implicitly {@link GrantedTokenResponse.verify|verify} messages.
	 * @param message GrantedTokenResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IGrantedTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified GrantedTokenResponse message, length delimited. Does not implicitly {@link GrantedTokenResponse.verify|verify} messages.
	 * @param message GrantedTokenResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IGrantedTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a GrantedTokenResponse message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns GrantedTokenResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): GrantedTokenResponse;

	/**
	 * Decodes a GrantedTokenResponse message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns GrantedTokenResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): GrantedTokenResponse;

	/**
	 * Verifies a GrantedTokenResponse message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a GrantedTokenResponse message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns GrantedTokenResponse
	 */
	public static fromObject(object: { [k: string]: any }): GrantedTokenResponse;

	/**
	 * Creates a plain object from a GrantedTokenResponse message. Also converts values to other types if specified.
	 * @param message GrantedTokenResponse
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: GrantedTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this GrantedTokenResponse to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for GrantedTokenResponse
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ChallengesResponse. */
export class ChallengesResponse implements IChallengesResponse {
	/**
	 * Constructs a new ChallengesResponse.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IChallengesResponse);

	/** ChallengesResponse state. */
	public state: string;

	/** ChallengesResponse challenges. */
	public challenges: IChallenge[];

	/**
	 * Creates a new ChallengesResponse instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ChallengesResponse instance
	 */
	public static create(properties?: IChallengesResponse): ChallengesResponse;

	/**
	 * Encodes the specified ChallengesResponse message. Does not implicitly {@link ChallengesResponse.verify|verify} messages.
	 * @param message ChallengesResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IChallengesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ChallengesResponse message, length delimited. Does not implicitly {@link ChallengesResponse.verify|verify} messages.
	 * @param message ChallengesResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IChallengesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ChallengesResponse message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ChallengesResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ChallengesResponse;

	/**
	 * Decodes a ChallengesResponse message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ChallengesResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ChallengesResponse;

	/**
	 * Verifies a ChallengesResponse message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ChallengesResponse message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ChallengesResponse
	 */
	public static fromObject(object: { [k: string]: any }): ChallengesResponse;

	/**
	 * Creates a plain object from a ChallengesResponse message. Also converts values to other types if specified.
	 * @param message ChallengesResponse
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ChallengesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ChallengesResponse to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ChallengesResponse
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ClientSecretParameters. */
export class ClientSecretParameters implements IClientSecretParameters {
	/**
	 * Constructs a new ClientSecretParameters.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IClientSecretParameters);

	/** ClientSecretParameters salt. */
	public salt: string;

	/**
	 * Creates a new ClientSecretParameters instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ClientSecretParameters instance
	 */
	public static create(properties?: IClientSecretParameters): ClientSecretParameters;

	/**
	 * Encodes the specified ClientSecretParameters message. Does not implicitly {@link ClientSecretParameters.verify|verify} messages.
	 * @param message ClientSecretParameters message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IClientSecretParameters, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ClientSecretParameters message, length delimited. Does not implicitly {@link ClientSecretParameters.verify|verify} messages.
	 * @param message ClientSecretParameters message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IClientSecretParameters, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ClientSecretParameters message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ClientSecretParameters
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientSecretParameters;

	/**
	 * Decodes a ClientSecretParameters message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ClientSecretParameters
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientSecretParameters;

	/**
	 * Verifies a ClientSecretParameters message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ClientSecretParameters message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ClientSecretParameters
	 */
	public static fromObject(object: { [k: string]: any }): ClientSecretParameters;

	/**
	 * Creates a plain object from a ClientSecretParameters message. Also converts values to other types if specified.
	 * @param message ClientSecretParameters
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ClientSecretParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ClientSecretParameters to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ClientSecretParameters
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an EvaluateJSParameters. */
export class EvaluateJSParameters implements IEvaluateJSParameters {
	/**
	 * Constructs a new EvaluateJSParameters.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IEvaluateJSParameters);

	/** EvaluateJSParameters code. */
	public code: string;

	/** EvaluateJSParameters libraries. */
	public libraries: string[];

	/**
	 * Creates a new EvaluateJSParameters instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns EvaluateJSParameters instance
	 */
	public static create(properties?: IEvaluateJSParameters): EvaluateJSParameters;

	/**
	 * Encodes the specified EvaluateJSParameters message. Does not implicitly {@link EvaluateJSParameters.verify|verify} messages.
	 * @param message EvaluateJSParameters message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IEvaluateJSParameters, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified EvaluateJSParameters message, length delimited. Does not implicitly {@link EvaluateJSParameters.verify|verify} messages.
	 * @param message EvaluateJSParameters message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IEvaluateJSParameters, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an EvaluateJSParameters message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns EvaluateJSParameters
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): EvaluateJSParameters;

	/**
	 * Decodes an EvaluateJSParameters message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns EvaluateJSParameters
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EvaluateJSParameters;

	/**
	 * Verifies an EvaluateJSParameters message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an EvaluateJSParameters message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns EvaluateJSParameters
	 */
	public static fromObject(object: { [k: string]: any }): EvaluateJSParameters;

	/**
	 * Creates a plain object from an EvaluateJSParameters message. Also converts values to other types if specified.
	 * @param message EvaluateJSParameters
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: EvaluateJSParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this EvaluateJSParameters to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for EvaluateJSParameters
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a HashCashParameters. */
export class HashCashParameters implements IHashCashParameters {
	/**
	 * Constructs a new HashCashParameters.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IHashCashParameters);

	/** HashCashParameters length. */
	public length: number;

	/** HashCashParameters prefix. */
	public prefix: string;

	/**
	 * Creates a new HashCashParameters instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns HashCashParameters instance
	 */
	public static create(properties?: IHashCashParameters): HashCashParameters;

	/**
	 * Encodes the specified HashCashParameters message. Does not implicitly {@link HashCashParameters.verify|verify} messages.
	 * @param message HashCashParameters message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IHashCashParameters, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified HashCashParameters message, length delimited. Does not implicitly {@link HashCashParameters.verify|verify} messages.
	 * @param message HashCashParameters message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IHashCashParameters, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a HashCashParameters message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns HashCashParameters
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): HashCashParameters;

	/**
	 * Decodes a HashCashParameters message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns HashCashParameters
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): HashCashParameters;

	/**
	 * Verifies a HashCashParameters message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a HashCashParameters message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns HashCashParameters
	 */
	public static fromObject(object: { [k: string]: any }): HashCashParameters;

	/**
	 * Creates a plain object from a HashCashParameters message. Also converts values to other types if specified.
	 * @param message HashCashParameters
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: HashCashParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this HashCashParameters to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for HashCashParameters
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Challenge. */
export class Challenge implements IChallenge {
	/**
	 * Constructs a new Challenge.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IChallenge);

	/** Challenge type. */
	public type: ChallengeType;

	/** Challenge clientSecretParameters. */
	public clientSecretParameters?: IClientSecretParameters | null;

	/** Challenge evaluateJsParameters. */
	public evaluateJsParameters?: IEvaluateJSParameters | null;

	/** Challenge evaluateHashcashParameters. */
	public evaluateHashcashParameters?: IHashCashParameters | null;

	/** Challenge parameters. */
	public parameters?: "clientSecretParameters" | "evaluateJsParameters" | "evaluateHashcashParameters";

	/**
	 * Creates a new Challenge instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Challenge instance
	 */
	public static create(properties?: IChallenge): Challenge;

	/**
	 * Encodes the specified Challenge message. Does not implicitly {@link Challenge.verify|verify} messages.
	 * @param message Challenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Challenge message, length delimited. Does not implicitly {@link Challenge.verify|verify} messages.
	 * @param message Challenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a Challenge message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Challenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Challenge;

	/**
	 * Decodes a Challenge message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Challenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Challenge;

	/**
	 * Verifies a Challenge message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a Challenge message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Challenge
	 */
	public static fromObject(object: { [k: string]: any }): Challenge;

	/**
	 * Creates a plain object from a Challenge message. Also converts values to other types if specified.
	 * @param message Challenge
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Challenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Challenge to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Challenge
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ClientSecretHMACAnswer. */
export class ClientSecretHMACAnswer implements IClientSecretHMACAnswer {
	/**
	 * Constructs a new ClientSecretHMACAnswer.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IClientSecretHMACAnswer);

	/** ClientSecretHMACAnswer hmac. */
	public hmac: string;

	/**
	 * Creates a new ClientSecretHMACAnswer instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ClientSecretHMACAnswer instance
	 */
	public static create(properties?: IClientSecretHMACAnswer): ClientSecretHMACAnswer;

	/**
	 * Encodes the specified ClientSecretHMACAnswer message. Does not implicitly {@link ClientSecretHMACAnswer.verify|verify} messages.
	 * @param message ClientSecretHMACAnswer message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IClientSecretHMACAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ClientSecretHMACAnswer message, length delimited. Does not implicitly {@link ClientSecretHMACAnswer.verify|verify} messages.
	 * @param message ClientSecretHMACAnswer message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IClientSecretHMACAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ClientSecretHMACAnswer message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ClientSecretHMACAnswer
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientSecretHMACAnswer;

	/**
	 * Decodes a ClientSecretHMACAnswer message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ClientSecretHMACAnswer
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientSecretHMACAnswer;

	/**
	 * Verifies a ClientSecretHMACAnswer message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ClientSecretHMACAnswer message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ClientSecretHMACAnswer
	 */
	public static fromObject(object: { [k: string]: any }): ClientSecretHMACAnswer;

	/**
	 * Creates a plain object from a ClientSecretHMACAnswer message. Also converts values to other types if specified.
	 * @param message ClientSecretHMACAnswer
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ClientSecretHMACAnswer, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ClientSecretHMACAnswer to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ClientSecretHMACAnswer
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an EvaluateJSAnswer. */
export class EvaluateJSAnswer implements IEvaluateJSAnswer {
	/**
	 * Constructs a new EvaluateJSAnswer.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IEvaluateJSAnswer);

	/** EvaluateJSAnswer result. */
	public result: string;

	/**
	 * Creates a new EvaluateJSAnswer instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns EvaluateJSAnswer instance
	 */
	public static create(properties?: IEvaluateJSAnswer): EvaluateJSAnswer;

	/**
	 * Encodes the specified EvaluateJSAnswer message. Does not implicitly {@link EvaluateJSAnswer.verify|verify} messages.
	 * @param message EvaluateJSAnswer message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IEvaluateJSAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified EvaluateJSAnswer message, length delimited. Does not implicitly {@link EvaluateJSAnswer.verify|verify} messages.
	 * @param message EvaluateJSAnswer message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IEvaluateJSAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an EvaluateJSAnswer message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns EvaluateJSAnswer
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): EvaluateJSAnswer;

	/**
	 * Decodes an EvaluateJSAnswer message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns EvaluateJSAnswer
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): EvaluateJSAnswer;

	/**
	 * Verifies an EvaluateJSAnswer message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an EvaluateJSAnswer message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns EvaluateJSAnswer
	 */
	public static fromObject(object: { [k: string]: any }): EvaluateJSAnswer;

	/**
	 * Creates a plain object from an EvaluateJSAnswer message. Also converts values to other types if specified.
	 * @param message EvaluateJSAnswer
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: EvaluateJSAnswer, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this EvaluateJSAnswer to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for EvaluateJSAnswer
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a HashCashAnswer. */
export class HashCashAnswer implements IHashCashAnswer {
	/**
	 * Constructs a new HashCashAnswer.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IHashCashAnswer);

	/** HashCashAnswer suffix. */
	public suffix: string;

	/**
	 * Creates a new HashCashAnswer instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns HashCashAnswer instance
	 */
	public static create(properties?: IHashCashAnswer): HashCashAnswer;

	/**
	 * Encodes the specified HashCashAnswer message. Does not implicitly {@link HashCashAnswer.verify|verify} messages.
	 * @param message HashCashAnswer message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IHashCashAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified HashCashAnswer message, length delimited. Does not implicitly {@link HashCashAnswer.verify|verify} messages.
	 * @param message HashCashAnswer message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IHashCashAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a HashCashAnswer message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns HashCashAnswer
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): HashCashAnswer;

	/**
	 * Decodes a HashCashAnswer message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns HashCashAnswer
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): HashCashAnswer;

	/**
	 * Verifies a HashCashAnswer message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a HashCashAnswer message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns HashCashAnswer
	 */
	public static fromObject(object: { [k: string]: any }): HashCashAnswer;

	/**
	 * Creates a plain object from a HashCashAnswer message. Also converts values to other types if specified.
	 * @param message HashCashAnswer
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: HashCashAnswer, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this HashCashAnswer to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for HashCashAnswer
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ChallengeAnswer. */
export class ChallengeAnswer implements IChallengeAnswer {
	/**
	 * Constructs a new ChallengeAnswer.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IChallengeAnswer);

	/** ChallengeAnswer ChallengeType. */
	public ChallengeType: ChallengeType;

	/** ChallengeAnswer clientSecret. */
	public clientSecret?: IClientSecretHMACAnswer | null;

	/** ChallengeAnswer evaluateJs. */
	public evaluateJs?: IEvaluateJSAnswer | null;

	/** ChallengeAnswer hashCash. */
	public hashCash?: IHashCashAnswer | null;

	/** ChallengeAnswer answer. */
	public answer?: "clientSecret" | "evaluateJs" | "hashCash";

	/**
	 * Creates a new ChallengeAnswer instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ChallengeAnswer instance
	 */
	public static create(properties?: IChallengeAnswer): ChallengeAnswer;

	/**
	 * Encodes the specified ChallengeAnswer message. Does not implicitly {@link ChallengeAnswer.verify|verify} messages.
	 * @param message ChallengeAnswer message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IChallengeAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ChallengeAnswer message, length delimited. Does not implicitly {@link ChallengeAnswer.verify|verify} messages.
	 * @param message ChallengeAnswer message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IChallengeAnswer, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ChallengeAnswer message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ChallengeAnswer
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ChallengeAnswer;

	/**
	 * Decodes a ChallengeAnswer message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ChallengeAnswer
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ChallengeAnswer;

	/**
	 * Verifies a ChallengeAnswer message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ChallengeAnswer message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ChallengeAnswer
	 */
	public static fromObject(object: { [k: string]: any }): ChallengeAnswer;

	/**
	 * Creates a plain object from a ChallengeAnswer message. Also converts values to other types if specified.
	 * @param message ChallengeAnswer
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ChallengeAnswer, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ChallengeAnswer to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ChallengeAnswer
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ClientTokenBadRequest. */
export class ClientTokenBadRequest implements IClientTokenBadRequest {
	/**
	 * Constructs a new ClientTokenBadRequest.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IClientTokenBadRequest);

	/** ClientTokenBadRequest message. */
	public message: string;

	/**
	 * Creates a new ClientTokenBadRequest instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ClientTokenBadRequest instance
	 */
	public static create(properties?: IClientTokenBadRequest): ClientTokenBadRequest;

	/**
	 * Encodes the specified ClientTokenBadRequest message. Does not implicitly {@link ClientTokenBadRequest.verify|verify} messages.
	 * @param message ClientTokenBadRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IClientTokenBadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ClientTokenBadRequest message, length delimited. Does not implicitly {@link ClientTokenBadRequest.verify|verify} messages.
	 * @param message ClientTokenBadRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IClientTokenBadRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ClientTokenBadRequest message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ClientTokenBadRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientTokenBadRequest;

	/**
	 * Decodes a ClientTokenBadRequest message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ClientTokenBadRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientTokenBadRequest;

	/**
	 * Verifies a ClientTokenBadRequest message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ClientTokenBadRequest message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ClientTokenBadRequest
	 */
	public static fromObject(object: { [k: string]: any }): ClientTokenBadRequest;

	/**
	 * Creates a plain object from a ClientTokenBadRequest message. Also converts values to other types if specified.
	 * @param message ClientTokenBadRequest
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ClientTokenBadRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ClientTokenBadRequest to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ClientTokenBadRequest
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ClientTokenRequestType enum. */
export enum ClientTokenRequestType {
	REQUEST_UNKNOWN = 0,
	REQUEST_CLIENT_DATA_REQUEST = 1,
	REQUEST_CHALLENGE_ANSWERS_REQUEST = 2,
}

/** ClientTokenResponseType enum. */
export enum ClientTokenResponseType {
	RESPONSE_UNKNOWN = 0,
	RESPONSE_GRANTED_TOKEN_RESPONSE = 1,
	RESPONSE_CHALLENGES_RESPONSE = 2,
}

/** ChallengeType enum. */
export enum ChallengeType {
	CHALLENGE_UNKNOWN = 0,
	CHALLENGE_CLIENT_SECRET_HMAC = 1,
	CHALLENGE_EVALUATE_JS = 2,
	CHALLENGE_HASH_CASH = 3,
}

/** Namespace spotify. */
export namespace spotify {
	/** Namespace clienttoken. */
	namespace clienttoken {
		/** Namespace data. */
		namespace data {
			/** Namespace v0. */
			namespace v0 {
				/** Properties of a ConnectivitySdkData. */
				interface IConnectivitySdkData {
					/** ConnectivitySdkData platformSpecificData */
					platformSpecificData?: spotify.clienttoken.data.v0.IPlatformSpecificData | null;

					/** ConnectivitySdkData deviceId */
					deviceId?: string | null;
				}

				/** Represents a ConnectivitySdkData. */
				class ConnectivitySdkData implements IConnectivitySdkData {
					/**
					 * Constructs a new ConnectivitySdkData.
					 * @param [properties] Properties to set
					 */
					constructor(properties?: spotify.clienttoken.data.v0.IConnectivitySdkData);

					/** ConnectivitySdkData platformSpecificData. */
					public platformSpecificData?: spotify.clienttoken.data.v0.IPlatformSpecificData | null;

					/** ConnectivitySdkData deviceId. */
					public deviceId: string;

					/**
					 * Creates a new ConnectivitySdkData instance using the specified properties.
					 * @param [properties] Properties to set
					 * @returns ConnectivitySdkData instance
					 */
					public static create(
						properties?: spotify.clienttoken.data.v0.IConnectivitySdkData,
					): spotify.clienttoken.data.v0.ConnectivitySdkData;

					/**
					 * Encodes the specified ConnectivitySdkData message. Does not implicitly {@link spotify.clienttoken.data.v0.ConnectivitySdkData.verify|verify} messages.
					 * @param message ConnectivitySdkData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encode(
						message: spotify.clienttoken.data.v0.IConnectivitySdkData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Encodes the specified ConnectivitySdkData message, length delimited. Does not implicitly {@link spotify.clienttoken.data.v0.ConnectivitySdkData.verify|verify} messages.
					 * @param message ConnectivitySdkData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encodeDelimited(
						message: spotify.clienttoken.data.v0.IConnectivitySdkData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Decodes a ConnectivitySdkData message from the specified reader or buffer.
					 * @param reader Reader or buffer to decode from
					 * @param [length] Message length if known beforehand
					 * @returns ConnectivitySdkData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decode(
						reader: $protobuf.Reader | Uint8Array,
						length?: number,
					): spotify.clienttoken.data.v0.ConnectivitySdkData;

					/**
					 * Decodes a ConnectivitySdkData message from the specified reader or buffer, length delimited.
					 * @param reader Reader or buffer to decode from
					 * @returns ConnectivitySdkData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): spotify.clienttoken.data.v0.ConnectivitySdkData;

					/**
					 * Verifies a ConnectivitySdkData message.
					 * @param message Plain object to verify
					 * @returns `null` if valid, otherwise the reason why it is not
					 */
					public static verify(message: { [k: string]: any }): string | null;

					/**
					 * Creates a ConnectivitySdkData message from a plain object. Also converts values to their respective internal types.
					 * @param object Plain object
					 * @returns ConnectivitySdkData
					 */
					public static fromObject(object: { [k: string]: any }): spotify.clienttoken.data.v0.ConnectivitySdkData;

					/**
					 * Creates a plain object from a ConnectivitySdkData message. Also converts values to other types if specified.
					 * @param message ConnectivitySdkData
					 * @param [options] Conversion options
					 * @returns Plain object
					 */
					public static toObject(
						message: spotify.clienttoken.data.v0.ConnectivitySdkData,
						options?: $protobuf.IConversionOptions,
					): { [k: string]: any };

					/**
					 * Converts this ConnectivitySdkData to JSON.
					 * @returns JSON object
					 */
					public toJSON(): { [k: string]: any };

					/**
					 * Gets the default type url for ConnectivitySdkData
					 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
					 * @returns The default type url
					 */
					public static getTypeUrl(typeUrlPrefix?: string): string;
				}

				/** Properties of a PlatformSpecificData. */
				interface IPlatformSpecificData {
					/** PlatformSpecificData android */
					android?: spotify.clienttoken.data.v0.INativeAndroidData | null;

					/** PlatformSpecificData ios */
					ios?: spotify.clienttoken.data.v0.INativeIOSData | null;

					/** PlatformSpecificData desktopMacos */
					desktopMacos?: spotify.clienttoken.data.v0.INativeDesktopMacOSData | null;

					/** PlatformSpecificData desktopWindows */
					desktopWindows?: spotify.clienttoken.data.v0.INativeDesktopWindowsData | null;

					/** PlatformSpecificData desktopLinux */
					desktopLinux?: spotify.clienttoken.data.v0.INativeDesktopLinuxData | null;
				}

				/** Represents a PlatformSpecificData. */
				class PlatformSpecificData implements IPlatformSpecificData {
					/**
					 * Constructs a new PlatformSpecificData.
					 * @param [properties] Properties to set
					 */
					constructor(properties?: spotify.clienttoken.data.v0.IPlatformSpecificData);

					/** PlatformSpecificData android. */
					public android?: spotify.clienttoken.data.v0.INativeAndroidData | null;

					/** PlatformSpecificData ios. */
					public ios?: spotify.clienttoken.data.v0.INativeIOSData | null;

					/** PlatformSpecificData desktopMacos. */
					public desktopMacos?: spotify.clienttoken.data.v0.INativeDesktopMacOSData | null;

					/** PlatformSpecificData desktopWindows. */
					public desktopWindows?: spotify.clienttoken.data.v0.INativeDesktopWindowsData | null;

					/** PlatformSpecificData desktopLinux. */
					public desktopLinux?: spotify.clienttoken.data.v0.INativeDesktopLinuxData | null;

					/** PlatformSpecificData data. */
					public data?: "android" | "ios" | "desktopMacos" | "desktopWindows" | "desktopLinux";

					/**
					 * Creates a new PlatformSpecificData instance using the specified properties.
					 * @param [properties] Properties to set
					 * @returns PlatformSpecificData instance
					 */
					public static create(
						properties?: spotify.clienttoken.data.v0.IPlatformSpecificData,
					): spotify.clienttoken.data.v0.PlatformSpecificData;

					/**
					 * Encodes the specified PlatformSpecificData message. Does not implicitly {@link spotify.clienttoken.data.v0.PlatformSpecificData.verify|verify} messages.
					 * @param message PlatformSpecificData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encode(
						message: spotify.clienttoken.data.v0.IPlatformSpecificData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Encodes the specified PlatformSpecificData message, length delimited. Does not implicitly {@link spotify.clienttoken.data.v0.PlatformSpecificData.verify|verify} messages.
					 * @param message PlatformSpecificData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encodeDelimited(
						message: spotify.clienttoken.data.v0.IPlatformSpecificData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Decodes a PlatformSpecificData message from the specified reader or buffer.
					 * @param reader Reader or buffer to decode from
					 * @param [length] Message length if known beforehand
					 * @returns PlatformSpecificData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decode(
						reader: $protobuf.Reader | Uint8Array,
						length?: number,
					): spotify.clienttoken.data.v0.PlatformSpecificData;

					/**
					 * Decodes a PlatformSpecificData message from the specified reader or buffer, length delimited.
					 * @param reader Reader or buffer to decode from
					 * @returns PlatformSpecificData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): spotify.clienttoken.data.v0.PlatformSpecificData;

					/**
					 * Verifies a PlatformSpecificData message.
					 * @param message Plain object to verify
					 * @returns `null` if valid, otherwise the reason why it is not
					 */
					public static verify(message: { [k: string]: any }): string | null;

					/**
					 * Creates a PlatformSpecificData message from a plain object. Also converts values to their respective internal types.
					 * @param object Plain object
					 * @returns PlatformSpecificData
					 */
					public static fromObject(object: { [k: string]: any }): spotify.clienttoken.data.v0.PlatformSpecificData;

					/**
					 * Creates a plain object from a PlatformSpecificData message. Also converts values to other types if specified.
					 * @param message PlatformSpecificData
					 * @param [options] Conversion options
					 * @returns Plain object
					 */
					public static toObject(
						message: spotify.clienttoken.data.v0.PlatformSpecificData,
						options?: $protobuf.IConversionOptions,
					): { [k: string]: any };

					/**
					 * Converts this PlatformSpecificData to JSON.
					 * @returns JSON object
					 */
					public toJSON(): { [k: string]: any };

					/**
					 * Gets the default type url for PlatformSpecificData
					 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
					 * @returns The default type url
					 */
					public static getTypeUrl(typeUrlPrefix?: string): string;
				}

				/** Properties of a NativeAndroidData. */
				interface INativeAndroidData {
					/** NativeAndroidData screenDimensions */
					screenDimensions?: spotify.clienttoken.data.v0.IScreen | null;

					/** NativeAndroidData androidVersion */
					androidVersion?: string | null;

					/** NativeAndroidData apiVersion */
					apiVersion?: number | null;

					/** NativeAndroidData deviceName */
					deviceName?: string | null;

					/** NativeAndroidData modelStr */
					modelStr?: string | null;

					/** NativeAndroidData vendor */
					vendor?: string | null;

					/** NativeAndroidData vendor_2 */
					vendor_2?: string | null;

					/** NativeAndroidData unknownValue_8 */
					unknownValue_8?: number | null;
				}

				/** Represents a NativeAndroidData. */
				class NativeAndroidData implements INativeAndroidData {
					/**
					 * Constructs a new NativeAndroidData.
					 * @param [properties] Properties to set
					 */
					constructor(properties?: spotify.clienttoken.data.v0.INativeAndroidData);

					/** NativeAndroidData screenDimensions. */
					public screenDimensions?: spotify.clienttoken.data.v0.IScreen | null;

					/** NativeAndroidData androidVersion. */
					public androidVersion: string;

					/** NativeAndroidData apiVersion. */
					public apiVersion: number;

					/** NativeAndroidData deviceName. */
					public deviceName: string;

					/** NativeAndroidData modelStr. */
					public modelStr: string;

					/** NativeAndroidData vendor. */
					public vendor: string;

					/** NativeAndroidData vendor_2. */
					public vendor_2: string;

					/** NativeAndroidData unknownValue_8. */
					public unknownValue_8: number;

					/**
					 * Creates a new NativeAndroidData instance using the specified properties.
					 * @param [properties] Properties to set
					 * @returns NativeAndroidData instance
					 */
					public static create(
						properties?: spotify.clienttoken.data.v0.INativeAndroidData,
					): spotify.clienttoken.data.v0.NativeAndroidData;

					/**
					 * Encodes the specified NativeAndroidData message. Does not implicitly {@link spotify.clienttoken.data.v0.NativeAndroidData.verify|verify} messages.
					 * @param message NativeAndroidData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encode(
						message: spotify.clienttoken.data.v0.INativeAndroidData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Encodes the specified NativeAndroidData message, length delimited. Does not implicitly {@link spotify.clienttoken.data.v0.NativeAndroidData.verify|verify} messages.
					 * @param message NativeAndroidData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encodeDelimited(
						message: spotify.clienttoken.data.v0.INativeAndroidData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Decodes a NativeAndroidData message from the specified reader or buffer.
					 * @param reader Reader or buffer to decode from
					 * @param [length] Message length if known beforehand
					 * @returns NativeAndroidData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decode(
						reader: $protobuf.Reader | Uint8Array,
						length?: number,
					): spotify.clienttoken.data.v0.NativeAndroidData;

					/**
					 * Decodes a NativeAndroidData message from the specified reader or buffer, length delimited.
					 * @param reader Reader or buffer to decode from
					 * @returns NativeAndroidData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): spotify.clienttoken.data.v0.NativeAndroidData;

					/**
					 * Verifies a NativeAndroidData message.
					 * @param message Plain object to verify
					 * @returns `null` if valid, otherwise the reason why it is not
					 */
					public static verify(message: { [k: string]: any }): string | null;

					/**
					 * Creates a NativeAndroidData message from a plain object. Also converts values to their respective internal types.
					 * @param object Plain object
					 * @returns NativeAndroidData
					 */
					public static fromObject(object: { [k: string]: any }): spotify.clienttoken.data.v0.NativeAndroidData;

					/**
					 * Creates a plain object from a NativeAndroidData message. Also converts values to other types if specified.
					 * @param message NativeAndroidData
					 * @param [options] Conversion options
					 * @returns Plain object
					 */
					public static toObject(
						message: spotify.clienttoken.data.v0.NativeAndroidData,
						options?: $protobuf.IConversionOptions,
					): { [k: string]: any };

					/**
					 * Converts this NativeAndroidData to JSON.
					 * @returns JSON object
					 */
					public toJSON(): { [k: string]: any };

					/**
					 * Gets the default type url for NativeAndroidData
					 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
					 * @returns The default type url
					 */
					public static getTypeUrl(typeUrlPrefix?: string): string;
				}

				/** Properties of a NativeIOSData. */
				interface INativeIOSData {
					/** NativeIOSData userInterfaceIdiom */
					userInterfaceIdiom?: number | null;

					/** NativeIOSData targetIphoneSimulator */
					targetIphoneSimulator?: boolean | null;

					/** NativeIOSData hwMachine */
					hwMachine?: string | null;

					/** NativeIOSData systemVersion */
					systemVersion?: string | null;

					/** NativeIOSData simulatorModelIdentifier */
					simulatorModelIdentifier?: string | null;
				}

				/** Represents a NativeIOSData. */
				class NativeIOSData implements INativeIOSData {
					/**
					 * Constructs a new NativeIOSData.
					 * @param [properties] Properties to set
					 */
					constructor(properties?: spotify.clienttoken.data.v0.INativeIOSData);

					/** NativeIOSData userInterfaceIdiom. */
					public userInterfaceIdiom: number;

					/** NativeIOSData targetIphoneSimulator. */
					public targetIphoneSimulator: boolean;

					/** NativeIOSData hwMachine. */
					public hwMachine: string;

					/** NativeIOSData systemVersion. */
					public systemVersion: string;

					/** NativeIOSData simulatorModelIdentifier. */
					public simulatorModelIdentifier: string;

					/**
					 * Creates a new NativeIOSData instance using the specified properties.
					 * @param [properties] Properties to set
					 * @returns NativeIOSData instance
					 */
					public static create(
						properties?: spotify.clienttoken.data.v0.INativeIOSData,
					): spotify.clienttoken.data.v0.NativeIOSData;

					/**
					 * Encodes the specified NativeIOSData message. Does not implicitly {@link spotify.clienttoken.data.v0.NativeIOSData.verify|verify} messages.
					 * @param message NativeIOSData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encode(message: spotify.clienttoken.data.v0.INativeIOSData, writer?: $protobuf.Writer): $protobuf.Writer;

					/**
					 * Encodes the specified NativeIOSData message, length delimited. Does not implicitly {@link spotify.clienttoken.data.v0.NativeIOSData.verify|verify} messages.
					 * @param message NativeIOSData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encodeDelimited(
						message: spotify.clienttoken.data.v0.INativeIOSData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Decodes a NativeIOSData message from the specified reader or buffer.
					 * @param reader Reader or buffer to decode from
					 * @param [length] Message length if known beforehand
					 * @returns NativeIOSData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): spotify.clienttoken.data.v0.NativeIOSData;

					/**
					 * Decodes a NativeIOSData message from the specified reader or buffer, length delimited.
					 * @param reader Reader or buffer to decode from
					 * @returns NativeIOSData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): spotify.clienttoken.data.v0.NativeIOSData;

					/**
					 * Verifies a NativeIOSData message.
					 * @param message Plain object to verify
					 * @returns `null` if valid, otherwise the reason why it is not
					 */
					public static verify(message: { [k: string]: any }): string | null;

					/**
					 * Creates a NativeIOSData message from a plain object. Also converts values to their respective internal types.
					 * @param object Plain object
					 * @returns NativeIOSData
					 */
					public static fromObject(object: { [k: string]: any }): spotify.clienttoken.data.v0.NativeIOSData;

					/**
					 * Creates a plain object from a NativeIOSData message. Also converts values to other types if specified.
					 * @param message NativeIOSData
					 * @param [options] Conversion options
					 * @returns Plain object
					 */
					public static toObject(
						message: spotify.clienttoken.data.v0.NativeIOSData,
						options?: $protobuf.IConversionOptions,
					): { [k: string]: any };

					/**
					 * Converts this NativeIOSData to JSON.
					 * @returns JSON object
					 */
					public toJSON(): { [k: string]: any };

					/**
					 * Gets the default type url for NativeIOSData
					 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
					 * @returns The default type url
					 */
					public static getTypeUrl(typeUrlPrefix?: string): string;
				}

				/** Properties of a NativeDesktopWindowsData. */
				interface INativeDesktopWindowsData {
					/** NativeDesktopWindowsData osVersion */
					osVersion?: number | null;

					/** NativeDesktopWindowsData osBuild */
					osBuild?: number | null;

					/** NativeDesktopWindowsData platformId */
					platformId?: number | null;

					/** NativeDesktopWindowsData unknownValue_5 */
					unknownValue_5?: number | null;

					/** NativeDesktopWindowsData unknownValue_6 */
					unknownValue_6?: number | null;

					/** NativeDesktopWindowsData imageFileMachine */
					imageFileMachine?: number | null;

					/** NativeDesktopWindowsData peMachine */
					peMachine?: number | null;

					/** NativeDesktopWindowsData unknownValue_10 */
					unknownValue_10?: boolean | null;
				}

				/** Represents a NativeDesktopWindowsData. */
				class NativeDesktopWindowsData implements INativeDesktopWindowsData {
					/**
					 * Constructs a new NativeDesktopWindowsData.
					 * @param [properties] Properties to set
					 */
					constructor(properties?: spotify.clienttoken.data.v0.INativeDesktopWindowsData);

					/** NativeDesktopWindowsData osVersion. */
					public osVersion: number;

					/** NativeDesktopWindowsData osBuild. */
					public osBuild: number;

					/** NativeDesktopWindowsData platformId. */
					public platformId: number;

					/** NativeDesktopWindowsData unknownValue_5. */
					public unknownValue_5: number;

					/** NativeDesktopWindowsData unknownValue_6. */
					public unknownValue_6: number;

					/** NativeDesktopWindowsData imageFileMachine. */
					public imageFileMachine: number;

					/** NativeDesktopWindowsData peMachine. */
					public peMachine: number;

					/** NativeDesktopWindowsData unknownValue_10. */
					public unknownValue_10: boolean;

					/**
					 * Creates a new NativeDesktopWindowsData instance using the specified properties.
					 * @param [properties] Properties to set
					 * @returns NativeDesktopWindowsData instance
					 */
					public static create(
						properties?: spotify.clienttoken.data.v0.INativeDesktopWindowsData,
					): spotify.clienttoken.data.v0.NativeDesktopWindowsData;

					/**
					 * Encodes the specified NativeDesktopWindowsData message. Does not implicitly {@link spotify.clienttoken.data.v0.NativeDesktopWindowsData.verify|verify} messages.
					 * @param message NativeDesktopWindowsData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encode(
						message: spotify.clienttoken.data.v0.INativeDesktopWindowsData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Encodes the specified NativeDesktopWindowsData message, length delimited. Does not implicitly {@link spotify.clienttoken.data.v0.NativeDesktopWindowsData.verify|verify} messages.
					 * @param message NativeDesktopWindowsData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encodeDelimited(
						message: spotify.clienttoken.data.v0.INativeDesktopWindowsData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Decodes a NativeDesktopWindowsData message from the specified reader or buffer.
					 * @param reader Reader or buffer to decode from
					 * @param [length] Message length if known beforehand
					 * @returns NativeDesktopWindowsData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decode(
						reader: $protobuf.Reader | Uint8Array,
						length?: number,
					): spotify.clienttoken.data.v0.NativeDesktopWindowsData;

					/**
					 * Decodes a NativeDesktopWindowsData message from the specified reader or buffer, length delimited.
					 * @param reader Reader or buffer to decode from
					 * @returns NativeDesktopWindowsData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decodeDelimited(
						reader: $protobuf.Reader | Uint8Array,
					): spotify.clienttoken.data.v0.NativeDesktopWindowsData;

					/**
					 * Verifies a NativeDesktopWindowsData message.
					 * @param message Plain object to verify
					 * @returns `null` if valid, otherwise the reason why it is not
					 */
					public static verify(message: { [k: string]: any }): string | null;

					/**
					 * Creates a NativeDesktopWindowsData message from a plain object. Also converts values to their respective internal types.
					 * @param object Plain object
					 * @returns NativeDesktopWindowsData
					 */
					public static fromObject(object: { [k: string]: any }): spotify.clienttoken.data.v0.NativeDesktopWindowsData;

					/**
					 * Creates a plain object from a NativeDesktopWindowsData message. Also converts values to other types if specified.
					 * @param message NativeDesktopWindowsData
					 * @param [options] Conversion options
					 * @returns Plain object
					 */
					public static toObject(
						message: spotify.clienttoken.data.v0.NativeDesktopWindowsData,
						options?: $protobuf.IConversionOptions,
					): { [k: string]: any };

					/**
					 * Converts this NativeDesktopWindowsData to JSON.
					 * @returns JSON object
					 */
					public toJSON(): { [k: string]: any };

					/**
					 * Gets the default type url for NativeDesktopWindowsData
					 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
					 * @returns The default type url
					 */
					public static getTypeUrl(typeUrlPrefix?: string): string;
				}

				/** Properties of a NativeDesktopLinuxData. */
				interface INativeDesktopLinuxData {
					/** NativeDesktopLinuxData systemName */
					systemName?: string | null;

					/** NativeDesktopLinuxData systemRelease */
					systemRelease?: string | null;

					/** NativeDesktopLinuxData systemVersion */
					systemVersion?: string | null;

					/** NativeDesktopLinuxData hardware */
					hardware?: string | null;
				}

				/** Represents a NativeDesktopLinuxData. */
				class NativeDesktopLinuxData implements INativeDesktopLinuxData {
					/**
					 * Constructs a new NativeDesktopLinuxData.
					 * @param [properties] Properties to set
					 */
					constructor(properties?: spotify.clienttoken.data.v0.INativeDesktopLinuxData);

					/** NativeDesktopLinuxData systemName. */
					public systemName: string;

					/** NativeDesktopLinuxData systemRelease. */
					public systemRelease: string;

					/** NativeDesktopLinuxData systemVersion. */
					public systemVersion: string;

					/** NativeDesktopLinuxData hardware. */
					public hardware: string;

					/**
					 * Creates a new NativeDesktopLinuxData instance using the specified properties.
					 * @param [properties] Properties to set
					 * @returns NativeDesktopLinuxData instance
					 */
					public static create(
						properties?: spotify.clienttoken.data.v0.INativeDesktopLinuxData,
					): spotify.clienttoken.data.v0.NativeDesktopLinuxData;

					/**
					 * Encodes the specified NativeDesktopLinuxData message. Does not implicitly {@link spotify.clienttoken.data.v0.NativeDesktopLinuxData.verify|verify} messages.
					 * @param message NativeDesktopLinuxData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encode(
						message: spotify.clienttoken.data.v0.INativeDesktopLinuxData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Encodes the specified NativeDesktopLinuxData message, length delimited. Does not implicitly {@link spotify.clienttoken.data.v0.NativeDesktopLinuxData.verify|verify} messages.
					 * @param message NativeDesktopLinuxData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encodeDelimited(
						message: spotify.clienttoken.data.v0.INativeDesktopLinuxData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Decodes a NativeDesktopLinuxData message from the specified reader or buffer.
					 * @param reader Reader or buffer to decode from
					 * @param [length] Message length if known beforehand
					 * @returns NativeDesktopLinuxData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decode(
						reader: $protobuf.Reader | Uint8Array,
						length?: number,
					): spotify.clienttoken.data.v0.NativeDesktopLinuxData;

					/**
					 * Decodes a NativeDesktopLinuxData message from the specified reader or buffer, length delimited.
					 * @param reader Reader or buffer to decode from
					 * @returns NativeDesktopLinuxData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decodeDelimited(
						reader: $protobuf.Reader | Uint8Array,
					): spotify.clienttoken.data.v0.NativeDesktopLinuxData;

					/**
					 * Verifies a NativeDesktopLinuxData message.
					 * @param message Plain object to verify
					 * @returns `null` if valid, otherwise the reason why it is not
					 */
					public static verify(message: { [k: string]: any }): string | null;

					/**
					 * Creates a NativeDesktopLinuxData message from a plain object. Also converts values to their respective internal types.
					 * @param object Plain object
					 * @returns NativeDesktopLinuxData
					 */
					public static fromObject(object: { [k: string]: any }): spotify.clienttoken.data.v0.NativeDesktopLinuxData;

					/**
					 * Creates a plain object from a NativeDesktopLinuxData message. Also converts values to other types if specified.
					 * @param message NativeDesktopLinuxData
					 * @param [options] Conversion options
					 * @returns Plain object
					 */
					public static toObject(
						message: spotify.clienttoken.data.v0.NativeDesktopLinuxData,
						options?: $protobuf.IConversionOptions,
					): { [k: string]: any };

					/**
					 * Converts this NativeDesktopLinuxData to JSON.
					 * @returns JSON object
					 */
					public toJSON(): { [k: string]: any };

					/**
					 * Gets the default type url for NativeDesktopLinuxData
					 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
					 * @returns The default type url
					 */
					public static getTypeUrl(typeUrlPrefix?: string): string;
				}

				/** Properties of a NativeDesktopMacOSData. */
				interface INativeDesktopMacOSData {
					/** NativeDesktopMacOSData systemVersion */
					systemVersion?: string | null;

					/** NativeDesktopMacOSData hwModel */
					hwModel?: string | null;

					/** NativeDesktopMacOSData compiledCpuType */
					compiledCpuType?: string | null;
				}

				/** Represents a NativeDesktopMacOSData. */
				class NativeDesktopMacOSData implements INativeDesktopMacOSData {
					/**
					 * Constructs a new NativeDesktopMacOSData.
					 * @param [properties] Properties to set
					 */
					constructor(properties?: spotify.clienttoken.data.v0.INativeDesktopMacOSData);

					/** NativeDesktopMacOSData systemVersion. */
					public systemVersion: string;

					/** NativeDesktopMacOSData hwModel. */
					public hwModel: string;

					/** NativeDesktopMacOSData compiledCpuType. */
					public compiledCpuType: string;

					/**
					 * Creates a new NativeDesktopMacOSData instance using the specified properties.
					 * @param [properties] Properties to set
					 * @returns NativeDesktopMacOSData instance
					 */
					public static create(
						properties?: spotify.clienttoken.data.v0.INativeDesktopMacOSData,
					): spotify.clienttoken.data.v0.NativeDesktopMacOSData;

					/**
					 * Encodes the specified NativeDesktopMacOSData message. Does not implicitly {@link spotify.clienttoken.data.v0.NativeDesktopMacOSData.verify|verify} messages.
					 * @param message NativeDesktopMacOSData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encode(
						message: spotify.clienttoken.data.v0.INativeDesktopMacOSData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Encodes the specified NativeDesktopMacOSData message, length delimited. Does not implicitly {@link spotify.clienttoken.data.v0.NativeDesktopMacOSData.verify|verify} messages.
					 * @param message NativeDesktopMacOSData message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encodeDelimited(
						message: spotify.clienttoken.data.v0.INativeDesktopMacOSData,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Decodes a NativeDesktopMacOSData message from the specified reader or buffer.
					 * @param reader Reader or buffer to decode from
					 * @param [length] Message length if known beforehand
					 * @returns NativeDesktopMacOSData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decode(
						reader: $protobuf.Reader | Uint8Array,
						length?: number,
					): spotify.clienttoken.data.v0.NativeDesktopMacOSData;

					/**
					 * Decodes a NativeDesktopMacOSData message from the specified reader or buffer, length delimited.
					 * @param reader Reader or buffer to decode from
					 * @returns NativeDesktopMacOSData
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decodeDelimited(
						reader: $protobuf.Reader | Uint8Array,
					): spotify.clienttoken.data.v0.NativeDesktopMacOSData;

					/**
					 * Verifies a NativeDesktopMacOSData message.
					 * @param message Plain object to verify
					 * @returns `null` if valid, otherwise the reason why it is not
					 */
					public static verify(message: { [k: string]: any }): string | null;

					/**
					 * Creates a NativeDesktopMacOSData message from a plain object. Also converts values to their respective internal types.
					 * @param object Plain object
					 * @returns NativeDesktopMacOSData
					 */
					public static fromObject(object: { [k: string]: any }): spotify.clienttoken.data.v0.NativeDesktopMacOSData;

					/**
					 * Creates a plain object from a NativeDesktopMacOSData message. Also converts values to other types if specified.
					 * @param message NativeDesktopMacOSData
					 * @param [options] Conversion options
					 * @returns Plain object
					 */
					public static toObject(
						message: spotify.clienttoken.data.v0.NativeDesktopMacOSData,
						options?: $protobuf.IConversionOptions,
					): { [k: string]: any };

					/**
					 * Converts this NativeDesktopMacOSData to JSON.
					 * @returns JSON object
					 */
					public toJSON(): { [k: string]: any };

					/**
					 * Gets the default type url for NativeDesktopMacOSData
					 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
					 * @returns The default type url
					 */
					public static getTypeUrl(typeUrlPrefix?: string): string;
				}

				/** Properties of a Screen. */
				interface IScreen {
					/** Screen width */
					width?: number | null;

					/** Screen height */
					height?: number | null;

					/** Screen density */
					density?: number | null;

					/** Screen unknownValue_4 */
					unknownValue_4?: number | null;

					/** Screen unknownValue_5 */
					unknownValue_5?: number | null;
				}

				/** Represents a Screen. */
				class Screen implements IScreen {
					/**
					 * Constructs a new Screen.
					 * @param [properties] Properties to set
					 */
					constructor(properties?: spotify.clienttoken.data.v0.IScreen);

					/** Screen width. */
					public width: number;

					/** Screen height. */
					public height: number;

					/** Screen density. */
					public density: number;

					/** Screen unknownValue_4. */
					public unknownValue_4: number;

					/** Screen unknownValue_5. */
					public unknownValue_5: number;

					/**
					 * Creates a new Screen instance using the specified properties.
					 * @param [properties] Properties to set
					 * @returns Screen instance
					 */
					public static create(properties?: spotify.clienttoken.data.v0.IScreen): spotify.clienttoken.data.v0.Screen;

					/**
					 * Encodes the specified Screen message. Does not implicitly {@link spotify.clienttoken.data.v0.Screen.verify|verify} messages.
					 * @param message Screen message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encode(message: spotify.clienttoken.data.v0.IScreen, writer?: $protobuf.Writer): $protobuf.Writer;

					/**
					 * Encodes the specified Screen message, length delimited. Does not implicitly {@link spotify.clienttoken.data.v0.Screen.verify|verify} messages.
					 * @param message Screen message or plain object to encode
					 * @param [writer] Writer to encode to
					 * @returns Writer
					 */
					public static encodeDelimited(
						message: spotify.clienttoken.data.v0.IScreen,
						writer?: $protobuf.Writer,
					): $protobuf.Writer;

					/**
					 * Decodes a Screen message from the specified reader or buffer.
					 * @param reader Reader or buffer to decode from
					 * @param [length] Message length if known beforehand
					 * @returns Screen
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): spotify.clienttoken.data.v0.Screen;

					/**
					 * Decodes a Screen message from the specified reader or buffer, length delimited.
					 * @param reader Reader or buffer to decode from
					 * @returns Screen
					 * @throws {Error} If the payload is not a reader or valid buffer
					 * @throws {$protobuf.util.ProtocolError} If required fields are missing
					 */
					public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): spotify.clienttoken.data.v0.Screen;

					/**
					 * Verifies a Screen message.
					 * @param message Plain object to verify
					 * @returns `null` if valid, otherwise the reason why it is not
					 */
					public static verify(message: { [k: string]: any }): string | null;

					/**
					 * Creates a Screen message from a plain object. Also converts values to their respective internal types.
					 * @param object Plain object
					 * @returns Screen
					 */
					public static fromObject(object: { [k: string]: any }): spotify.clienttoken.data.v0.Screen;

					/**
					 * Creates a plain object from a Screen message. Also converts values to other types if specified.
					 * @param message Screen
					 * @param [options] Conversion options
					 * @returns Plain object
					 */
					public static toObject(
						message: spotify.clienttoken.data.v0.Screen,
						options?: $protobuf.IConversionOptions,
					): { [k: string]: any };

					/**
					 * Converts this Screen to JSON.
					 * @returns JSON object
					 */
					public toJSON(): { [k: string]: any };

					/**
					 * Gets the default type url for Screen
					 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
					 * @returns The default type url
					 */
					public static getTypeUrl(typeUrlPrefix?: string): string;
				}
			}
		}
	}
}

/** Represents a ClientHello. */
export class ClientHello implements IClientHello {
	/**
	 * Constructs a new ClientHello.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IClientHello);

	/** ClientHello buildInfo. */
	public buildInfo: IBuildInfo;

	/** ClientHello fingerprintsSupported. */
	public fingerprintsSupported: Fingerprint[];

	/** ClientHello cryptosuitesSupported. */
	public cryptosuitesSupported: Cryptosuite[];

	/** ClientHello powschemesSupported. */
	public powschemesSupported: Powscheme[];

	/** ClientHello loginCryptoHello. */
	public loginCryptoHello: ILoginCryptoHelloUnion;

	/** ClientHello clientNonce. */
	public clientNonce: Uint8Array;

	/** ClientHello padding. */
	public padding: Uint8Array;

	/** ClientHello featureSet. */
	public featureSet?: IFeatureSet | null;

	/**
	 * Creates a new ClientHello instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ClientHello instance
	 */
	public static create(properties?: IClientHello): ClientHello;

	/**
	 * Encodes the specified ClientHello message. Does not implicitly {@link ClientHello.verify|verify} messages.
	 * @param message ClientHello message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IClientHello, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ClientHello message, length delimited. Does not implicitly {@link ClientHello.verify|verify} messages.
	 * @param message ClientHello message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IClientHello, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ClientHello message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ClientHello
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientHello;

	/**
	 * Decodes a ClientHello message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ClientHello
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientHello;

	/**
	 * Verifies a ClientHello message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ClientHello message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ClientHello
	 */
	public static fromObject(object: { [k: string]: any }): ClientHello;

	/**
	 * Creates a plain object from a ClientHello message. Also converts values to other types if specified.
	 * @param message ClientHello
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ClientHello, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ClientHello to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ClientHello
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BuildInfo. */
export class BuildInfo implements IBuildInfo {
	/**
	 * Constructs a new BuildInfo.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IBuildInfo);

	/** BuildInfo product. */
	public product: Product;

	/** BuildInfo productFlags. */
	public productFlags: ProductFlags[];

	/** BuildInfo platform. */
	public platform: Platform;

	/** BuildInfo version. */
	public version: number | Long;

	/**
	 * Creates a new BuildInfo instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns BuildInfo instance
	 */
	public static create(properties?: IBuildInfo): BuildInfo;

	/**
	 * Encodes the specified BuildInfo message. Does not implicitly {@link BuildInfo.verify|verify} messages.
	 * @param message BuildInfo message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IBuildInfo, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified BuildInfo message, length delimited. Does not implicitly {@link BuildInfo.verify|verify} messages.
	 * @param message BuildInfo message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IBuildInfo, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a BuildInfo message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns BuildInfo
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): BuildInfo;

	/**
	 * Decodes a BuildInfo message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns BuildInfo
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): BuildInfo;

	/**
	 * Verifies a BuildInfo message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a BuildInfo message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns BuildInfo
	 */
	public static fromObject(object: { [k: string]: any }): BuildInfo;

	/**
	 * Creates a plain object from a BuildInfo message. Also converts values to other types if specified.
	 * @param message BuildInfo
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: BuildInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this BuildInfo to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for BuildInfo
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Product enum. */
export enum Product {
	PRODUCT_CLIENT = 0,
	PRODUCT_LIBSPOTIFY = 1,
	PRODUCT_MOBILE = 2,
	PRODUCT_PARTNER = 3,
	PRODUCT_LIBSPOTIFY_EMBEDDED = 5,
}

/** ProductFlags enum. */
export enum ProductFlags {
	PRODUCT_FLAG_NONE = 0,
	PRODUCT_FLAG_DEV_BUILD = 1,
}

/** Platform enum. */
export enum Platform {
	PLATFORM_WIN32_X86 = 0,
	PLATFORM_OSX_X86 = 1,
	PLATFORM_LINUX_X86 = 2,
	PLATFORM_IPHONE_ARM = 3,
	PLATFORM_S60_ARM = 4,
	PLATFORM_OSX_PPC = 5,
	PLATFORM_ANDROID_ARM = 6,
	PLATFORM_WINDOWS_CE_ARM = 7,
	PLATFORM_LINUX_X86_64 = 8,
	PLATFORM_OSX_X86_64 = 9,
	PLATFORM_PALM_ARM = 10,
	PLATFORM_LINUX_SH = 11,
	PLATFORM_FREEBSD_X86 = 12,
	PLATFORM_FREEBSD_X86_64 = 13,
	PLATFORM_BLACKBERRY_ARM = 14,
	PLATFORM_SONOS = 15,
	PLATFORM_LINUX_MIPS = 16,
	PLATFORM_LINUX_ARM = 17,
	PLATFORM_LOGITECH_ARM = 18,
	PLATFORM_LINUX_BLACKFIN = 19,
	PLATFORM_WP7_ARM = 20,
	PLATFORM_ONKYO_ARM = 21,
	PLATFORM_QNXNTO_ARM = 22,
	PLATFORM_BCO_ARM = 23,
	PLATFORM_WEBPLAYER = 24,
	PLATFORM_WP8_ARM = 25,
	PLATFORM_WP8_X86 = 26,
	PLATFORM_WINRT_ARM = 27,
	PLATFORM_WINRT_X86 = 28,
	PLATFORM_WINRT_X86_64 = 29,
	PLATFORM_FRONTIER = 30,
	PLATFORM_AMIGA_PPC = 31,
	PLATFORM_NANRADIO_NRX901 = 32,
	PLATFORM_HARMAN_ARM = 33,
	PLATFORM_SONY_PS3 = 34,
	PLATFORM_SONY_PS4 = 35,
	PLATFORM_IPHONE_ARM64 = 36,
	PLATFORM_RTEMS_PPC = 37,
	PLATFORM_GENERIC_PARTNER = 38,
	PLATFORM_WIN32_X86_64 = 39,
	PLATFORM_WATCHOS = 40,
}

/** Fingerprint enum. */
export enum Fingerprint {
	FINGERPRINT_GRAIN = 0,
	FINGERPRINT_HMAC_RIPEMD = 1,
}

/** Cryptosuite enum. */
export enum Cryptosuite {
	CRYPTO_SUITE_SHANNON = 0,
	CRYPTO_SUITE_RC4_SHA1_HMAC = 1,
}

/** Powscheme enum. */
export enum Powscheme {
	POW_HASH_CASH = 0,
}

/** Represents a LoginCryptoHelloUnion. */
export class LoginCryptoHelloUnion implements ILoginCryptoHelloUnion {
	/**
	 * Constructs a new LoginCryptoHelloUnion.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ILoginCryptoHelloUnion);

	/** LoginCryptoHelloUnion diffieHellman. */
	public diffieHellman?: ILoginCryptoDiffieHellmanHello | null;

	/**
	 * Creates a new LoginCryptoHelloUnion instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns LoginCryptoHelloUnion instance
	 */
	public static create(properties?: ILoginCryptoHelloUnion): LoginCryptoHelloUnion;

	/**
	 * Encodes the specified LoginCryptoHelloUnion message. Does not implicitly {@link LoginCryptoHelloUnion.verify|verify} messages.
	 * @param message LoginCryptoHelloUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ILoginCryptoHelloUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified LoginCryptoHelloUnion message, length delimited. Does not implicitly {@link LoginCryptoHelloUnion.verify|verify} messages.
	 * @param message LoginCryptoHelloUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ILoginCryptoHelloUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a LoginCryptoHelloUnion message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns LoginCryptoHelloUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): LoginCryptoHelloUnion;

	/**
	 * Decodes a LoginCryptoHelloUnion message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns LoginCryptoHelloUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): LoginCryptoHelloUnion;

	/**
	 * Verifies a LoginCryptoHelloUnion message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a LoginCryptoHelloUnion message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns LoginCryptoHelloUnion
	 */
	public static fromObject(object: { [k: string]: any }): LoginCryptoHelloUnion;

	/**
	 * Creates a plain object from a LoginCryptoHelloUnion message. Also converts values to other types if specified.
	 * @param message LoginCryptoHelloUnion
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: LoginCryptoHelloUnion, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this LoginCryptoHelloUnion to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for LoginCryptoHelloUnion
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a LoginCryptoDiffieHellmanHello. */
export class LoginCryptoDiffieHellmanHello implements ILoginCryptoDiffieHellmanHello {
	/**
	 * Constructs a new LoginCryptoDiffieHellmanHello.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ILoginCryptoDiffieHellmanHello);

	/** LoginCryptoDiffieHellmanHello gc. */
	public gc: Uint8Array;

	/** LoginCryptoDiffieHellmanHello serverKeysKnown. */
	public serverKeysKnown: number;

	/**
	 * Creates a new LoginCryptoDiffieHellmanHello instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns LoginCryptoDiffieHellmanHello instance
	 */
	public static create(properties?: ILoginCryptoDiffieHellmanHello): LoginCryptoDiffieHellmanHello;

	/**
	 * Encodes the specified LoginCryptoDiffieHellmanHello message. Does not implicitly {@link LoginCryptoDiffieHellmanHello.verify|verify} messages.
	 * @param message LoginCryptoDiffieHellmanHello message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ILoginCryptoDiffieHellmanHello, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified LoginCryptoDiffieHellmanHello message, length delimited. Does not implicitly {@link LoginCryptoDiffieHellmanHello.verify|verify} messages.
	 * @param message LoginCryptoDiffieHellmanHello message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ILoginCryptoDiffieHellmanHello, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a LoginCryptoDiffieHellmanHello message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns LoginCryptoDiffieHellmanHello
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): LoginCryptoDiffieHellmanHello;

	/**
	 * Decodes a LoginCryptoDiffieHellmanHello message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns LoginCryptoDiffieHellmanHello
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): LoginCryptoDiffieHellmanHello;

	/**
	 * Verifies a LoginCryptoDiffieHellmanHello message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a LoginCryptoDiffieHellmanHello message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns LoginCryptoDiffieHellmanHello
	 */
	public static fromObject(object: { [k: string]: any }): LoginCryptoDiffieHellmanHello;

	/**
	 * Creates a plain object from a LoginCryptoDiffieHellmanHello message. Also converts values to other types if specified.
	 * @param message LoginCryptoDiffieHellmanHello
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: LoginCryptoDiffieHellmanHello, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this LoginCryptoDiffieHellmanHello to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for LoginCryptoDiffieHellmanHello
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a FeatureSet. */
export class FeatureSet implements IFeatureSet {
	/**
	 * Constructs a new FeatureSet.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IFeatureSet);

	/** FeatureSet autoupdate2. */
	public autoupdate2: boolean;

	/** FeatureSet currentLocation. */
	public currentLocation: boolean;

	/**
	 * Creates a new FeatureSet instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns FeatureSet instance
	 */
	public static create(properties?: IFeatureSet): FeatureSet;

	/**
	 * Encodes the specified FeatureSet message. Does not implicitly {@link FeatureSet.verify|verify} messages.
	 * @param message FeatureSet message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link FeatureSet.verify|verify} messages.
	 * @param message FeatureSet message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a FeatureSet message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns FeatureSet
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): FeatureSet;

	/**
	 * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns FeatureSet
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): FeatureSet;

	/**
	 * Verifies a FeatureSet message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns FeatureSet
	 */
	public static fromObject(object: { [k: string]: any }): FeatureSet;

	/**
	 * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
	 * @param message FeatureSet
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this FeatureSet to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for FeatureSet
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a APResponseMessage. */
export class APResponseMessage implements IAPResponseMessage {
	/**
	 * Constructs a new APResponseMessage.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IAPResponseMessage);

	/** APResponseMessage challenge. */
	public challenge?: IAPChallenge | null;

	/** APResponseMessage upgrade. */
	public upgrade?: IUpgradeRequiredMessage | null;

	/** APResponseMessage loginFailed. */
	public loginFailed?: IAPLoginFailed | null;

	/**
	 * Creates a new APResponseMessage instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns APResponseMessage instance
	 */
	public static create(properties?: IAPResponseMessage): APResponseMessage;

	/**
	 * Encodes the specified APResponseMessage message. Does not implicitly {@link APResponseMessage.verify|verify} messages.
	 * @param message APResponseMessage message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IAPResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified APResponseMessage message, length delimited. Does not implicitly {@link APResponseMessage.verify|verify} messages.
	 * @param message APResponseMessage message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IAPResponseMessage, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a APResponseMessage message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns APResponseMessage
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): APResponseMessage;

	/**
	 * Decodes a APResponseMessage message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns APResponseMessage
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): APResponseMessage;

	/**
	 * Verifies a APResponseMessage message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a APResponseMessage message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns APResponseMessage
	 */
	public static fromObject(object: { [k: string]: any }): APResponseMessage;

	/**
	 * Creates a plain object from a APResponseMessage message. Also converts values to other types if specified.
	 * @param message APResponseMessage
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: APResponseMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this APResponseMessage to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for APResponseMessage
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a APChallenge. */
export class APChallenge implements IAPChallenge {
	/**
	 * Constructs a new APChallenge.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IAPChallenge);

	/** APChallenge loginCryptoChallenge. */
	public loginCryptoChallenge: ILoginCryptoChallengeUnion;

	/** APChallenge fingerprintChallenge. */
	public fingerprintChallenge: IFingerprintChallengeUnion;

	/** APChallenge powChallenge. */
	public powChallenge: IPoWChallengeUnion;

	/** APChallenge cryptoChallenge. */
	public cryptoChallenge: ICryptoChallengeUnion;

	/** APChallenge serverNonce. */
	public serverNonce: Uint8Array;

	/** APChallenge padding. */
	public padding: Uint8Array;

	/**
	 * Creates a new APChallenge instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns APChallenge instance
	 */
	public static create(properties?: IAPChallenge): APChallenge;

	/**
	 * Encodes the specified APChallenge message. Does not implicitly {@link APChallenge.verify|verify} messages.
	 * @param message APChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IAPChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified APChallenge message, length delimited. Does not implicitly {@link APChallenge.verify|verify} messages.
	 * @param message APChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IAPChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a APChallenge message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns APChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): APChallenge;

	/**
	 * Decodes a APChallenge message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns APChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): APChallenge;

	/**
	 * Verifies a APChallenge message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a APChallenge message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns APChallenge
	 */
	public static fromObject(object: { [k: string]: any }): APChallenge;

	/**
	 * Creates a plain object from a APChallenge message. Also converts values to other types if specified.
	 * @param message APChallenge
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: APChallenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this APChallenge to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for APChallenge
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a LoginCryptoChallengeUnion. */
export class LoginCryptoChallengeUnion implements ILoginCryptoChallengeUnion {
	/**
	 * Constructs a new LoginCryptoChallengeUnion.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ILoginCryptoChallengeUnion);

	/** LoginCryptoChallengeUnion diffieHellman. */
	public diffieHellman?: ILoginCryptoDiffieHellmanChallenge | null;

	/**
	 * Creates a new LoginCryptoChallengeUnion instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns LoginCryptoChallengeUnion instance
	 */
	public static create(properties?: ILoginCryptoChallengeUnion): LoginCryptoChallengeUnion;

	/**
	 * Encodes the specified LoginCryptoChallengeUnion message. Does not implicitly {@link LoginCryptoChallengeUnion.verify|verify} messages.
	 * @param message LoginCryptoChallengeUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ILoginCryptoChallengeUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified LoginCryptoChallengeUnion message, length delimited. Does not implicitly {@link LoginCryptoChallengeUnion.verify|verify} messages.
	 * @param message LoginCryptoChallengeUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ILoginCryptoChallengeUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a LoginCryptoChallengeUnion message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns LoginCryptoChallengeUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): LoginCryptoChallengeUnion;

	/**
	 * Decodes a LoginCryptoChallengeUnion message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns LoginCryptoChallengeUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): LoginCryptoChallengeUnion;

	/**
	 * Verifies a LoginCryptoChallengeUnion message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a LoginCryptoChallengeUnion message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns LoginCryptoChallengeUnion
	 */
	public static fromObject(object: { [k: string]: any }): LoginCryptoChallengeUnion;

	/**
	 * Creates a plain object from a LoginCryptoChallengeUnion message. Also converts values to other types if specified.
	 * @param message LoginCryptoChallengeUnion
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: LoginCryptoChallengeUnion, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this LoginCryptoChallengeUnion to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for LoginCryptoChallengeUnion
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a LoginCryptoDiffieHellmanChallenge. */
export class LoginCryptoDiffieHellmanChallenge implements ILoginCryptoDiffieHellmanChallenge {
	/**
	 * Constructs a new LoginCryptoDiffieHellmanChallenge.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ILoginCryptoDiffieHellmanChallenge);

	/** LoginCryptoDiffieHellmanChallenge gs. */
	public gs: Uint8Array;

	/** LoginCryptoDiffieHellmanChallenge serverSignatureKey. */
	public serverSignatureKey: number;

	/** LoginCryptoDiffieHellmanChallenge gsSignature. */
	public gsSignature: Uint8Array;

	/**
	 * Creates a new LoginCryptoDiffieHellmanChallenge instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns LoginCryptoDiffieHellmanChallenge instance
	 */
	public static create(properties?: ILoginCryptoDiffieHellmanChallenge): LoginCryptoDiffieHellmanChallenge;

	/**
	 * Encodes the specified LoginCryptoDiffieHellmanChallenge message. Does not implicitly {@link LoginCryptoDiffieHellmanChallenge.verify|verify} messages.
	 * @param message LoginCryptoDiffieHellmanChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ILoginCryptoDiffieHellmanChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified LoginCryptoDiffieHellmanChallenge message, length delimited. Does not implicitly {@link LoginCryptoDiffieHellmanChallenge.verify|verify} messages.
	 * @param message LoginCryptoDiffieHellmanChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ILoginCryptoDiffieHellmanChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a LoginCryptoDiffieHellmanChallenge message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns LoginCryptoDiffieHellmanChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): LoginCryptoDiffieHellmanChallenge;

	/**
	 * Decodes a LoginCryptoDiffieHellmanChallenge message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns LoginCryptoDiffieHellmanChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): LoginCryptoDiffieHellmanChallenge;

	/**
	 * Verifies a LoginCryptoDiffieHellmanChallenge message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a LoginCryptoDiffieHellmanChallenge message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns LoginCryptoDiffieHellmanChallenge
	 */
	public static fromObject(object: { [k: string]: any }): LoginCryptoDiffieHellmanChallenge;

	/**
	 * Creates a plain object from a LoginCryptoDiffieHellmanChallenge message. Also converts values to other types if specified.
	 * @param message LoginCryptoDiffieHellmanChallenge
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: LoginCryptoDiffieHellmanChallenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this LoginCryptoDiffieHellmanChallenge to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for LoginCryptoDiffieHellmanChallenge
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a FingerprintChallengeUnion. */
export class FingerprintChallengeUnion implements IFingerprintChallengeUnion {
	/**
	 * Constructs a new FingerprintChallengeUnion.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IFingerprintChallengeUnion);

	/** FingerprintChallengeUnion grain. */
	public grain?: IFingerprintGrainChallenge | null;

	/** FingerprintChallengeUnion hmacRipemd. */
	public hmacRipemd?: IFingerprintHmacRipemdChallenge | null;

	/**
	 * Creates a new FingerprintChallengeUnion instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns FingerprintChallengeUnion instance
	 */
	public static create(properties?: IFingerprintChallengeUnion): FingerprintChallengeUnion;

	/**
	 * Encodes the specified FingerprintChallengeUnion message. Does not implicitly {@link FingerprintChallengeUnion.verify|verify} messages.
	 * @param message FingerprintChallengeUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IFingerprintChallengeUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified FingerprintChallengeUnion message, length delimited. Does not implicitly {@link FingerprintChallengeUnion.verify|verify} messages.
	 * @param message FingerprintChallengeUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IFingerprintChallengeUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a FingerprintChallengeUnion message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns FingerprintChallengeUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): FingerprintChallengeUnion;

	/**
	 * Decodes a FingerprintChallengeUnion message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns FingerprintChallengeUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): FingerprintChallengeUnion;

	/**
	 * Verifies a FingerprintChallengeUnion message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a FingerprintChallengeUnion message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns FingerprintChallengeUnion
	 */
	public static fromObject(object: { [k: string]: any }): FingerprintChallengeUnion;

	/**
	 * Creates a plain object from a FingerprintChallengeUnion message. Also converts values to other types if specified.
	 * @param message FingerprintChallengeUnion
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: FingerprintChallengeUnion, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this FingerprintChallengeUnion to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for FingerprintChallengeUnion
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a FingerprintGrainChallenge. */
export class FingerprintGrainChallenge implements IFingerprintGrainChallenge {
	/**
	 * Constructs a new FingerprintGrainChallenge.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IFingerprintGrainChallenge);

	/** FingerprintGrainChallenge kek. */
	public kek: Uint8Array;

	/**
	 * Creates a new FingerprintGrainChallenge instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns FingerprintGrainChallenge instance
	 */
	public static create(properties?: IFingerprintGrainChallenge): FingerprintGrainChallenge;

	/**
	 * Encodes the specified FingerprintGrainChallenge message. Does not implicitly {@link FingerprintGrainChallenge.verify|verify} messages.
	 * @param message FingerprintGrainChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IFingerprintGrainChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified FingerprintGrainChallenge message, length delimited. Does not implicitly {@link FingerprintGrainChallenge.verify|verify} messages.
	 * @param message FingerprintGrainChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IFingerprintGrainChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a FingerprintGrainChallenge message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns FingerprintGrainChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): FingerprintGrainChallenge;

	/**
	 * Decodes a FingerprintGrainChallenge message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns FingerprintGrainChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): FingerprintGrainChallenge;

	/**
	 * Verifies a FingerprintGrainChallenge message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a FingerprintGrainChallenge message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns FingerprintGrainChallenge
	 */
	public static fromObject(object: { [k: string]: any }): FingerprintGrainChallenge;

	/**
	 * Creates a plain object from a FingerprintGrainChallenge message. Also converts values to other types if specified.
	 * @param message FingerprintGrainChallenge
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: FingerprintGrainChallenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this FingerprintGrainChallenge to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for FingerprintGrainChallenge
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a FingerprintHmacRipemdChallenge. */
export class FingerprintHmacRipemdChallenge implements IFingerprintHmacRipemdChallenge {
	/**
	 * Constructs a new FingerprintHmacRipemdChallenge.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IFingerprintHmacRipemdChallenge);

	/** FingerprintHmacRipemdChallenge challenge. */
	public challenge: Uint8Array;

	/**
	 * Creates a new FingerprintHmacRipemdChallenge instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns FingerprintHmacRipemdChallenge instance
	 */
	public static create(properties?: IFingerprintHmacRipemdChallenge): FingerprintHmacRipemdChallenge;

	/**
	 * Encodes the specified FingerprintHmacRipemdChallenge message. Does not implicitly {@link FingerprintHmacRipemdChallenge.verify|verify} messages.
	 * @param message FingerprintHmacRipemdChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IFingerprintHmacRipemdChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified FingerprintHmacRipemdChallenge message, length delimited. Does not implicitly {@link FingerprintHmacRipemdChallenge.verify|verify} messages.
	 * @param message FingerprintHmacRipemdChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IFingerprintHmacRipemdChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a FingerprintHmacRipemdChallenge message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns FingerprintHmacRipemdChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): FingerprintHmacRipemdChallenge;

	/**
	 * Decodes a FingerprintHmacRipemdChallenge message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns FingerprintHmacRipemdChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): FingerprintHmacRipemdChallenge;

	/**
	 * Verifies a FingerprintHmacRipemdChallenge message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a FingerprintHmacRipemdChallenge message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns FingerprintHmacRipemdChallenge
	 */
	public static fromObject(object: { [k: string]: any }): FingerprintHmacRipemdChallenge;

	/**
	 * Creates a plain object from a FingerprintHmacRipemdChallenge message. Also converts values to other types if specified.
	 * @param message FingerprintHmacRipemdChallenge
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: FingerprintHmacRipemdChallenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this FingerprintHmacRipemdChallenge to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for FingerprintHmacRipemdChallenge
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PoWChallengeUnion. */
export class PoWChallengeUnion implements IPoWChallengeUnion {
	/**
	 * Constructs a new PoWChallengeUnion.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IPoWChallengeUnion);

	/** PoWChallengeUnion hashCash. */
	public hashCash?: IPoWHashCashChallenge | null;

	/**
	 * Creates a new PoWChallengeUnion instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns PoWChallengeUnion instance
	 */
	public static create(properties?: IPoWChallengeUnion): PoWChallengeUnion;

	/**
	 * Encodes the specified PoWChallengeUnion message. Does not implicitly {@link PoWChallengeUnion.verify|verify} messages.
	 * @param message PoWChallengeUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IPoWChallengeUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified PoWChallengeUnion message, length delimited. Does not implicitly {@link PoWChallengeUnion.verify|verify} messages.
	 * @param message PoWChallengeUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IPoWChallengeUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a PoWChallengeUnion message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns PoWChallengeUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PoWChallengeUnion;

	/**
	 * Decodes a PoWChallengeUnion message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns PoWChallengeUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PoWChallengeUnion;

	/**
	 * Verifies a PoWChallengeUnion message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a PoWChallengeUnion message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns PoWChallengeUnion
	 */
	public static fromObject(object: { [k: string]: any }): PoWChallengeUnion;

	/**
	 * Creates a plain object from a PoWChallengeUnion message. Also converts values to other types if specified.
	 * @param message PoWChallengeUnion
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: PoWChallengeUnion, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this PoWChallengeUnion to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for PoWChallengeUnion
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PoWHashCashChallenge. */
export class PoWHashCashChallenge implements IPoWHashCashChallenge {
	/**
	 * Constructs a new PoWHashCashChallenge.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IPoWHashCashChallenge);

	/** PoWHashCashChallenge prefix. */
	public prefix: Uint8Array;

	/** PoWHashCashChallenge length. */
	public length: number;

	/** PoWHashCashChallenge target. */
	public target: number;

	/**
	 * Creates a new PoWHashCashChallenge instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns PoWHashCashChallenge instance
	 */
	public static create(properties?: IPoWHashCashChallenge): PoWHashCashChallenge;

	/**
	 * Encodes the specified PoWHashCashChallenge message. Does not implicitly {@link PoWHashCashChallenge.verify|verify} messages.
	 * @param message PoWHashCashChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IPoWHashCashChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified PoWHashCashChallenge message, length delimited. Does not implicitly {@link PoWHashCashChallenge.verify|verify} messages.
	 * @param message PoWHashCashChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IPoWHashCashChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a PoWHashCashChallenge message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns PoWHashCashChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PoWHashCashChallenge;

	/**
	 * Decodes a PoWHashCashChallenge message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns PoWHashCashChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PoWHashCashChallenge;

	/**
	 * Verifies a PoWHashCashChallenge message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a PoWHashCashChallenge message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns PoWHashCashChallenge
	 */
	public static fromObject(object: { [k: string]: any }): PoWHashCashChallenge;

	/**
	 * Creates a plain object from a PoWHashCashChallenge message. Also converts values to other types if specified.
	 * @param message PoWHashCashChallenge
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: PoWHashCashChallenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this PoWHashCashChallenge to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for PoWHashCashChallenge
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CryptoChallengeUnion. */
export class CryptoChallengeUnion implements ICryptoChallengeUnion {
	/**
	 * Constructs a new CryptoChallengeUnion.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ICryptoChallengeUnion);

	/** CryptoChallengeUnion shannon. */
	public shannon?: ICryptoShannonChallenge | null;

	/** CryptoChallengeUnion rc4Sha1Hmac. */
	public rc4Sha1Hmac?: ICryptoRc4Sha1HmacChallenge | null;

	/**
	 * Creates a new CryptoChallengeUnion instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns CryptoChallengeUnion instance
	 */
	public static create(properties?: ICryptoChallengeUnion): CryptoChallengeUnion;

	/**
	 * Encodes the specified CryptoChallengeUnion message. Does not implicitly {@link CryptoChallengeUnion.verify|verify} messages.
	 * @param message CryptoChallengeUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ICryptoChallengeUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified CryptoChallengeUnion message, length delimited. Does not implicitly {@link CryptoChallengeUnion.verify|verify} messages.
	 * @param message CryptoChallengeUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ICryptoChallengeUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a CryptoChallengeUnion message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns CryptoChallengeUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): CryptoChallengeUnion;

	/**
	 * Decodes a CryptoChallengeUnion message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns CryptoChallengeUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): CryptoChallengeUnion;

	/**
	 * Verifies a CryptoChallengeUnion message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a CryptoChallengeUnion message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns CryptoChallengeUnion
	 */
	public static fromObject(object: { [k: string]: any }): CryptoChallengeUnion;

	/**
	 * Creates a plain object from a CryptoChallengeUnion message. Also converts values to other types if specified.
	 * @param message CryptoChallengeUnion
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: CryptoChallengeUnion, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this CryptoChallengeUnion to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for CryptoChallengeUnion
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CryptoShannonChallenge. */
export class CryptoShannonChallenge implements ICryptoShannonChallenge {
	/**
	 * Constructs a new CryptoShannonChallenge.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ICryptoShannonChallenge);

	/**
	 * Creates a new CryptoShannonChallenge instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns CryptoShannonChallenge instance
	 */
	public static create(properties?: ICryptoShannonChallenge): CryptoShannonChallenge;

	/**
	 * Encodes the specified CryptoShannonChallenge message. Does not implicitly {@link CryptoShannonChallenge.verify|verify} messages.
	 * @param message CryptoShannonChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ICryptoShannonChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified CryptoShannonChallenge message, length delimited. Does not implicitly {@link CryptoShannonChallenge.verify|verify} messages.
	 * @param message CryptoShannonChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ICryptoShannonChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a CryptoShannonChallenge message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns CryptoShannonChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): CryptoShannonChallenge;

	/**
	 * Decodes a CryptoShannonChallenge message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns CryptoShannonChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): CryptoShannonChallenge;

	/**
	 * Verifies a CryptoShannonChallenge message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a CryptoShannonChallenge message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns CryptoShannonChallenge
	 */
	public static fromObject(object: { [k: string]: any }): CryptoShannonChallenge;

	/**
	 * Creates a plain object from a CryptoShannonChallenge message. Also converts values to other types if specified.
	 * @param message CryptoShannonChallenge
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: CryptoShannonChallenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this CryptoShannonChallenge to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for CryptoShannonChallenge
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CryptoRc4Sha1HmacChallenge. */
export class CryptoRc4Sha1HmacChallenge implements ICryptoRc4Sha1HmacChallenge {
	/**
	 * Constructs a new CryptoRc4Sha1HmacChallenge.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ICryptoRc4Sha1HmacChallenge);

	/**
	 * Creates a new CryptoRc4Sha1HmacChallenge instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns CryptoRc4Sha1HmacChallenge instance
	 */
	public static create(properties?: ICryptoRc4Sha1HmacChallenge): CryptoRc4Sha1HmacChallenge;

	/**
	 * Encodes the specified CryptoRc4Sha1HmacChallenge message. Does not implicitly {@link CryptoRc4Sha1HmacChallenge.verify|verify} messages.
	 * @param message CryptoRc4Sha1HmacChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ICryptoRc4Sha1HmacChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified CryptoRc4Sha1HmacChallenge message, length delimited. Does not implicitly {@link CryptoRc4Sha1HmacChallenge.verify|verify} messages.
	 * @param message CryptoRc4Sha1HmacChallenge message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ICryptoRc4Sha1HmacChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a CryptoRc4Sha1HmacChallenge message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns CryptoRc4Sha1HmacChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): CryptoRc4Sha1HmacChallenge;

	/**
	 * Decodes a CryptoRc4Sha1HmacChallenge message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns CryptoRc4Sha1HmacChallenge
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): CryptoRc4Sha1HmacChallenge;

	/**
	 * Verifies a CryptoRc4Sha1HmacChallenge message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a CryptoRc4Sha1HmacChallenge message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns CryptoRc4Sha1HmacChallenge
	 */
	public static fromObject(object: { [k: string]: any }): CryptoRc4Sha1HmacChallenge;

	/**
	 * Creates a plain object from a CryptoRc4Sha1HmacChallenge message. Also converts values to other types if specified.
	 * @param message CryptoRc4Sha1HmacChallenge
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: CryptoRc4Sha1HmacChallenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this CryptoRc4Sha1HmacChallenge to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for CryptoRc4Sha1HmacChallenge
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an UpgradeRequiredMessage. */
export class UpgradeRequiredMessage implements IUpgradeRequiredMessage {
	/**
	 * Constructs a new UpgradeRequiredMessage.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IUpgradeRequiredMessage);

	/** UpgradeRequiredMessage upgradeSignedPart. */
	public upgradeSignedPart: Uint8Array;

	/** UpgradeRequiredMessage signature. */
	public signature: Uint8Array;

	/** UpgradeRequiredMessage httpSuffix. */
	public httpSuffix: string;

	/**
	 * Creates a new UpgradeRequiredMessage instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns UpgradeRequiredMessage instance
	 */
	public static create(properties?: IUpgradeRequiredMessage): UpgradeRequiredMessage;

	/**
	 * Encodes the specified UpgradeRequiredMessage message. Does not implicitly {@link UpgradeRequiredMessage.verify|verify} messages.
	 * @param message UpgradeRequiredMessage message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IUpgradeRequiredMessage, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified UpgradeRequiredMessage message, length delimited. Does not implicitly {@link UpgradeRequiredMessage.verify|verify} messages.
	 * @param message UpgradeRequiredMessage message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IUpgradeRequiredMessage, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an UpgradeRequiredMessage message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns UpgradeRequiredMessage
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): UpgradeRequiredMessage;

	/**
	 * Decodes an UpgradeRequiredMessage message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns UpgradeRequiredMessage
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): UpgradeRequiredMessage;

	/**
	 * Verifies an UpgradeRequiredMessage message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an UpgradeRequiredMessage message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns UpgradeRequiredMessage
	 */
	public static fromObject(object: { [k: string]: any }): UpgradeRequiredMessage;

	/**
	 * Creates a plain object from an UpgradeRequiredMessage message. Also converts values to other types if specified.
	 * @param message UpgradeRequiredMessage
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: UpgradeRequiredMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this UpgradeRequiredMessage to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for UpgradeRequiredMessage
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a APLoginFailed. */
export class APLoginFailed implements IAPLoginFailed {
	/**
	 * Constructs a new APLoginFailed.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IAPLoginFailed);

	/** APLoginFailed errorCode. */
	public errorCode: ErrorCode;

	/** APLoginFailed retryDelay. */
	public retryDelay: number;

	/** APLoginFailed expiry. */
	public expiry: number;

	/** APLoginFailed errorDescription. */
	public errorDescription: string;

	/**
	 * Creates a new APLoginFailed instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns APLoginFailed instance
	 */
	public static create(properties?: IAPLoginFailed): APLoginFailed;

	/**
	 * Encodes the specified APLoginFailed message. Does not implicitly {@link APLoginFailed.verify|verify} messages.
	 * @param message APLoginFailed message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IAPLoginFailed, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified APLoginFailed message, length delimited. Does not implicitly {@link APLoginFailed.verify|verify} messages.
	 * @param message APLoginFailed message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IAPLoginFailed, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a APLoginFailed message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns APLoginFailed
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): APLoginFailed;

	/**
	 * Decodes a APLoginFailed message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns APLoginFailed
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): APLoginFailed;

	/**
	 * Verifies a APLoginFailed message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a APLoginFailed message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns APLoginFailed
	 */
	public static fromObject(object: { [k: string]: any }): APLoginFailed;

	/**
	 * Creates a plain object from a APLoginFailed message. Also converts values to other types if specified.
	 * @param message APLoginFailed
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: APLoginFailed, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this APLoginFailed to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for APLoginFailed
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** ErrorCode enum. */
export enum ErrorCode {
	ProtocolError = 0,
	TryAnotherAP = 2,
	BadConnectionId = 5,
	TravelRestriction = 9,
	PremiumAccountRequired = 11,
	BadCredentials = 12,
	CouldNotValidateCredentials = 13,
	AccountExists = 14,
	ExtraVerificationRequired = 15,
	InvalidAppKey = 16,
	ApplicationBanned = 17,
}

/** Represents a ClientResponsePlaintext. */
export class ClientResponsePlaintext implements IClientResponsePlaintext {
	/**
	 * Constructs a new ClientResponsePlaintext.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IClientResponsePlaintext);

	/** ClientResponsePlaintext loginCryptoResponse. */
	public loginCryptoResponse: ILoginCryptoResponseUnion;

	/** ClientResponsePlaintext powResponse. */
	public powResponse: IPoWResponseUnion;

	/** ClientResponsePlaintext cryptoResponse. */
	public cryptoResponse: ICryptoResponseUnion;

	/**
	 * Creates a new ClientResponsePlaintext instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ClientResponsePlaintext instance
	 */
	public static create(properties?: IClientResponsePlaintext): ClientResponsePlaintext;

	/**
	 * Encodes the specified ClientResponsePlaintext message. Does not implicitly {@link ClientResponsePlaintext.verify|verify} messages.
	 * @param message ClientResponsePlaintext message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IClientResponsePlaintext, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ClientResponsePlaintext message, length delimited. Does not implicitly {@link ClientResponsePlaintext.verify|verify} messages.
	 * @param message ClientResponsePlaintext message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IClientResponsePlaintext, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ClientResponsePlaintext message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ClientResponsePlaintext
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ClientResponsePlaintext;

	/**
	 * Decodes a ClientResponsePlaintext message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ClientResponsePlaintext
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ClientResponsePlaintext;

	/**
	 * Verifies a ClientResponsePlaintext message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ClientResponsePlaintext message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ClientResponsePlaintext
	 */
	public static fromObject(object: { [k: string]: any }): ClientResponsePlaintext;

	/**
	 * Creates a plain object from a ClientResponsePlaintext message. Also converts values to other types if specified.
	 * @param message ClientResponsePlaintext
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ClientResponsePlaintext, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ClientResponsePlaintext to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ClientResponsePlaintext
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a LoginCryptoResponseUnion. */
export class LoginCryptoResponseUnion implements ILoginCryptoResponseUnion {
	/**
	 * Constructs a new LoginCryptoResponseUnion.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ILoginCryptoResponseUnion);

	/** LoginCryptoResponseUnion diffieHellman. */
	public diffieHellman?: ILoginCryptoDiffieHellmanResponse | null;

	/**
	 * Creates a new LoginCryptoResponseUnion instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns LoginCryptoResponseUnion instance
	 */
	public static create(properties?: ILoginCryptoResponseUnion): LoginCryptoResponseUnion;

	/**
	 * Encodes the specified LoginCryptoResponseUnion message. Does not implicitly {@link LoginCryptoResponseUnion.verify|verify} messages.
	 * @param message LoginCryptoResponseUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ILoginCryptoResponseUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified LoginCryptoResponseUnion message, length delimited. Does not implicitly {@link LoginCryptoResponseUnion.verify|verify} messages.
	 * @param message LoginCryptoResponseUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ILoginCryptoResponseUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a LoginCryptoResponseUnion message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns LoginCryptoResponseUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): LoginCryptoResponseUnion;

	/**
	 * Decodes a LoginCryptoResponseUnion message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns LoginCryptoResponseUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): LoginCryptoResponseUnion;

	/**
	 * Verifies a LoginCryptoResponseUnion message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a LoginCryptoResponseUnion message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns LoginCryptoResponseUnion
	 */
	public static fromObject(object: { [k: string]: any }): LoginCryptoResponseUnion;

	/**
	 * Creates a plain object from a LoginCryptoResponseUnion message. Also converts values to other types if specified.
	 * @param message LoginCryptoResponseUnion
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: LoginCryptoResponseUnion, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this LoginCryptoResponseUnion to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for LoginCryptoResponseUnion
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a LoginCryptoDiffieHellmanResponse. */
export class LoginCryptoDiffieHellmanResponse implements ILoginCryptoDiffieHellmanResponse {
	/**
	 * Constructs a new LoginCryptoDiffieHellmanResponse.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ILoginCryptoDiffieHellmanResponse);

	/** LoginCryptoDiffieHellmanResponse hmac. */
	public hmac: Uint8Array;

	/**
	 * Creates a new LoginCryptoDiffieHellmanResponse instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns LoginCryptoDiffieHellmanResponse instance
	 */
	public static create(properties?: ILoginCryptoDiffieHellmanResponse): LoginCryptoDiffieHellmanResponse;

	/**
	 * Encodes the specified LoginCryptoDiffieHellmanResponse message. Does not implicitly {@link LoginCryptoDiffieHellmanResponse.verify|verify} messages.
	 * @param message LoginCryptoDiffieHellmanResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ILoginCryptoDiffieHellmanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified LoginCryptoDiffieHellmanResponse message, length delimited. Does not implicitly {@link LoginCryptoDiffieHellmanResponse.verify|verify} messages.
	 * @param message LoginCryptoDiffieHellmanResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ILoginCryptoDiffieHellmanResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a LoginCryptoDiffieHellmanResponse message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns LoginCryptoDiffieHellmanResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): LoginCryptoDiffieHellmanResponse;

	/**
	 * Decodes a LoginCryptoDiffieHellmanResponse message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns LoginCryptoDiffieHellmanResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): LoginCryptoDiffieHellmanResponse;

	/**
	 * Verifies a LoginCryptoDiffieHellmanResponse message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a LoginCryptoDiffieHellmanResponse message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns LoginCryptoDiffieHellmanResponse
	 */
	public static fromObject(object: { [k: string]: any }): LoginCryptoDiffieHellmanResponse;

	/**
	 * Creates a plain object from a LoginCryptoDiffieHellmanResponse message. Also converts values to other types if specified.
	 * @param message LoginCryptoDiffieHellmanResponse
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: LoginCryptoDiffieHellmanResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this LoginCryptoDiffieHellmanResponse to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for LoginCryptoDiffieHellmanResponse
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PoWResponseUnion. */
export class PoWResponseUnion implements IPoWResponseUnion {
	/**
	 * Constructs a new PoWResponseUnion.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IPoWResponseUnion);

	/** PoWResponseUnion hashCash. */
	public hashCash?: IPoWHashCashResponse | null;

	/**
	 * Creates a new PoWResponseUnion instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns PoWResponseUnion instance
	 */
	public static create(properties?: IPoWResponseUnion): PoWResponseUnion;

	/**
	 * Encodes the specified PoWResponseUnion message. Does not implicitly {@link PoWResponseUnion.verify|verify} messages.
	 * @param message PoWResponseUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IPoWResponseUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified PoWResponseUnion message, length delimited. Does not implicitly {@link PoWResponseUnion.verify|verify} messages.
	 * @param message PoWResponseUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IPoWResponseUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a PoWResponseUnion message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns PoWResponseUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PoWResponseUnion;

	/**
	 * Decodes a PoWResponseUnion message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns PoWResponseUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PoWResponseUnion;

	/**
	 * Verifies a PoWResponseUnion message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a PoWResponseUnion message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns PoWResponseUnion
	 */
	public static fromObject(object: { [k: string]: any }): PoWResponseUnion;

	/**
	 * Creates a plain object from a PoWResponseUnion message. Also converts values to other types if specified.
	 * @param message PoWResponseUnion
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: PoWResponseUnion, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this PoWResponseUnion to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for PoWResponseUnion
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PoWHashCashResponse. */
export class PoWHashCashResponse implements IPoWHashCashResponse {
	/**
	 * Constructs a new PoWHashCashResponse.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IPoWHashCashResponse);

	/** PoWHashCashResponse hashSuffix. */
	public hashSuffix: Uint8Array;

	/**
	 * Creates a new PoWHashCashResponse instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns PoWHashCashResponse instance
	 */
	public static create(properties?: IPoWHashCashResponse): PoWHashCashResponse;

	/**
	 * Encodes the specified PoWHashCashResponse message. Does not implicitly {@link PoWHashCashResponse.verify|verify} messages.
	 * @param message PoWHashCashResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IPoWHashCashResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified PoWHashCashResponse message, length delimited. Does not implicitly {@link PoWHashCashResponse.verify|verify} messages.
	 * @param message PoWHashCashResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IPoWHashCashResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a PoWHashCashResponse message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns PoWHashCashResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): PoWHashCashResponse;

	/**
	 * Decodes a PoWHashCashResponse message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns PoWHashCashResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): PoWHashCashResponse;

	/**
	 * Verifies a PoWHashCashResponse message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a PoWHashCashResponse message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns PoWHashCashResponse
	 */
	public static fromObject(object: { [k: string]: any }): PoWHashCashResponse;

	/**
	 * Creates a plain object from a PoWHashCashResponse message. Also converts values to other types if specified.
	 * @param message PoWHashCashResponse
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: PoWHashCashResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this PoWHashCashResponse to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for PoWHashCashResponse
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CryptoResponseUnion. */
export class CryptoResponseUnion implements ICryptoResponseUnion {
	/**
	 * Constructs a new CryptoResponseUnion.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ICryptoResponseUnion);

	/** CryptoResponseUnion shannon. */
	public shannon?: ICryptoShannonResponse | null;

	/** CryptoResponseUnion rc4Sha1Hmac. */
	public rc4Sha1Hmac?: ICryptoRc4Sha1HmacResponse | null;

	/**
	 * Creates a new CryptoResponseUnion instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns CryptoResponseUnion instance
	 */
	public static create(properties?: ICryptoResponseUnion): CryptoResponseUnion;

	/**
	 * Encodes the specified CryptoResponseUnion message. Does not implicitly {@link CryptoResponseUnion.verify|verify} messages.
	 * @param message CryptoResponseUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ICryptoResponseUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified CryptoResponseUnion message, length delimited. Does not implicitly {@link CryptoResponseUnion.verify|verify} messages.
	 * @param message CryptoResponseUnion message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ICryptoResponseUnion, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a CryptoResponseUnion message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns CryptoResponseUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): CryptoResponseUnion;

	/**
	 * Decodes a CryptoResponseUnion message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns CryptoResponseUnion
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): CryptoResponseUnion;

	/**
	 * Verifies a CryptoResponseUnion message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a CryptoResponseUnion message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns CryptoResponseUnion
	 */
	public static fromObject(object: { [k: string]: any }): CryptoResponseUnion;

	/**
	 * Creates a plain object from a CryptoResponseUnion message. Also converts values to other types if specified.
	 * @param message CryptoResponseUnion
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: CryptoResponseUnion, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this CryptoResponseUnion to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for CryptoResponseUnion
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CryptoShannonResponse. */
export class CryptoShannonResponse implements ICryptoShannonResponse {
	/**
	 * Constructs a new CryptoShannonResponse.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ICryptoShannonResponse);

	/** CryptoShannonResponse dummy. */
	public dummy: number;

	/**
	 * Creates a new CryptoShannonResponse instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns CryptoShannonResponse instance
	 */
	public static create(properties?: ICryptoShannonResponse): CryptoShannonResponse;

	/**
	 * Encodes the specified CryptoShannonResponse message. Does not implicitly {@link CryptoShannonResponse.verify|verify} messages.
	 * @param message CryptoShannonResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ICryptoShannonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified CryptoShannonResponse message, length delimited. Does not implicitly {@link CryptoShannonResponse.verify|verify} messages.
	 * @param message CryptoShannonResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ICryptoShannonResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a CryptoShannonResponse message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns CryptoShannonResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): CryptoShannonResponse;

	/**
	 * Decodes a CryptoShannonResponse message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns CryptoShannonResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): CryptoShannonResponse;

	/**
	 * Verifies a CryptoShannonResponse message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a CryptoShannonResponse message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns CryptoShannonResponse
	 */
	public static fromObject(object: { [k: string]: any }): CryptoShannonResponse;

	/**
	 * Creates a plain object from a CryptoShannonResponse message. Also converts values to other types if specified.
	 * @param message CryptoShannonResponse
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: CryptoShannonResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this CryptoShannonResponse to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for CryptoShannonResponse
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CryptoRc4Sha1HmacResponse. */
export class CryptoRc4Sha1HmacResponse implements ICryptoRc4Sha1HmacResponse {
	/**
	 * Constructs a new CryptoRc4Sha1HmacResponse.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ICryptoRc4Sha1HmacResponse);

	/** CryptoRc4Sha1HmacResponse dummy. */
	public dummy: number;

	/**
	 * Creates a new CryptoRc4Sha1HmacResponse instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns CryptoRc4Sha1HmacResponse instance
	 */
	public static create(properties?: ICryptoRc4Sha1HmacResponse): CryptoRc4Sha1HmacResponse;

	/**
	 * Encodes the specified CryptoRc4Sha1HmacResponse message. Does not implicitly {@link CryptoRc4Sha1HmacResponse.verify|verify} messages.
	 * @param message CryptoRc4Sha1HmacResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ICryptoRc4Sha1HmacResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified CryptoRc4Sha1HmacResponse message, length delimited. Does not implicitly {@link CryptoRc4Sha1HmacResponse.verify|verify} messages.
	 * @param message CryptoRc4Sha1HmacResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ICryptoRc4Sha1HmacResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a CryptoRc4Sha1HmacResponse message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns CryptoRc4Sha1HmacResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): CryptoRc4Sha1HmacResponse;

	/**
	 * Decodes a CryptoRc4Sha1HmacResponse message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns CryptoRc4Sha1HmacResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): CryptoRc4Sha1HmacResponse;

	/**
	 * Verifies a CryptoRc4Sha1HmacResponse message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a CryptoRc4Sha1HmacResponse message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns CryptoRc4Sha1HmacResponse
	 */
	public static fromObject(object: { [k: string]: any }): CryptoRc4Sha1HmacResponse;

	/**
	 * Creates a plain object from a CryptoRc4Sha1HmacResponse message. Also converts values to other types if specified.
	 * @param message CryptoRc4Sha1HmacResponse
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: CryptoRc4Sha1HmacResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this CryptoRc4Sha1HmacResponse to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for CryptoRc4Sha1HmacResponse
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MercuryMultiGetRequest. */
export class MercuryMultiGetRequest implements IMercuryMultiGetRequest {
	/**
	 * Constructs a new MercuryMultiGetRequest.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IMercuryMultiGetRequest);

	/** MercuryMultiGetRequest request. */
	public request: IMercuryRequest[];

	/**
	 * Creates a new MercuryMultiGetRequest instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns MercuryMultiGetRequest instance
	 */
	public static create(properties?: IMercuryMultiGetRequest): MercuryMultiGetRequest;

	/**
	 * Encodes the specified MercuryMultiGetRequest message. Does not implicitly {@link MercuryMultiGetRequest.verify|verify} messages.
	 * @param message MercuryMultiGetRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IMercuryMultiGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified MercuryMultiGetRequest message, length delimited. Does not implicitly {@link MercuryMultiGetRequest.verify|verify} messages.
	 * @param message MercuryMultiGetRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IMercuryMultiGetRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a MercuryMultiGetRequest message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns MercuryMultiGetRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): MercuryMultiGetRequest;

	/**
	 * Decodes a MercuryMultiGetRequest message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns MercuryMultiGetRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): MercuryMultiGetRequest;

	/**
	 * Verifies a MercuryMultiGetRequest message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a MercuryMultiGetRequest message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns MercuryMultiGetRequest
	 */
	public static fromObject(object: { [k: string]: any }): MercuryMultiGetRequest;

	/**
	 * Creates a plain object from a MercuryMultiGetRequest message. Also converts values to other types if specified.
	 * @param message MercuryMultiGetRequest
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: MercuryMultiGetRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this MercuryMultiGetRequest to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for MercuryMultiGetRequest
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MercuryMultiGetReply. */
export class MercuryMultiGetReply implements IMercuryMultiGetReply {
	/**
	 * Constructs a new MercuryMultiGetReply.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IMercuryMultiGetReply);

	/** MercuryMultiGetReply reply. */
	public reply: IMercuryReply[];

	/**
	 * Creates a new MercuryMultiGetReply instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns MercuryMultiGetReply instance
	 */
	public static create(properties?: IMercuryMultiGetReply): MercuryMultiGetReply;

	/**
	 * Encodes the specified MercuryMultiGetReply message. Does not implicitly {@link MercuryMultiGetReply.verify|verify} messages.
	 * @param message MercuryMultiGetReply message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IMercuryMultiGetReply, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified MercuryMultiGetReply message, length delimited. Does not implicitly {@link MercuryMultiGetReply.verify|verify} messages.
	 * @param message MercuryMultiGetReply message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IMercuryMultiGetReply, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a MercuryMultiGetReply message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns MercuryMultiGetReply
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): MercuryMultiGetReply;

	/**
	 * Decodes a MercuryMultiGetReply message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns MercuryMultiGetReply
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): MercuryMultiGetReply;

	/**
	 * Verifies a MercuryMultiGetReply message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a MercuryMultiGetReply message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns MercuryMultiGetReply
	 */
	public static fromObject(object: { [k: string]: any }): MercuryMultiGetReply;

	/**
	 * Creates a plain object from a MercuryMultiGetReply message. Also converts values to other types if specified.
	 * @param message MercuryMultiGetReply
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: MercuryMultiGetReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this MercuryMultiGetReply to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for MercuryMultiGetReply
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MercuryRequest. */
export class MercuryRequest implements IMercuryRequest {
	/**
	 * Constructs a new MercuryRequest.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IMercuryRequest);

	/** MercuryRequest uri. */
	public uri: string;

	/** MercuryRequest contentType. */
	public contentType: string;

	/** MercuryRequest body. */
	public body: Uint8Array;

	/** MercuryRequest etag. */
	public etag: Uint8Array;

	/**
	 * Creates a new MercuryRequest instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns MercuryRequest instance
	 */
	public static create(properties?: IMercuryRequest): MercuryRequest;

	/**
	 * Encodes the specified MercuryRequest message. Does not implicitly {@link MercuryRequest.verify|verify} messages.
	 * @param message MercuryRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IMercuryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified MercuryRequest message, length delimited. Does not implicitly {@link MercuryRequest.verify|verify} messages.
	 * @param message MercuryRequest message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IMercuryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a MercuryRequest message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns MercuryRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): MercuryRequest;

	/**
	 * Decodes a MercuryRequest message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns MercuryRequest
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): MercuryRequest;

	/**
	 * Verifies a MercuryRequest message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a MercuryRequest message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns MercuryRequest
	 */
	public static fromObject(object: { [k: string]: any }): MercuryRequest;

	/**
	 * Creates a plain object from a MercuryRequest message. Also converts values to other types if specified.
	 * @param message MercuryRequest
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: MercuryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this MercuryRequest to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for MercuryRequest
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MercuryReply. */
export class MercuryReply implements IMercuryReply {
	/**
	 * Constructs a new MercuryReply.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IMercuryReply);

	/** MercuryReply statusCode. */
	public statusCode: number;

	/** MercuryReply statusMessage. */
	public statusMessage: string;

	/** MercuryReply cachePolicy. */
	public cachePolicy: MercuryReply.CachePolicy;

	/** MercuryReply ttl. */
	public ttl: number;

	/** MercuryReply etag. */
	public etag: Uint8Array;

	/** MercuryReply contentType. */
	public contentType: string;

	/** MercuryReply body. */
	public body: Uint8Array;

	/**
	 * Creates a new MercuryReply instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns MercuryReply instance
	 */
	public static create(properties?: IMercuryReply): MercuryReply;

	/**
	 * Encodes the specified MercuryReply message. Does not implicitly {@link MercuryReply.verify|verify} messages.
	 * @param message MercuryReply message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IMercuryReply, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified MercuryReply message, length delimited. Does not implicitly {@link MercuryReply.verify|verify} messages.
	 * @param message MercuryReply message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IMercuryReply, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a MercuryReply message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns MercuryReply
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): MercuryReply;

	/**
	 * Decodes a MercuryReply message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns MercuryReply
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): MercuryReply;

	/**
	 * Verifies a MercuryReply message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a MercuryReply message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns MercuryReply
	 */
	public static fromObject(object: { [k: string]: any }): MercuryReply;

	/**
	 * Creates a plain object from a MercuryReply message. Also converts values to other types if specified.
	 * @param message MercuryReply
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: MercuryReply, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this MercuryReply to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for MercuryReply
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace MercuryReply {
	/** CachePolicy enum. */
	enum CachePolicy {
		CACHE_NO = 1,
		CACHE_PRIVATE = 2,
		CACHE_PUBLIC = 3,
	}
}

/** Represents a Header. */
export class Header implements IHeader {
	/**
	 * Constructs a new Header.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IHeader);

	/** Header uri. */
	public uri: string;

	/** Header contentType. */
	public contentType: string;

	/** Header method. */
	public method: string;

	/** Header statusCode. */
	public statusCode: number;

	/** Header userFields. */
	public userFields: IUserField[];

	/**
	 * Creates a new Header instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Header instance
	 */
	public static create(properties?: IHeader): Header;

	/**
	 * Encodes the specified Header message. Does not implicitly {@link Header.verify|verify} messages.
	 * @param message Header message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Header message, length delimited. Does not implicitly {@link Header.verify|verify} messages.
	 * @param message Header message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a Header message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Header
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Header;

	/**
	 * Decodes a Header message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Header
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Header;

	/**
	 * Verifies a Header message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a Header message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Header
	 */
	public static fromObject(object: { [k: string]: any }): Header;

	/**
	 * Creates a plain object from a Header message. Also converts values to other types if specified.
	 * @param message Header
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Header to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Header
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a UserField. */
export class UserField implements IUserField {
	/**
	 * Constructs a new UserField.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IUserField);

	/** UserField key. */
	public key: string;

	/** UserField value. */
	public value: Uint8Array;

	/**
	 * Creates a new UserField instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns UserField instance
	 */
	public static create(properties?: IUserField): UserField;

	/**
	 * Encodes the specified UserField message. Does not implicitly {@link UserField.verify|verify} messages.
	 * @param message UserField message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IUserField, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified UserField message, length delimited. Does not implicitly {@link UserField.verify|verify} messages.
	 * @param message UserField message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IUserField, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a UserField message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns UserField
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): UserField;

	/**
	 * Decodes a UserField message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns UserField
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): UserField;

	/**
	 * Verifies a UserField message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a UserField message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns UserField
	 */
	public static fromObject(object: { [k: string]: any }): UserField;

	/**
	 * Creates a plain object from a UserField message. Also converts values to other types if specified.
	 * @param message UserField
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: UserField, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this UserField to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for UserField
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an Artist. */
export class Artist implements IArtist {
	/**
	 * Constructs a new Artist.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IArtist);

	/** Artist gid. */
	public gid: Uint8Array;

	/** Artist name. */
	public name: string;

	/** Artist popularity. */
	public popularity: number;

	/** Artist topTrack. */
	public topTrack: ITopTracks[];

	/** Artist albumGroup. */
	public albumGroup: IAlbumGroup[];

	/** Artist singleGroup. */
	public singleGroup: IAlbumGroup[];

	/** Artist compilationGroup. */
	public compilationGroup: IAlbumGroup[];

	/** Artist appearsOnGroup. */
	public appearsOnGroup: IAlbumGroup[];

	/** Artist genre. */
	public genre: string[];

	/** Artist externalId. */
	public externalId: IExternalId[];

	/** Artist portrait. */
	public portrait: IImage[];

	/** Artist biography. */
	public biography: IBiography[];

	/** Artist activityPeriod. */
	public activityPeriod: IActivityPeriod[];

	/** Artist restriction. */
	public restriction: IRestriction[];

	/** Artist related. */
	public related: IArtist[];

	/** Artist isPortraitAlbumCover. */
	public isPortraitAlbumCover: boolean;

	/** Artist portraitGroup. */
	public portraitGroup?: IImageGroup | null;

	/** Artist salePeriod. */
	public salePeriod: ISalePeriod[];

	/** Artist availability. */
	public availability: IAvailability[];

	/**
	 * Creates a new Artist instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Artist instance
	 */
	public static create(properties?: IArtist): Artist;

	/**
	 * Encodes the specified Artist message. Does not implicitly {@link Artist.verify|verify} messages.
	 * @param message Artist message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IArtist, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Artist message, length delimited. Does not implicitly {@link Artist.verify|verify} messages.
	 * @param message Artist message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IArtist, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an Artist message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Artist
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Artist;

	/**
	 * Decodes an Artist message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Artist
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Artist;

	/**
	 * Verifies an Artist message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an Artist message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Artist
	 */
	public static fromObject(object: { [k: string]: any }): Artist;

	/**
	 * Creates a plain object from an Artist message. Also converts values to other types if specified.
	 * @param message Artist
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Artist, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Artist to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Artist
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an Album. */
export class Album implements IAlbum {
	/**
	 * Constructs a new Album.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IAlbum);

	/** Album gid. */
	public gid: Uint8Array;

	/** Album name. */
	public name: string;

	/** Album artist. */
	public artist: IArtist[];

	/** Album type. */
	public type: Album.Type;

	/** Album label. */
	public label: string;

	/** Album date. */
	public date?: IDate | null;

	/** Album popularity. */
	public popularity: number;

	/** Album genre. */
	public genre: string[];

	/** Album cover. */
	public cover: IImage[];

	/** Album externalId. */
	public externalId: IExternalId[];

	/** Album disc. */
	public disc: IDisc[];

	/** Album review. */
	public review: string[];

	/** Album copyright. */
	public copyright: ICopyright[];

	/** Album restriction. */
	public restriction: IRestriction[];

	/** Album related. */
	public related: IAlbum[];

	/** Album salePeriod. */
	public salePeriod: ISalePeriod[];

	/** Album coverGroup. */
	public coverGroup?: IImageGroup | null;

	/** Album originalTitle. */
	public originalTitle: string;

	/** Album versionTitle. */
	public versionTitle: string;

	/** Album typeStr. */
	public typeStr: string;

	/** Album availability. */
	public availability: IAvailability[];

	/**
	 * Creates a new Album instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Album instance
	 */
	public static create(properties?: IAlbum): Album;

	/**
	 * Encodes the specified Album message. Does not implicitly {@link Album.verify|verify} messages.
	 * @param message Album message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IAlbum, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Album message, length delimited. Does not implicitly {@link Album.verify|verify} messages.
	 * @param message Album message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IAlbum, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an Album message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Album
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Album;

	/**
	 * Decodes an Album message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Album
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Album;

	/**
	 * Verifies an Album message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an Album message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Album
	 */
	public static fromObject(object: { [k: string]: any }): Album;

	/**
	 * Creates a plain object from an Album message. Also converts values to other types if specified.
	 * @param message Album
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Album, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Album to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Album
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Album {
	/** Type enum. */
	enum Type {
		ALBUM = 1,
		SINGLE = 2,
		COMPILATION = 3,
		EP = 4,
		AUDIOBOOK = 5,
		PODCAST = 6,
	}
}

/** Represents a Track. */
export class Track implements ITrack {
	/**
	 * Constructs a new Track.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ITrack);

	/** Track gid. */
	public gid: Uint8Array;

	/** Track name. */
	public name: string;

	/** Track album. */
	public album?: IAlbum | null;

	/** Track artist. */
	public artist: IArtist[];

	/** Track number. */
	public number: number;

	/** Track discNumber. */
	public discNumber: number;

	/** Track duration. */
	public duration: number;

	/** Track popularity. */
	public popularity: number;

	/** Track explicit. */
	public explicit: boolean;

	/** Track externalId. */
	public externalId: IExternalId[];

	/** Track restriction. */
	public restriction: IRestriction[];

	/** Track file. */
	public file: IAudioFile[];

	/** Track alternative. */
	public alternative: ITrack[];

	/** Track salePeriod. */
	public salePeriod: ISalePeriod[];

	/** Track preview. */
	public preview: IAudioFile[];

	/** Track tags. */
	public tags: string[];

	/** Track earliestLiveTimestamp. */
	public earliestLiveTimestamp: number | Long;

	/** Track hasLyrics. */
	public hasLyrics: boolean;

	/** Track availability. */
	public availability: IAvailability[];

	/** Track licensor. */
	public licensor?: ILicensor | null;

	/** Track languageOfPerformance. */
	public languageOfPerformance: string[];

	/** Track contentRating. */
	public contentRating: IContentRating[];

	/** Track originalTitle. */
	public originalTitle: string;

	/** Track versionTitle. */
	public versionTitle: string;

	/** Track artistWithRole. */
	public artistWithRole: IArtistWithRole[];

	/**
	 * Creates a new Track instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Track instance
	 */
	public static create(properties?: ITrack): Track;

	/**
	 * Encodes the specified Track message. Does not implicitly {@link Track.verify|verify} messages.
	 * @param message Track message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ITrack, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Track message, length delimited. Does not implicitly {@link Track.verify|verify} messages.
	 * @param message Track message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ITrack, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a Track message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Track
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Track;

	/**
	 * Decodes a Track message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Track
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Track;

	/**
	 * Verifies a Track message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a Track message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Track
	 */
	public static fromObject(object: { [k: string]: any }): Track;

	/**
	 * Creates a plain object from a Track message. Also converts values to other types if specified.
	 * @param message Track
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Track, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Track to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Track
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an ArtistWithRole. */
export class ArtistWithRole implements IArtistWithRole {
	/**
	 * Constructs a new ArtistWithRole.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IArtistWithRole);

	/** ArtistWithRole artistGid. */
	public artistGid: Uint8Array;

	/** ArtistWithRole artistName. */
	public artistName: string;

	/** ArtistWithRole role. */
	public role: ArtistWithRole.ArtistRole;

	/**
	 * Creates a new ArtistWithRole instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ArtistWithRole instance
	 */
	public static create(properties?: IArtistWithRole): ArtistWithRole;

	/**
	 * Encodes the specified ArtistWithRole message. Does not implicitly {@link ArtistWithRole.verify|verify} messages.
	 * @param message ArtistWithRole message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IArtistWithRole, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ArtistWithRole message, length delimited. Does not implicitly {@link ArtistWithRole.verify|verify} messages.
	 * @param message ArtistWithRole message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IArtistWithRole, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an ArtistWithRole message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ArtistWithRole
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ArtistWithRole;

	/**
	 * Decodes an ArtistWithRole message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ArtistWithRole
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ArtistWithRole;

	/**
	 * Verifies an ArtistWithRole message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an ArtistWithRole message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ArtistWithRole
	 */
	public static fromObject(object: { [k: string]: any }): ArtistWithRole;

	/**
	 * Creates a plain object from an ArtistWithRole message. Also converts values to other types if specified.
	 * @param message ArtistWithRole
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ArtistWithRole, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ArtistWithRole to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ArtistWithRole
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace ArtistWithRole {
	/** ArtistRole enum. */
	enum ArtistRole {
		ARTIST_ROLE_UNKNOWN = 0,
		ARTIST_ROLE_MAIN_ARTIST = 1,
		ARTIST_ROLE_FEATURED_ARTIST = 2,
		ARTIST_ROLE_REMIXER = 3,
		ARTIST_ROLE_ACTOR = 4,
		ARTIST_ROLE_COMPOSER = 5,
		ARTIST_ROLE_CONDUCTOR = 6,
		ARTIST_ROLE_ORCHESTRA = 7,
	}
}

/** Represents a Show. */
export class Show implements IShow {
	/**
	 * Constructs a new Show.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IShow);

	/** Show gid. */
	public gid: Uint8Array;

	/** Show name. */
	public name: string;

	/** Show description. */
	public description: string;

	/** Show deprecatedPopularity. */
	public deprecatedPopularity: number;

	/** Show publisher. */
	public publisher: string;

	/** Show language. */
	public language: string;

	/** Show explicit. */
	public explicit: boolean;

	/** Show coverImage. */
	public coverImage?: IImageGroup | null;

	/** Show episode. */
	public episode: IEpisode[];

	/** Show copyright. */
	public copyright: ICopyright[];

	/** Show restriction. */
	public restriction: IRestriction[];

	/** Show keyword. */
	public keyword: string[];

	/** Show mediaType. */
	public mediaType: Show.MediaType;

	/** Show consumptionOrder. */
	public consumptionOrder: Show.ConsumptionOrder;

	/** Show availability. */
	public availability: IAvailability[];

	/** Show trailerUri. */
	public trailerUri: string;

	/** Show musicAndTalk. */
	public musicAndTalk: boolean;

	/** Show isAudiobook. */
	public isAudiobook: boolean;

	/**
	 * Creates a new Show instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Show instance
	 */
	public static create(properties?: IShow): Show;

	/**
	 * Encodes the specified Show message. Does not implicitly {@link Show.verify|verify} messages.
	 * @param message Show message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IShow, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Show message, length delimited. Does not implicitly {@link Show.verify|verify} messages.
	 * @param message Show message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IShow, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a Show message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Show
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Show;

	/**
	 * Decodes a Show message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Show
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Show;

	/**
	 * Verifies a Show message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a Show message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Show
	 */
	public static fromObject(object: { [k: string]: any }): Show;

	/**
	 * Creates a plain object from a Show message. Also converts values to other types if specified.
	 * @param message Show
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Show, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Show to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Show
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Show {
	/** MediaType enum. */
	enum MediaType {
		MIXED = 0,
		AUDIO = 1,
		VIDEO = 2,
	}

	/** ConsumptionOrder enum. */
	enum ConsumptionOrder {
		SEQUENTIAL = 1,
		EPISODIC = 2,
		RECENT = 3,
	}
}

/** Represents an Episode. */
export class Episode implements IEpisode {
	/**
	 * Constructs a new Episode.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IEpisode);

	/** Episode gid. */
	public gid: Uint8Array;

	/** Episode name. */
	public name: string;

	/** Episode duration. */
	public duration: number;

	/** Episode audio. */
	public audio: IAudioFile[];

	/** Episode description. */
	public description: string;

	/** Episode number. */
	public number: number;

	/** Episode publishTime. */
	public publishTime?: IDate | null;

	/** Episode deprecatedPopularity. */
	public deprecatedPopularity: number;

	/** Episode coverImage. */
	public coverImage?: IImageGroup | null;

	/** Episode language. */
	public language: string;

	/** Episode explicit. */
	public explicit: boolean;

	/** Episode show. */
	public show?: IShow | null;

	/** Episode video. */
	public video: IVideoFile[];

	/** Episode videoPreview. */
	public videoPreview: IVideoFile[];

	/** Episode audioPreview. */
	public audioPreview: IAudioFile[];

	/** Episode restriction. */
	public restriction: IRestriction[];

	/** Episode freezeFrame. */
	public freezeFrame?: IImageGroup | null;

	/** Episode keyword. */
	public keyword: string[];

	/** Episode allowBackgroundPlayback. */
	public allowBackgroundPlayback: boolean;

	/** Episode availability. */
	public availability: IAvailability[];

	/** Episode externalUrl. */
	public externalUrl: string;

	/** Episode type. */
	public type: Episode.EpisodeType;

	/** Episode musicAndTalk. */
	public musicAndTalk: boolean;

	/** Episode contentRating. */
	public contentRating: IContentRating[];

	/** Episode isAudiobookChapter. */
	public isAudiobookChapter: boolean;

	/**
	 * Creates a new Episode instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Episode instance
	 */
	public static create(properties?: IEpisode): Episode;

	/**
	 * Encodes the specified Episode message. Does not implicitly {@link Episode.verify|verify} messages.
	 * @param message Episode message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IEpisode, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Episode message, length delimited. Does not implicitly {@link Episode.verify|verify} messages.
	 * @param message Episode message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IEpisode, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an Episode message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Episode
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Episode;

	/**
	 * Decodes an Episode message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Episode
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Episode;

	/**
	 * Verifies an Episode message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an Episode message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Episode
	 */
	public static fromObject(object: { [k: string]: any }): Episode;

	/**
	 * Creates a plain object from an Episode message. Also converts values to other types if specified.
	 * @param message Episode
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Episode, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Episode to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Episode
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Episode {
	/** EpisodeType enum. */
	enum EpisodeType {
		FULL = 0,
		TRAILER = 1,
		BONUS = 2,
	}
}

/** Represents a Licensor. */
export class Licensor implements ILicensor {
	/**
	 * Constructs a new Licensor.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ILicensor);

	/** Licensor uuid. */
	public uuid: Uint8Array;

	/**
	 * Creates a new Licensor instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Licensor instance
	 */
	public static create(properties?: ILicensor): Licensor;

	/**
	 * Encodes the specified Licensor message. Does not implicitly {@link Licensor.verify|verify} messages.
	 * @param message Licensor message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ILicensor, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Licensor message, length delimited. Does not implicitly {@link Licensor.verify|verify} messages.
	 * @param message Licensor message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ILicensor, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a Licensor message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Licensor
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Licensor;

	/**
	 * Decodes a Licensor message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Licensor
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Licensor;

	/**
	 * Verifies a Licensor message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a Licensor message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Licensor
	 */
	public static fromObject(object: { [k: string]: any }): Licensor;

	/**
	 * Creates a plain object from a Licensor message. Also converts values to other types if specified.
	 * @param message Licensor
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Licensor, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Licensor to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Licensor
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TopTracks. */
export class TopTracks implements ITopTracks {
	/**
	 * Constructs a new TopTracks.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ITopTracks);

	/** TopTracks country. */
	public country: string;

	/** TopTracks track. */
	public track: ITrack[];

	/**
	 * Creates a new TopTracks instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns TopTracks instance
	 */
	public static create(properties?: ITopTracks): TopTracks;

	/**
	 * Encodes the specified TopTracks message. Does not implicitly {@link TopTracks.verify|verify} messages.
	 * @param message TopTracks message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ITopTracks, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified TopTracks message, length delimited. Does not implicitly {@link TopTracks.verify|verify} messages.
	 * @param message TopTracks message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ITopTracks, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a TopTracks message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns TopTracks
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): TopTracks;

	/**
	 * Decodes a TopTracks message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns TopTracks
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): TopTracks;

	/**
	 * Verifies a TopTracks message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a TopTracks message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns TopTracks
	 */
	public static fromObject(object: { [k: string]: any }): TopTracks;

	/**
	 * Creates a plain object from a TopTracks message. Also converts values to other types if specified.
	 * @param message TopTracks
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: TopTracks, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this TopTracks to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for TopTracks
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an ActivityPeriod. */
export class ActivityPeriod implements IActivityPeriod {
	/**
	 * Constructs a new ActivityPeriod.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IActivityPeriod);

	/** ActivityPeriod startYear. */
	public startYear: number;

	/** ActivityPeriod endYear. */
	public endYear: number;

	/** ActivityPeriod decade. */
	public decade: number;

	/**
	 * Creates a new ActivityPeriod instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ActivityPeriod instance
	 */
	public static create(properties?: IActivityPeriod): ActivityPeriod;

	/**
	 * Encodes the specified ActivityPeriod message. Does not implicitly {@link ActivityPeriod.verify|verify} messages.
	 * @param message ActivityPeriod message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IActivityPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ActivityPeriod message, length delimited. Does not implicitly {@link ActivityPeriod.verify|verify} messages.
	 * @param message ActivityPeriod message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IActivityPeriod, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an ActivityPeriod message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ActivityPeriod
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ActivityPeriod;

	/**
	 * Decodes an ActivityPeriod message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ActivityPeriod
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ActivityPeriod;

	/**
	 * Verifies an ActivityPeriod message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an ActivityPeriod message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ActivityPeriod
	 */
	public static fromObject(object: { [k: string]: any }): ActivityPeriod;

	/**
	 * Creates a plain object from an ActivityPeriod message. Also converts values to other types if specified.
	 * @param message ActivityPeriod
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ActivityPeriod, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ActivityPeriod to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ActivityPeriod
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AlbumGroup. */
export class AlbumGroup implements IAlbumGroup {
	/**
	 * Constructs a new AlbumGroup.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IAlbumGroup);

	/** AlbumGroup album. */
	public album: IAlbum[];

	/**
	 * Creates a new AlbumGroup instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns AlbumGroup instance
	 */
	public static create(properties?: IAlbumGroup): AlbumGroup;

	/**
	 * Encodes the specified AlbumGroup message. Does not implicitly {@link AlbumGroup.verify|verify} messages.
	 * @param message AlbumGroup message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IAlbumGroup, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified AlbumGroup message, length delimited. Does not implicitly {@link AlbumGroup.verify|verify} messages.
	 * @param message AlbumGroup message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IAlbumGroup, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an AlbumGroup message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns AlbumGroup
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): AlbumGroup;

	/**
	 * Decodes an AlbumGroup message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns AlbumGroup
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): AlbumGroup;

	/**
	 * Verifies an AlbumGroup message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an AlbumGroup message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns AlbumGroup
	 */
	public static fromObject(object: { [k: string]: any }): AlbumGroup;

	/**
	 * Creates a plain object from an AlbumGroup message. Also converts values to other types if specified.
	 * @param message AlbumGroup
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: AlbumGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this AlbumGroup to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for AlbumGroup
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Date. */
export class Date implements IDate {
	/**
	 * Constructs a new Date.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IDate);

	/** Date year. */
	public year: number;

	/** Date month. */
	public month: number;

	/** Date day. */
	public day: number;

	/** Date hour. */
	public hour: number;

	/** Date minute. */
	public minute: number;

	/**
	 * Creates a new Date instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Date instance
	 */
	public static create(properties?: IDate): Date;

	/**
	 * Encodes the specified Date message. Does not implicitly {@link Date.verify|verify} messages.
	 * @param message Date message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IDate, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Date message, length delimited. Does not implicitly {@link Date.verify|verify} messages.
	 * @param message Date message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IDate, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a Date message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Date
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Date;

	/**
	 * Decodes a Date message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Date
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Date;

	/**
	 * Verifies a Date message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a Date message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Date
	 */
	public static fromObject(object: { [k: string]: any }): Date;

	/**
	 * Creates a plain object from a Date message. Also converts values to other types if specified.
	 * @param message Date
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Date, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Date to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Date
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an Image. */
export class Image implements IImage {
	/**
	 * Constructs a new Image.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IImage);

	/** Image fileId. */
	public fileId: Uint8Array;

	/** Image size. */
	public size: Image.Size;

	/** Image width. */
	public width: number;

	/** Image height. */
	public height: number;

	/**
	 * Creates a new Image instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Image instance
	 */
	public static create(properties?: IImage): Image;

	/**
	 * Encodes the specified Image message. Does not implicitly {@link Image.verify|verify} messages.
	 * @param message Image message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IImage, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Image message, length delimited. Does not implicitly {@link Image.verify|verify} messages.
	 * @param message Image message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IImage, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an Image message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Image
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Image;

	/**
	 * Decodes an Image message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Image
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Image;

	/**
	 * Verifies an Image message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an Image message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Image
	 */
	public static fromObject(object: { [k: string]: any }): Image;

	/**
	 * Creates a plain object from an Image message. Also converts values to other types if specified.
	 * @param message Image
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Image to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Image
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Image {
	/** Size enum. */
	enum Size {
		DEFAULT = 0,
		SMALL = 1,
		LARGE = 2,
		XLARGE = 3,
	}
}

/** Represents an ImageGroup. */
export class ImageGroup implements IImageGroup {
	/**
	 * Constructs a new ImageGroup.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IImageGroup);

	/** ImageGroup image. */
	public image: IImage[];

	/**
	 * Creates a new ImageGroup instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ImageGroup instance
	 */
	public static create(properties?: IImageGroup): ImageGroup;

	/**
	 * Encodes the specified ImageGroup message. Does not implicitly {@link ImageGroup.verify|verify} messages.
	 * @param message ImageGroup message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IImageGroup, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ImageGroup message, length delimited. Does not implicitly {@link ImageGroup.verify|verify} messages.
	 * @param message ImageGroup message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IImageGroup, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an ImageGroup message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ImageGroup
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ImageGroup;

	/**
	 * Decodes an ImageGroup message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ImageGroup
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ImageGroup;

	/**
	 * Verifies an ImageGroup message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an ImageGroup message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ImageGroup
	 */
	public static fromObject(object: { [k: string]: any }): ImageGroup;

	/**
	 * Creates a plain object from an ImageGroup message. Also converts values to other types if specified.
	 * @param message ImageGroup
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ImageGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ImageGroup to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ImageGroup
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Biography. */
export class Biography implements IBiography {
	/**
	 * Constructs a new Biography.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IBiography);

	/** Biography text. */
	public text: string;

	/** Biography portrait. */
	public portrait: IImage[];

	/** Biography portraitGroup. */
	public portraitGroup: IImageGroup[];

	/**
	 * Creates a new Biography instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Biography instance
	 */
	public static create(properties?: IBiography): Biography;

	/**
	 * Encodes the specified Biography message. Does not implicitly {@link Biography.verify|verify} messages.
	 * @param message Biography message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IBiography, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Biography message, length delimited. Does not implicitly {@link Biography.verify|verify} messages.
	 * @param message Biography message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IBiography, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a Biography message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Biography
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Biography;

	/**
	 * Decodes a Biography message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Biography
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Biography;

	/**
	 * Verifies a Biography message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a Biography message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Biography
	 */
	public static fromObject(object: { [k: string]: any }): Biography;

	/**
	 * Creates a plain object from a Biography message. Also converts values to other types if specified.
	 * @param message Biography
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Biography, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Biography to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Biography
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Disc. */
export class Disc implements IDisc {
	/**
	 * Constructs a new Disc.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IDisc);

	/** Disc number. */
	public number: number;

	/** Disc name. */
	public name: string;

	/** Disc track. */
	public track: ITrack[];

	/**
	 * Creates a new Disc instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Disc instance
	 */
	public static create(properties?: IDisc): Disc;

	/**
	 * Encodes the specified Disc message. Does not implicitly {@link Disc.verify|verify} messages.
	 * @param message Disc message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IDisc, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Disc message, length delimited. Does not implicitly {@link Disc.verify|verify} messages.
	 * @param message Disc message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IDisc, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a Disc message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Disc
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Disc;

	/**
	 * Decodes a Disc message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Disc
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Disc;

	/**
	 * Verifies a Disc message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a Disc message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Disc
	 */
	public static fromObject(object: { [k: string]: any }): Disc;

	/**
	 * Creates a plain object from a Disc message. Also converts values to other types if specified.
	 * @param message Disc
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Disc, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Disc to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Disc
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Copyright. */
export class Copyright implements ICopyright {
	/**
	 * Constructs a new Copyright.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ICopyright);

	/** Copyright type. */
	public type: Copyright.Type;

	/** Copyright text. */
	public text: string;

	/**
	 * Creates a new Copyright instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Copyright instance
	 */
	public static create(properties?: ICopyright): Copyright;

	/**
	 * Encodes the specified Copyright message. Does not implicitly {@link Copyright.verify|verify} messages.
	 * @param message Copyright message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ICopyright, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Copyright message, length delimited. Does not implicitly {@link Copyright.verify|verify} messages.
	 * @param message Copyright message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ICopyright, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a Copyright message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Copyright
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Copyright;

	/**
	 * Decodes a Copyright message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Copyright
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Copyright;

	/**
	 * Verifies a Copyright message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a Copyright message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Copyright
	 */
	public static fromObject(object: { [k: string]: any }): Copyright;

	/**
	 * Creates a plain object from a Copyright message. Also converts values to other types if specified.
	 * @param message Copyright
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Copyright, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Copyright to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Copyright
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Copyright {
	/** Type enum. */
	enum Type {
		P = 0,
		C = 1,
	}
}

/** Represents a Restriction. */
export class Restriction implements IRestriction {
	/**
	 * Constructs a new Restriction.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IRestriction);

	/** Restriction catalogue. */
	public catalogue: Restriction.Catalogue[];

	/** Restriction type. */
	public type: Restriction.Type;

	/** Restriction catalogueStr. */
	public catalogueStr: string[];

	/** Restriction countriesAllowed. */
	public countriesAllowed?: string | null;

	/** Restriction countriesForbidden. */
	public countriesForbidden?: string | null;

	/** Restriction countryRestriction. */
	public countryRestriction?: "countriesAllowed" | "countriesForbidden";

	/**
	 * Creates a new Restriction instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Restriction instance
	 */
	public static create(properties?: IRestriction): Restriction;

	/**
	 * Encodes the specified Restriction message. Does not implicitly {@link Restriction.verify|verify} messages.
	 * @param message Restriction message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IRestriction, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Restriction message, length delimited. Does not implicitly {@link Restriction.verify|verify} messages.
	 * @param message Restriction message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IRestriction, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a Restriction message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Restriction
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Restriction;

	/**
	 * Decodes a Restriction message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Restriction
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Restriction;

	/**
	 * Verifies a Restriction message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a Restriction message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Restriction
	 */
	public static fromObject(object: { [k: string]: any }): Restriction;

	/**
	 * Creates a plain object from a Restriction message. Also converts values to other types if specified.
	 * @param message Restriction
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Restriction, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Restriction to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Restriction
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Restriction {
	/** Catalogue enum. */
	enum Catalogue {
		AD = 0,
		SUBSCRIPTION = 1,
		CATALOGUE_ALL = 2,
		SHUFFLE = 3,
		COMMERCIAL = 4,
	}

	/** Type enum. */
	enum Type {
		STREAMING = 0,
	}
}

/** Represents an Availability. */
export class Availability implements IAvailability {
	/**
	 * Constructs a new Availability.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IAvailability);

	/** Availability catalogueStr. */
	public catalogueStr: string[];

	/** Availability start. */
	public start?: IDate | null;

	/**
	 * Creates a new Availability instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns Availability instance
	 */
	public static create(properties?: IAvailability): Availability;

	/**
	 * Encodes the specified Availability message. Does not implicitly {@link Availability.verify|verify} messages.
	 * @param message Availability message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IAvailability, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified Availability message, length delimited. Does not implicitly {@link Availability.verify|verify} messages.
	 * @param message Availability message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IAvailability, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an Availability message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns Availability
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): Availability;

	/**
	 * Decodes an Availability message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns Availability
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): Availability;

	/**
	 * Verifies an Availability message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an Availability message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns Availability
	 */
	public static fromObject(object: { [k: string]: any }): Availability;

	/**
	 * Creates a plain object from an Availability message. Also converts values to other types if specified.
	 * @param message Availability
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: Availability, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this Availability to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for Availability
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SalePeriod. */
export class SalePeriod implements ISalePeriod {
	/**
	 * Constructs a new SalePeriod.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: ISalePeriod);

	/** SalePeriod restriction. */
	public restriction: IRestriction[];

	/** SalePeriod start. */
	public start?: IDate | null;

	/** SalePeriod end. */
	public end?: IDate | null;

	/**
	 * Creates a new SalePeriod instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns SalePeriod instance
	 */
	public static create(properties?: ISalePeriod): SalePeriod;

	/**
	 * Encodes the specified SalePeriod message. Does not implicitly {@link SalePeriod.verify|verify} messages.
	 * @param message SalePeriod message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: ISalePeriod, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified SalePeriod message, length delimited. Does not implicitly {@link SalePeriod.verify|verify} messages.
	 * @param message SalePeriod message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: ISalePeriod, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a SalePeriod message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns SalePeriod
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): SalePeriod;

	/**
	 * Decodes a SalePeriod message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns SalePeriod
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): SalePeriod;

	/**
	 * Verifies a SalePeriod message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a SalePeriod message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns SalePeriod
	 */
	public static fromObject(object: { [k: string]: any }): SalePeriod;

	/**
	 * Creates a plain object from a SalePeriod message. Also converts values to other types if specified.
	 * @param message SalePeriod
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: SalePeriod, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this SalePeriod to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for SalePeriod
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an ExternalId. */
export class ExternalId implements IExternalId {
	/**
	 * Constructs a new ExternalId.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IExternalId);

	/** ExternalId type. */
	public type: string;

	/** ExternalId id. */
	public id: string;

	/**
	 * Creates a new ExternalId instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ExternalId instance
	 */
	public static create(properties?: IExternalId): ExternalId;

	/**
	 * Encodes the specified ExternalId message. Does not implicitly {@link ExternalId.verify|verify} messages.
	 * @param message ExternalId message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IExternalId, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ExternalId message, length delimited. Does not implicitly {@link ExternalId.verify|verify} messages.
	 * @param message ExternalId message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IExternalId, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an ExternalId message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ExternalId
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ExternalId;

	/**
	 * Decodes an ExternalId message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ExternalId
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ExternalId;

	/**
	 * Verifies an ExternalId message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an ExternalId message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ExternalId
	 */
	public static fromObject(object: { [k: string]: any }): ExternalId;

	/**
	 * Creates a plain object from an ExternalId message. Also converts values to other types if specified.
	 * @param message ExternalId
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ExternalId, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ExternalId to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ExternalId
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an AudioFile. */
export class AudioFile implements IAudioFile {
	/**
	 * Constructs a new AudioFile.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IAudioFile);

	/** AudioFile fileId. */
	public fileId: Uint8Array;

	/** AudioFile format. */
	public format: AudioFile.Format;

	/**
	 * Creates a new AudioFile instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns AudioFile instance
	 */
	public static create(properties?: IAudioFile): AudioFile;

	/**
	 * Encodes the specified AudioFile message. Does not implicitly {@link AudioFile.verify|verify} messages.
	 * @param message AudioFile message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IAudioFile, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified AudioFile message, length delimited. Does not implicitly {@link AudioFile.verify|verify} messages.
	 * @param message AudioFile message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IAudioFile, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes an AudioFile message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns AudioFile
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): AudioFile;

	/**
	 * Decodes an AudioFile message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns AudioFile
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): AudioFile;

	/**
	 * Verifies an AudioFile message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates an AudioFile message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns AudioFile
	 */
	public static fromObject(object: { [k: string]: any }): AudioFile;

	/**
	 * Creates a plain object from an AudioFile message. Also converts values to other types if specified.
	 * @param message AudioFile
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: AudioFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this AudioFile to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for AudioFile
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace AudioFile {
	/** Format enum. */
	enum Format {
		OGG_VORBIS_96 = 0,
		OGG_VORBIS_160 = 1,
		OGG_VORBIS_320 = 2,
		MP3_256 = 3,
		MP3_320 = 4,
		MP3_160 = 5,
		MP3_96 = 6,
		MP3_160_ENC = 7,
		AAC_24 = 8,
		AAC_48 = 9,
		FLAC_FLAC = 16,
	}
}

/** Represents a VideoFile. */
export class VideoFile implements IVideoFile {
	/**
	 * Constructs a new VideoFile.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IVideoFile);

	/** VideoFile fileId. */
	public fileId: Uint8Array;

	/**
	 * Creates a new VideoFile instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns VideoFile instance
	 */
	public static create(properties?: IVideoFile): VideoFile;

	/**
	 * Encodes the specified VideoFile message. Does not implicitly {@link VideoFile.verify|verify} messages.
	 * @param message VideoFile message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IVideoFile, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified VideoFile message, length delimited. Does not implicitly {@link VideoFile.verify|verify} messages.
	 * @param message VideoFile message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IVideoFile, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a VideoFile message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns VideoFile
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): VideoFile;

	/**
	 * Decodes a VideoFile message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns VideoFile
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): VideoFile;

	/**
	 * Verifies a VideoFile message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a VideoFile message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns VideoFile
	 */
	public static fromObject(object: { [k: string]: any }): VideoFile;

	/**
	 * Creates a plain object from a VideoFile message. Also converts values to other types if specified.
	 * @param message VideoFile
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: VideoFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this VideoFile to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for VideoFile
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ContentRating. */
export class ContentRating implements IContentRating {
	/**
	 * Constructs a new ContentRating.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IContentRating);

	/** ContentRating country. */
	public country: string;

	/** ContentRating tag. */
	public tag: string[];

	/**
	 * Creates a new ContentRating instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns ContentRating instance
	 */
	public static create(properties?: IContentRating): ContentRating;

	/**
	 * Encodes the specified ContentRating message. Does not implicitly {@link ContentRating.verify|verify} messages.
	 * @param message ContentRating message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IContentRating, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified ContentRating message, length delimited. Does not implicitly {@link ContentRating.verify|verify} messages.
	 * @param message ContentRating message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IContentRating, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a ContentRating message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns ContentRating
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): ContentRating;

	/**
	 * Decodes a ContentRating message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns ContentRating
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): ContentRating;

	/**
	 * Verifies a ContentRating message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a ContentRating message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns ContentRating
	 */
	public static fromObject(object: { [k: string]: any }): ContentRating;

	/**
	 * Creates a plain object from a ContentRating message. Also converts values to other types if specified.
	 * @param message ContentRating
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: ContentRating, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this ContentRating to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for ContentRating
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a StorageResolveResponse. */
export class StorageResolveResponse implements IStorageResolveResponse {
	/**
	 * Constructs a new StorageResolveResponse.
	 * @param [properties] Properties to set
	 */
	constructor(properties?: IStorageResolveResponse);

	/** StorageResolveResponse result. */
	public result: StorageResolveResponse.Result;

	/** StorageResolveResponse cdnurl. */
	public cdnurl: string[];

	/** StorageResolveResponse fileid. */
	public fileid: Uint8Array;

	/**
	 * Creates a new StorageResolveResponse instance using the specified properties.
	 * @param [properties] Properties to set
	 * @returns StorageResolveResponse instance
	 */
	public static create(properties?: IStorageResolveResponse): StorageResolveResponse;

	/**
	 * Encodes the specified StorageResolveResponse message. Does not implicitly {@link StorageResolveResponse.verify|verify} messages.
	 * @param message StorageResolveResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encode(message: IStorageResolveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Encodes the specified StorageResolveResponse message, length delimited. Does not implicitly {@link StorageResolveResponse.verify|verify} messages.
	 * @param message StorageResolveResponse message or plain object to encode
	 * @param [writer] Writer to encode to
	 * @returns Writer
	 */
	public static encodeDelimited(message: IStorageResolveResponse, writer?: $protobuf.Writer): $protobuf.Writer;

	/**
	 * Decodes a StorageResolveResponse message from the specified reader or buffer.
	 * @param reader Reader or buffer to decode from
	 * @param [length] Message length if known beforehand
	 * @returns StorageResolveResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decode(reader: $protobuf.Reader | Uint8Array, length?: number): StorageResolveResponse;

	/**
	 * Decodes a StorageResolveResponse message from the specified reader or buffer, length delimited.
	 * @param reader Reader or buffer to decode from
	 * @returns StorageResolveResponse
	 * @throws {Error} If the payload is not a reader or valid buffer
	 * @throws {$protobuf.util.ProtocolError} If required fields are missing
	 */
	public static decodeDelimited(reader: $protobuf.Reader | Uint8Array): StorageResolveResponse;

	/**
	 * Verifies a StorageResolveResponse message.
	 * @param message Plain object to verify
	 * @returns `null` if valid, otherwise the reason why it is not
	 */
	public static verify(message: { [k: string]: any }): string | null;

	/**
	 * Creates a StorageResolveResponse message from a plain object. Also converts values to their respective internal types.
	 * @param object Plain object
	 * @returns StorageResolveResponse
	 */
	public static fromObject(object: { [k: string]: any }): StorageResolveResponse;

	/**
	 * Creates a plain object from a StorageResolveResponse message. Also converts values to other types if specified.
	 * @param message StorageResolveResponse
	 * @param [options] Conversion options
	 * @returns Plain object
	 */
	public static toObject(message: StorageResolveResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

	/**
	 * Converts this StorageResolveResponse to JSON.
	 * @returns JSON object
	 */
	public toJSON(): { [k: string]: any };

	/**
	 * Gets the default type url for StorageResolveResponse
	 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
	 * @returns The default type url
	 */
	public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace StorageResolveResponse {
	/** Result enum. */
	enum Result {
		CDN = 0,
		STORAGE = 1,
		RESTRICTED = 3,
	}
}
