import React, { useState } from "react";

function SearchBar (props) {
  const [term, setTerm] = useState('');

  function passTerm() {
    props.onSearch(term);
  };

  function handleTermChange({ target }) {
    setTerm(target.value);
  };

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      passTerm()
    }
  };

  return (
      <div className="rounded-full shadow-md shadow-black/30">
        <input 
          onChange={ handleTermChange }
          onKeyDown={ handleKeyDown }
          id="searchInput"
          className="px-4 py-2 w-64 text-center bg-white rounded-s-full"
          placeholder="Enter a Song, Artist or Album"
        />
        <button
          onClick={ passTerm }
          className="px-4 py-2 w-32 font-semibold text-center bg-blue active:bg-active-blue rounded-e-full cursor-pointer">SEARCH
        </button>
      </div>
  );
}

export default SearchBar;