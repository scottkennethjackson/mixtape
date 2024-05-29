import React from "react";
import Tracklist from "./Tracklist";

function Playlist(props) {
  function handleNameChange({ target }) {
    props.onNameChange(target.value);
  };

  return (
    <div className="flex flex-col justify-between lg:w-48% h-1/2 lg:h-full shadow-bottom bg-darkgrey bg-opacity-70 p-4">
      <div className="h-4/5">
        <input
          defaultValue={ "My Mixtape" }
          onChange={ handleNameChange }
          className="w-full focus:outline-none border-b-2 focus:border-lightblue bg-transparent focus:text-lightblue font-popins text-2xl font-bold"
        />
        <div id="playlist" className="h-full overflow-scroll">
          <Tracklist
            userSearchResults={ props.playlistTracks }
            onRemove={ props.onRemove }
            isRemoval={ true }
          />
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <p id="errorMessage" className="hidden text-lightblue font-poppins font-bold"></p>
        <button
          onClick={ props.onSave }
          className="rounded-full bg-lightblue hover:bg-hoverblue active:bg-activeblue py-2 px-4 text-black">SAVE TO SPOTIFY</button>
      </div>
    </div>
  );
};

export default Playlist;