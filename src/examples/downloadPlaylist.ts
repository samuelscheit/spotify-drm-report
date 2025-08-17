import fs from "fs";
import { SPClient } from "../SPClient";
import { ListWorker, SpotifyId, normalizePath } from "../Util";
import { dirname } from "path";

async function main() {
	const config = require("../../config.json");

	const client = new SPClient(config);
	client.on("credentials", async () => {
		fs.writeFileSync(__dirname + "/../../config.json", JSON.stringify(client, null, "\t"));
	});

	await client.connect();
	console.log("ready");

	const ids = [
		"spotify:album:5H7ixXZfsNMGbIE5OBSpcb",
	]

	for (const id of ids) {
		const playlistId = SpotifyId.from(id);
		const playlistPath = __dirname + "/../../playlist/";
		fs.mkdirSync(playlistPath, { recursive: true });

		await ListWorker({ client, id: playlistId, offset: 0, delay: 30000, concurrency: 1 }, async (item, name) => {
			const path = playlistPath + normalizePath(name) + "/" + normalizePath(item.name) + ".ogg"
			const dir = dirname(path)
			if (!fs.existsSync(dir)) {
				fs.mkdirSync(dir, { recursive: true });
			}

			if (fs.existsSync(path)) {
				return false
			}

			console.log("downloading", item.name);
			const id = SpotifyId.from(item.uri);
			const { file, metadata, stream } = await client.fetchSong(id, "ogg");

			stream.pipe(fs.createWriteStream(path));
		});

	}


	console.log("done");

	process.once("SIGINT", () => {
		client.disconnect();
		process.exit();
	});
}

process.on("uncaughtException", console.log);
process.on("unhandledRejection", console.log);

main().catch(console.log);
