# Missing DRM Enforcement in Spotify’s Accesspoint API: Proof of Concept Report

This report details a flaw in Spotify's Accesspoint API, which allows any user with a valid Spotify account to download and decrypt songs without any Digital Rights Management (DRM) enforcement.

This vulnerability was reported to Spotify both in January 2020 (by another researcher) and again by myself in August 2023. For more than 5 years no action has been taken to address or fix the issue.

After exhausting all responsible disclosure options, I feel it’s necessary to make this information public in the hope that it will finally prompt Spotify to take action and implement proper security measures.

## Demo

<video src="./out.mp4" width="640" height="360" controls muted="false">
</video

## [Proof of concept](./src/examples/download.ts)

## Report:

Spotifys Accesspoint api does not enforce any Digital Rights Management (DRM) system to request and decrypt songs, apart from requiring a valid Spotify account (free or premium).
This allows any spotify user to download and decrypt songs from Spotify without verifying the system's integrity via DRM.

The following report describes the process of downloading and decrypting songs from Spotify without using any DRM system:

1.  Connect to Spotifys Accesspoint tcp api
2.  Setup the transport layer encryption

    - generate random ephemeral Diffie–Hellman keys
    - send a ClientHello message with the ephemeral public key
    - wait for the APResponseMessage that contains the remote public key
    - calculate a shared Diffie–Hellman key via the ephemeral private key and the remote public key
    - use the previously sent ClientHello/APResponseMessage and the shared key to derive symmetric send/receive keys and a HMAC hash
    - sent the HMAC hash as ClientResponsePlaintext message
    - use the derived symmetric send/receive keys to setup Shannon ciphers for further communication

3.  Authentication

    - Authenticate by sending a ClientResponseEncrypted message with the username and password of a valid Spotify account (can be premium or free)
    - Wait for the APWelcome message to indicate successful authentication
    - send a MercuryRequest message with the following uri `hm://keymaster/token/authenticated?scope=playlist-read&client_id=65b708073fc0480ea92a077233ca87bd&device_id=00000000-0000-0000-0000-000000000000` where client_id is the permanent client id of the official Spotify client and device_id is any random uuid
    - wait for the MercuryReply message that contains the ephemeral access token that is valid for 1 hour

4.  Download song

    - Send a HTTP request to the url `https://spclient.wg.spotify.com/metadata/4/track/<track_id>` with the ephemeral access token as the Authorization header and `track_id` of the desired track
    - The response JSON object has an array `file` with different URLs to download the track
    - Download the file with the desired bitrate and codec from one of the URLs
    - Note: The file urls are valid for a limited time and each file is encrypted with a different AES 128 CTR key
    - Note: free accounts can only download files with a maximum bitrate of 160kbps

5.  Decryption

    - Request the decryption key from the Accesspoint api by sending a RequestKey message with the `track_id` and `file_id` of the downloaded track
    - Wait for the KeyResponse message that contains the decryption key
    - Decrypt the downloaded file with the AES 128 CTR decryption key

The decrypted track can then be played with any media player that supports the codec of the downloaded file.

### Conclusion:

In contrary to the web player, which uses the Widevine DRM system to verify the integrity of the client and only allows playback of songs in the web player.
The Accesspoint/SPClient api does not use any DRM system to verify the integrity of the client.
The only necessary information to download and decrypt songs is the track id and a valid Spotify account, which can be registered for free by anyone.
