import fs from "fs";
import { SPClient } from "../SPClient";
import { SpotifyId } from "../Util";

async function main() {
	const config = require("../../config.json");

	const client = new SPClient(config);
	client.on("credentials", async () => {
		fs.writeFileSync(__dirname + "/../../config.json", JSON.stringify(client, null, "\t"));
	});

	await client.connect();
	console.log("ready");

	const playlistId = SpotifyId.from("spotify:track:4PTG3Z6ehGkBFwjybzWkR8");
	// https://open.spotify.com/track/2rTYgHxgcndkUrRoU7x0Sv?si=b60562ddd8744cad

	const out = fs.createWriteStream(__dirname + "/../../out.ogg");

	const song = await client.fetchSong(playlistId);
	console.log(song.metadata.file);
	console.log("writing to out.ogg");
	song.stream.pipe(out);
	song.stream.on("end", () => {
		console.log("done");
	});

	process.once("SIGINT", () => {
		client.disconnect();
		process.exit();
	});
}

process.on("uncaughtException", console.log);
process.on("unhandledRejection", console.log);

main().catch(console.log);
