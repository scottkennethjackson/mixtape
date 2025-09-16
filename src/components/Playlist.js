import React from "react";
import Tracklist from "./Tracklist";

function Playlist(props) {
  function handleNameChange({ target }) {
    props.onNameChange(target.value);
  };

  return (
    <div id="playlist" className="p-4 w-full max-w-lg bg-black/30">
      <div>
        <input
          defaultValue={ "My Mixtape" }
          onChange={ handleNameChange }
          id="playlistInput"
          className="font-marker w-full text-2xl text-white focus:text-blue border-blue border-b-2"
        />
        <div id="playlist" className="overflow-scroll pb-4">
          <Tracklist
            userSearchResults={ props.playlistTracks }
            onRemove={ props.onRemove }
            isRemoval={ true }
          />
        </div>
      </div>
      <div className="flex flex-col items-center pb-4 space-y-2">
        <p id="errorMessage" className="hidden font-semibold text-red-500"></p>
        <button
          onClick={ props.onSave }
          className="px-4 py-2 w-48 font-semibold text-center bg-blue active:bg-active-blue rounded-full cursor-pointer">SAVE TO SPOTIFY</button>
      </div>
    </div>
  );
};

export default Playlist;
