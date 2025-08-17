import { Readable, Transform } from "stream";
import { SPClient } from "./SPClient";
import { queue } from "async";

export const BASE62_CHARS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// @ts-ignore
BigInt.prototype.toJSON = function () {
	return Number(this);
};

export enum SpotifyItemTypes {
	Album = "album",
	Artist = "artist",
	Episode = "episode",
	Playlist = "playlist",
	Show = "show",
	Track = "track",
	Local = "local",
	Unknown = "unknown",
}

export class SpotifyId {
	constructor(public id: bigint, public type: SpotifyItemTypes) { }

	static fromBase16(str: string, type: SpotifyItemTypes) {
		let id = BigInt("0x" + str);
		return new SpotifyId(id, type);
	}

	static fromBase62(str: string, type: SpotifyItemTypes) {
		let id = BigInt("0");
		for (let i = 0; i < str.length; i++) {
			let index = BASE62_CHARS.indexOf(str[i]);
			id = id * BigInt(62) + BigInt(index);
		}
		return new SpotifyId(id, type);
	}

	toBytes() {
		let result = new Uint8Array(16);
		let i = 0;
		let id = this.id;
		while (id > 0) {
			result[i] = Number(id % 256n);
			id = id / 256n;
			i += 1;
		}
		return Buffer.from(result.reverse());
	}

	toBase16() {
		return this.id.toString(16).padStart(32, "0");
	}

	toBase62() {
		let id = this.id;
		let str = "";
		while (id > 0) {
			let index = Number(id % BigInt(62));
			str = BASE62_CHARS[index] + str;
			id = id / BigInt(62);
		}
		return str.padStart(22, "0");
	}

	toUri() {
		let type = this.type;
		let base62 = this.toBase62();
		return `spotify:${type}:${base62}`;
	}

	static from(uri: string) {
		if (!uri.includes("spotify:")) uri = "spotify:" + uri;
		let [type, base62] = uri.split(":").slice(1);

		let id = SpotifyId.fromBase62(base62, type as SpotifyItemTypes);
		return id;
	}
}

export class FileId {
	constructor(public bytes: Buffer) { }

	toBase16() {
		return this.bytes.toString("hex");
	}

	static from(id: string) {
		return new FileId(Buffer.from(id, "hex"));
	}
}

