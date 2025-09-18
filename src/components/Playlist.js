import React from "react";
import Tracklist from "./Tracklist";

function Playlist(props) {
  function handleNameChange({ target }) {
    props.onNameChange(target.value);
  };

  return (
    <div id="my-mixtape" className="flex flex-col relative p-4 pb-0 w-full md:w-1/2 max-w-lg h-96 bg-black/30 shadow-xl shadow-black/50">
      <div className="flex space-between border-blue border-b-2">
        <input
          defaultValue={ "My Mixtape" }
          onChange={ handleNameChange }
          id="playlistInput"
          className="font-marker w-full text-2xl text-white focus:text-blue"
        />
        <button
          onClick={ props.onSave }
          className="flex items-center cursor-pointer group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32px"
            viewBox="0 -960 960 960"
            width="24px"
            className="fill-white group-hover:fill-blue group-active:fill-active-blue"
          >
            <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"/>
          </svg>
          <span className="ms-1 text-xl font-semibold text-white group-hover:text-blue group-active:text-active-blue">SAVE</span>
        </button>
      </div>
      <div id="playlist" className="overflow-y-scroll h-full">
        <Tracklist
          userSearchResults={ props.playlistTracks }
          onRemove={ props.onRemove }
          isRemoval={ true }
        />
      </div>
      <p className={`absolute -bottom-8 left-0 w-full font-semibold text-center text-red-500 ${props.error ? "" : "hidden"}`}></p>
    </div>
  );
};

export default Playlist;
