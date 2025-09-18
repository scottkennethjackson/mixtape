import React from "react";
import Track from "./Track";

function Tracklist (props) {
  return (
    <div className="pb-4">
      {props.userSearchResults.map((track) => (
        <Track
          track={ track }
          key={ track.id }
          isRemoval={ props.isRemoval }
          onAdd={ props.onAdd }
          onRemove={ props.onRemove }
        />
      ))}
    </div>
  );
};

export default Tracklist;
