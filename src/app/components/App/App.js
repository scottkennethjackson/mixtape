"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import backgroundImg from "./background-img.jpg";
import SearchBar from "../SearchBar";
import SearchResults from "../SearchResults";
import Playlist from "../Playlist";
import LoginScreen from "../LoginScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { Spotify } from "@/util/Spotify/Spotify";

faSpotify.autoAddCss = false;

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("My Mixtape");
  const [playlistTracks, setPlaylistTracks] = React.useState([]);

  useEffect(() => {
    window.addEventListener('load', () => {
      if (window.location.href.match(/access_token=([^&]*)/)) {
        loginScreen.classList.add('hidden');
      };
    });
  });
  
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
  <div className="flex fixed items-center justify-center w-screen h-screen">
    <div className="flex fixed top-0 items-center justify-center space-x-1 w-full h-12 shadow-md bg-darkgrey text-lightblue">
      <FontAwesomeIcon
        icon={ faSpotify }
        className='h-8'
      />
      <h1 className="font-marker text-3xl">Mixtape</h1>
    </div>

    <Image
      src={ backgroundImg }
      alt="A cool-looking man with a backwards cap, wearing headphones and listening to music"
      fill={ true }
      style={{
        zIndex: "-1",
        objectFit: "cover"
      }}
    />

    <div className="flex flex-col items-center justify-between mt-12 space-y-4 w-4/5 h-4/5 text-white">
      <SearchBar onSearch={ search } />
      
      <div className="flex flex-col justify-between lg:flex-row w-full h-4/5">
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
    </div>
    <LoginScreen/>
  </div>
  );
};

export default App;