"use client";
import React, { useState } from "react";
import Image from "next/image";
import backgroundImg from "./background-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import SearchResults from "../SearchResults";
import Playlist from "../Playlist";
import SearchBar from "../SearchBar";

const App = () => {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Track 1",
      artist: "Artist 1",
      album: "Album 1",
      id: 1
    },
    {
      name: "Track 2",
      artist: "Rrtist 2",
      album: "Album 2",
      id: 2
    }
  ]);

  const [playlistName, setPlaylistName] = useState("My Mixtape");
  const [playlistTracks, setPlaylistTracks] = React.useState([]);

  function showError() {
    errorMessage.classList.remove('hidden');
  };

  function hideError() {
    errorMessage.classList.add('hidden');
  }

  function addTrack(track) {
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    const newTrack = playlistTracks.concat(track);

    if (existingTrack) {
      showError();
      errorMessage.innerHTML=`${track.name} already added`;
    } else {
      hideError();
      setPlaylistTracks(newTrack);
    };
  };

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  };

  function updatePlaylistName(name) {
    setPlaylistName(name);
  };
  
  return (
  <div className="fixed w-screen h-screen">
    <Image
      src={ backgroundImg }
      alt="A cool-looking man wearing headphones and listening to music"
      fill={true}
      objectFit="cover"
      style={{
        zIndex: "-1"
      }}
    />
    
    <div className="h-12 flex fixed items-center justify-center space-x-1 shadow-md bg-darkgrey w-full py-2 text-center text-lightblue">
      <FontAwesomeIcon icon={ faSpotify } className='h-8'/>
      <h1 className="font-marker text-3xl">Mixtape</h1>
    </div>

    <div className="App flex flex-col items-center mx-15% py-12 h-full text-white">
      <SearchBar />
      
      <div className="App-playlist flex flex-col lg:flex-row items-center justify-between w-full h-full lg:space-x-8 z-50">
        <SearchResults
          userSearchResults={searchResults}
          onAdd={addTrack}
        />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
        />
      </div>
    </div>
  </div>
  );
};

export default App;