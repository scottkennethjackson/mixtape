import React from "react";
import Tracklist from "./Tracklist";

function SearchResults (props) {
  return (
    <div id="tracks" className="p-4 w-full max-w-lg bg-black/30">
      <h2 className="font-marker text-2xl text-white border-blue border-b-2">Tracks</h2>
      <div id="searchResults" className="overflow-scroll pb-4">
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
