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
  
    useEffect(() => {
      const pending = localStorage.getItem("pendingSearch");
      if (pending) {
        Spotify.search(pending).then((result) => {
          setSearchResults(result);
          localStorage.removeItem("pendingSearch");
        });
      }
    }, []);

    function showError() {
        errorMessage.classList.remove('hidden');
    };

    function hideError() {
        errorMessage.classList.add('hidden');
    };

    function addTrack(track) {
        const existingTrack = playlistTracks.find((t) => t.id === track.id);
        const newTrack = playlistTracks.concat(track);

        if (existingTrack) {
          showError();
          errorMessage.innerHTML = `${track.name} already added`;
        } else {
          hideError();
          setPlaylistTracks(newTrack);
        };
    };

    function removeTrack(track) {
        const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
        hideError();
        setPlaylistTracks(existingTrack);
    };

    function updatePlaylistName(name) {
        hideError();
        setPlaylistName(name);
    };

    function savePlaylist() {
        const trackURIs = playlistTracks.map((t) => t.uri);
        hideError();
        Spotify.savePlaylist(playlistName, trackURIs).then(() => {
          playlistInput.value = 'New Mixtape';
          setPlaylistTracks([]);
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
                />
            </div>
            )}
        </div>
    );
};

export default App;
