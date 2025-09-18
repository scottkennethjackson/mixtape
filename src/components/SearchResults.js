import React from "react";
import Tracklist from "./Tracklist";

function SearchResults (props) {
  return (
    <div id="tracks" className="overflow-hidden p-4 pb-0 w-full md:w-1/2 max-w-lg h-96 bg-black/30">
      <h2 className="font-marker text-2xl text-white border-blue border-b-2">Tracks</h2>
      <div id="searchResults" className="overflow-y-scroll h-full pb-8.5">
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
