//import { clientID } from "./Spotify.config";
//import { redirectUrl } from "./Spotify.config";

let accessToken;
const clientID = '3e9e90bf1d574d6a964f851e00addc46';
//const redirectUrl = 'https://scottkennethjackson-mixtape.vercel.app/';
const redirectUrl = 'http://localhost:3001/';

const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken;

        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenInURL && expiryTime) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);

            window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
            window.history.pushState('Access token', null, '/');

            return accessToken;
        };

        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
        window.location = redirect;
    },

    search(term) {
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        .then((response) => response.json())
        .then((jsonResponse) => {
            if (!jsonResponse) {
                console.error('Response error');
            }

            return jsonResponse.tracks.items.map((t) => ({
                id: t.id,
                name: t.name,
                artist: t.artists[0].name,
                album: t.album.name,
                uri: t.uri,
                artwork: t.album.images[0].url
            }));
        });
    },

    savePlaylist(name, trackURIs) {
        if (!name || !trackURIs) return;

        const aToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${aToken}` };
        let userID;

        return fetch('https://api.spotify.com/v1/me', { headers: header })
        .then(response => response.json())
        .then((jsonResponse) => {
            userID = jsonResponse.id;
            let playlistID;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
                headers: header,
                method: 'POST',
                body: JSON.stringify({name: name})
            })
            .then((response) => response.json())
            .then((jsonResponse) => {
                playlistID = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
                    headers: header,
                    method: 'POST',
                    body: JSON.stringify({uris: trackURIs})
                });
            });
        });
    }
};

export { Spotify };