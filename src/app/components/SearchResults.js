import React from "react";
import Tracklist from "./Tracklist";

function SearchResults (props) {
  return (
    <div className="SearchResults w-full lg:w-1/2 h-full max-lg:mb-8 shadow-bottom bg-darkgrey bg-opacity-70 overflow-scroll p-4">
      <h2 className="border-b-2 font-popins text-2xl font-bold">Search Results</h2>
      <Tracklist
        userSearchResults={props.userSearchResults}
        isRemoval={false}
        onAdd={props.onAdd}
      />
    </div>
  );
};

export default SearchResults;