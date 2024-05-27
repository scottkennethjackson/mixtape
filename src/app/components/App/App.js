import React from 'react';
import Image from 'next/image'
import backgroundImg from './background-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const App = () => {
    return (
    <div>
      <Image
        src={ backgroundImg }
        alt='A cool-looking man wearing headphones and listening to music'
        fill={true}
        objectFit='cover'
      />
      <div className="flex fixed items-center justify-center space-x-1 bg-darkgrey w-full py-2 text-center text-lightblue">
        <FontAwesomeIcon icon={ faSpotify } className='h-9'/>
        <h1 className="font-marker text-3xl">Mixtape</h1>
      </div>
      <div className="App h-full px-15% pb-10% text-white font-work">
        {/* <!-- Add a SearchBar component --> */}
        
        <div className="App-playlist flex flex-col lg:flex-row items-center justify-between w-full">
          {/* <!-- Add a SearchResults component --> */}
          {/* <!-- Add a Playlist component --> */}
        </div>
      </div>
    </div>
    );
}

export default App;