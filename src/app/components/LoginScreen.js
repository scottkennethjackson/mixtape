import React from "react";
import { clientID } from "@/util/Spotify/Spotify.config";
import { redirectUrl } from "@/util/Spotify/Spotify.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

function LoginScreen() {
    function connectToSpotify() {
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
        window.location = redirect;
    };

    return (
        <div id="loginScreen" className="flex absolute items-center justify-center h-screen w-screen bg-darkgrey bg-opacity-70">
          <button 
            onClick={ connectToSpotify }
            className="mx-auto rounded-full bg-lightblue hover:bg-hoverblue active:bg-activeblue py-2 px-4 text-black text-2xl font-bold"><FontAwesomeIcon icon={ faSpotify } /> Connect to Spotify
            </button>
        </div>
    );
};

export default LoginScreen;