import fs from "fs";
import { SPClient } from "../SPClient";
import { PlaylistWorker, SpotifyId, normalizePath } from "../Util";

async function main() {
	const config = require("../../config.json");

	const client = new SPClient(config);
	client.on("credentials", async () => {
		fs.writeFileSync(__dirname + "/../../config.json", JSON.stringify(client, null, "\t"));
	});

	await client.connect();
	console.log("ready");

	const playlistId = SpotifyId.from("spotify:playlist:4g423PZgeW6HCmHJlOUvc1");
	const playlistPath = __dirname + "/../../playlist/";
	fs.mkdirSync(playlistPath, { recursive: true });

	await PlaylistWorker({ client, playlistId, offset: 0, delay: 0, concurrency: 10 }, async (item) => {
		console.log(item.name);

		const id = SpotifyId.from(item.uri);
		const { file, metadata, stream } = await client.fetchSong(id);

		stream.pipe(fs.createWriteStream(playlistPath + normalizePath(metadata.name) + ".ogg"));
	});

	console.log("done");

	process.once("SIGINT", () => {
		client.disconnect();
		process.exit();
	});
}

process.on("uncaughtException", console.log);
process.on("unhandledRejection", console.log);

main().catch(console.log);
