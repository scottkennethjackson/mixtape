"use client"
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import { Spotify } from "@/utils/Spotify/Spotify";

const App = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [playlistName, setPlaylistName] = useState("My Mixtape");
    const [playlistTracks, setPlaylistTracks] = React.useState([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
      const pending = localStorage.getItem("pendingSearch");
      if (pending) {
        Spotify.search(pending).then((result) => {
          setSearchResults(result);
          localStorage.removeItem("pendingSearch");
        });
      }
    }, []);

    function showError(msg) {
        setError(msg);
    };

    function hideError() {
        setError("")
    };

    function addTrack(track) {
        const existingTrack = playlistTracks.find((t) => t.id === track.id);

        if (existingTrack) {
          showError(`${track.name} already added`);
        } else {
          hideError();
          setPlaylistTracks([...playlistTracks, track]);
        };
    };

    function removeTrack(track) {
        setPlaylistTracks(playlistTracks.filter((t) => t.id !== track.id));
        hideError();
    };

    function updatePlaylistName(name) {
        setPlaylistName(name);
        hideError();
    };

    function savePlaylist() {
        const trackURIs = playlistTracks.map((t) => t.uri);
        hideError();
        Spotify.savePlaylist(playlistName, trackURIs).then(() => {
          setPlaylistTracks([]);
          playlistInput.value = 'New Mixtape';
        });
    };

    function search(term) {
        hideError();
        Spotify.search(term).then((result) => setSearchResults(result));
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 py-16 space-y-12 min-h-screen bg-black/20">
            <div className="flex flex-col items-center space-y-4">
                <h1 className="font-marker text-7xl sm:text-8xl text-blue text-shadow-md text-shadow-black/30">Mixtape</h1>
                <SearchBar onSearch={ search } />
            </div>

            {searchResults.length > 0 && (
            <div id="playlist-elements" className="flex flex-col md:flex-row items-center md:items-start justify-center w-full md:space-x-4 space-y-4 md:space-y-0">
                <SearchResults
                  userSearchResults={ searchResults }
                  onAdd={ addTrack }
                />
                <Playlist
                  playlistName={ playlistName }
                  playlistTracks={ playlistTracks }
                  onRemove={ removeTrack }
                  onNameChange={ updatePlaylistName }
                  onSave={ savePlaylist }
                  error={ error }
                />
            </div>
            )}
        </div>
    );
};

export default App;
