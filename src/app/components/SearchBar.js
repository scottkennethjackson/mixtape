import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function symbolFocus() {
  searchSymbol.classList.remove('text-black');
  searchSymbol.classList.add('text-lightblue');
};

function symbolBlur() {
  searchSymbol.classList.remove('text-lightblue');
  searchSymbol.classList.add('text-black');
}

function SearchBar () {
  return (
    <div className="SearchBar flex flex-col my-8 space-y-4">
      <div className="flex items-center rounded-full bg-white py-2 px-4">
        <FontAwesomeIcon icon={ faMagnifyingGlass } id="searchSymbol" className="h-4 text-black"/>
        <input onFocus={symbolFocus} onBlur={symbolBlur} className=" w-64 focus:outline-none rounded-r-full text-center text-black" placeholder="Enter a Song, Artist or Album" />
      </div>
      <button className="SearchButton mx-auto w-fit rounded-full bg-lightblue hover:bg-hoverblue active:bg-activeblue py-2 px-4 text-black">SEARCH</button>
    </div>
  );
};

export default SearchBar;