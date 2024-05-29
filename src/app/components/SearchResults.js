import React from "react";
import Tracklist from "./Tracklist";

function SearchResults (props) {
  return (
    <div className="max-lg:mb-8 lg:w-48% h-1/2 lg:h-full shadow-bottom bg-darkgrey bg-opacity-70 lg:overflow-hidden p-4 pb-8">
      <h2 className="border-b-2 font-popins text-2xl font-bold">Search Results</h2>
      <div id="searchResults" className="h-full overflow-scroll">
        <Tracklist
          userSearchResults={props.userSearchResults}
          isRemoval={false}
          onAdd={props.onAdd}
        />
      </div>
    </div>
  );
};

export default SearchResults;