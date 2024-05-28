import React from "react";
import Tracklist from "./Tracklist";

function Playlist(props) {
  return (
    <div className="Playlist flex flex-col w-full lg:w-1/2 h-full shadow-bottom bg-darkgrey bg-opacity-70 overflow-scroll p-4">
      <input defaultValue={"My Mixtape"} className="w-full focus:outline-none border-b-2 focus:border-lightblue bg-transparent focus:text-lightblue font-popins text-2xl font-bold" />
      <Tracklist
        userSearchResults={props.playlistTracks}
      />
      <p id="errorMessage" className="hidden mt-4 text-center text-lightblue"></p>
      <button className="Playlist-save my-4 mx-auto w-fit rounded-full bg-lightblue hover:bg-hoverblue active:bg-activeblue py-2 px-4 text-black">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;