export interface ProductInfo {
	type: string;
	"ab-ad-player-targeting": number;
	"ab-ad-requester": number;
	"ab-android-push-notifications": number;
	"ab-browse-music-tuesday": number;
	"ab-collection-bookmark-model": number;
	"ab-collection-followed-artists-only": number;
	"ab-collection-hide-unavailable-albums": number;
	"ab-collection-offline-mode": number;
	"ab-collection-union": number;
	"ab-desktop-hide-follow": number;
	"ab-desktop-playlist-annotation-edit": number;
	"ab-mobile-discover": number;
	"ab-mobile-running-onlymanualmode": string;
	"ab-mobile-running-tempo-detection": string;
	"ab-mobile-social-feed": number;
	"ab-mobile-startpage": number;
	"ab-moments-experience": number;
	"ab-new-share-flow": number;
	"ab-play-history": number;
	"ab-playlist-extender": number;
	"ab-sugarpills-sanity-check": number;
	"ab-test-group": number;
	"ab-watch-now": number;
	ab_recently_played_feature_time_filter_threshold: string;
	"ad-catalogues": string;
	"ad-formats-preroll-video": number;
	"ad-formats-video-takeover": number;
	"ad-persist-reward-time": number;
	"ad-session-persistence": number;
	"ad-use-adlogic": string;
	"addon-hifi": number;
	ads: number;
	"allow-override-internal-prefs": number;
	"ap-resolve-pods": number;
	"app-developer": number;
	arsenal_country: number;
	"audio-preview-url-template": string;
	"audio-quality": number;
	"audiobook-onboarding-completed": number;
	"audiobook-onboarding-dismissed": number;
	autoplay: number;
	"backend-advised-bitrate": number;
	"browse-overview-enabled": number;
	"buffering-strategy": number;
	"buffering-strategy-parameters": string;
	"capper-profile": string;
	"capping-bar-threshold": number;
	catalogue: string;
	collection: number;
	created_by_partner: string;
	"employee-free-opt-in": number;
	"enable-annotations": number;
	"enable-annotations-read": number;
	"enable-autostart": number;
	"enable-crossfade": number;
	"enable-gapless": number;
	expiry: number;
	"explicit-content": number;
	"fb-grant-permission-local-render": number;
	"fb-info-confirmation": string;
	"financial-product": string;
	"head-file-caching": number;
	"head-files": number;
	"head-files-url": string;
	"hifi-eligible": number;
	"hifi-optin-intent": number;
	"high-bitrate": number;
	"image-url": string;
	incognito_mode_timeout: number;
	"india-experience": number;
	"instant-search": number;
	"instant-search-expand-sidebar": number;
	is_email_verified: number;
	"key-caching-auto-offline": number;
	"key-caching-max-count": number;
	"key-caching-max-offline-seconds": number;
	"key-memory-cache-mode": string;
	"lastfm-session": string;
	libspotify: number;
	"license-acceptance-grace-days": number;
	"license-agreements": string;
	"local-files-import": number;
	"metadata-link-lookup-modes": number;
	mobile: number;
	"mobile-browse": number;
	"mobile-login": number;
	"mobile-payment": number;
	name: string;
	"network-operator-premium-activation": number;
	"nft-disabled": number;
	offline: number;
	"on-demand": number;
	"pause-after": number;
	"payments-locked-state": number;
	"player-license": string;
	"playlist-annotations-markup": number;
	"playlist-folders": number;
	"preferred-locale": string;
	"prefetch-keys": number;
	"prefetch-strategy": number;
	"prefetch-window-max": number;
	"profile-image-upload": number;
	"publish-activity": number;
	"publish-playlist": number;
	radio: number;
	"remote-control": number;
	"request-time": number;
	"send-email": number;
	"shows-collection": number;
	"shows-collection-jam": number;
	shuffle: number;
	"shuffle-algorithm": number;
	"sidebar-navigation-enabled": number;
	"storage-size-config": string;
	streaming: number;
	"streaming-rules": string;
	"track-cap": number;
	"ugc-abuse-report": number;
	"ugc-abuse-report-url": string;
	"use-fb-publish-backend": number;
	"use-pl3": number;
	"use-playlist-app": number;
	"use-playlist-uris": number;
	"user-profile-show-invitation-codes": number;
	"video-cdn-sampling": number;
	"video-device-blacklisted": number;
	"video-initial-bitrate": number;
	"video-keyframe-url": string;
	"video-manifest-url": string;
	"video-wifi-initial-bitrate": number;
	"wanted-licenses": string;
	"widevine-license-url": string;
}

export function skipStream(toSkip: number, stream: Readable) {
	const transformer = new Transform({
		transform(chunk, encoding, callback) {
			if (toSkip > 0) {
				if (chunk.length > toSkip) {
					this.push(chunk.slice(toSkip));
					toSkip = 0;
				} else {
					toSkip -= chunk.length;
				}
			} else {
				this.push(chunk);
			}

			callback();
		},
	});

	stream.pipe(transformer);
	return transformer
}

export function normalizePath(path: string) {
	return path.replace(/[/\\?%*:|"<>]/g, "-").slice(0, 50);
}

export async function ListWorker(
	opts: {
		client: SPClient; id: SpotifyId; delay?: number; concurrency?: number; offset?: number,
	},
	cb: (item: any, name: string) => Promise<any>,
) {
	var offset = opts.offset ?? 0;
	const delay = opts.delay ?? 1000;
	const concurrency = opts.concurrency ?? 1;
	let name = "";


	async function work(el: any, tries = 1) {
		try {
			if (el.playability?.playable !== true) return;
			if (await cb(el, name) === false) return
			await sleep(delay);
		} catch (error) {
			console.log("error", (error as any)?.message);
			await sleep(delay * tries + 1000);
			await work(el, tries + 1)
		}
	}

	const q = queue(async (el) => await work(el, 1), concurrency);

	do {
		var { tracks, name: newName } = await opts.client.fetchList2(opts.id, { offset, limit: 100 });
		name = newName;

		q.push(tracks);
		offset += tracks.length;
		await q.drain();
	} while (tracks.length > 0);
}
