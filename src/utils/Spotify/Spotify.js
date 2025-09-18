const clientID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) return accessToken;
        if (typeof window === "undefined") return;

        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        if (tokenInURL && expiryTime) {
          accessToken = tokenInURL[1];
          const expiresIn = Number(expiryTime[1]);

          window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
          window.history.pushState({}, "", "/");

          const pending = localStorage.getItem("pendingSearch");
          if (pending) {
            localStorage.removeItem("pendingSearch");
            Spotify.search(pending);
        }

          return accessToken;
        } else {
          const scopes = ["playlist-modify-public"];
          const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=${encodeURIComponent(
            scopes.join(" ")
          )}&redirect_uri=${encodeURIComponent(redirectUri)}`;

          window.location = authUrl;
        }
    },

    async search(term) {
        if (typeof window !== "undefined") {
          localStorage.setItem("pendingSearch", term);
        }

        accessToken = Spotify.getAccessToken();

        if (!accessToken) return

        const response = await fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        const jsonResponse = await response.json();
        if (!jsonResponse) {
            console.error('Response error');
            return [];
        }
        return jsonResponse.tracks.items.map((t) => ({
            id: t.id,
            name: t.name,
            artist: t.artists[0].name,
            album: t.album.name,
            uri: t.uri,
            artwork: t.album.images[0].url
        }));
    },

    async savePlaylist(name, trackURIs) {
        if (!name || !trackURIs) return;

        const aToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${aToken}` };
        let userID;

        const response = await fetch('https://api.spotify.com/v1/me', { headers: header });
        const jsonResponse = await response.json();
        userID = jsonResponse.id;
        let playlistID;
        const response_1 = await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            headers: header,
            method: 'POST',
            body: JSON.stringify({ name: name })
        });
        const jsonResponse_1 = await response_1.json();
        playlistID = jsonResponse_1.id;
        return await fetch(`https://api.spotify.com/v1/playlists/${playlistID}/tracks`, {
            headers: header,
            method: 'POST',
            body: JSON.stringify({ uris: trackURIs })
        });
    }
};

export { Spotify };
