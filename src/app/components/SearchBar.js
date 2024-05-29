import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function handleFocus() {
  searchSymbol.classList.remove('text-black');
  searchSymbol.classList.add('text-lightblue');
};

function handleBlur() {
  searchSymbol.classList.remove('text-lightblue');
  searchSymbol.classList.add('text-black');
}

function SearchBar (props) {
  const [term, setTerm] = useState('');

  function passTerm() {
    props.onSearch(term);
  };

  function handleTermChange({ target }) {
    setTerm(target.value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="rounded-full bg-white py-2 px-4">
        <FontAwesomeIcon
          icon={ faMagnifyingGlass }
          id="searchSymbol"
          className="h-4 text-black"
        />
        <input 
          onFocus={ handleFocus }
          onBlur={ handleBlur }
          onChange={ handleTermChange }
          className="w-64 me-4 focus:outline-none text-center text-black"
          placeholder="Enter a Song, Artist or Album"
        />
      </div>
      <button
        onClick={ passTerm }
        className="mx-auto rounded-full bg-lightblue hover:bg-hoverblue active:bg-activeblue py-2 px-4 text-black">SEARCH
      </button>
    </div>
  );
};

export default SearchBar;