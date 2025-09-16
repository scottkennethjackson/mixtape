const clientID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken;

        if (typeof window == "undefined") return;

        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenInURL && expiryTime) {
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);

            window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
            window.history.pushState('Access token', null, '/');

            return accessToken;
        } else {
            const scopes = ["playlist-modify-public"];
            const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=${encodeURIComponent(
              scopes.join(" ")
            )}&redirect_uri=${encodeURIComponent(redirectUri)}`;

            window.location = authUrl;
        }
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
