import React from "react";

function Track (props) {
  function renderAction() {
    if (props.isRemoval) {
      return <button className="Track-action text-lightblue hover:text-hoverblue active:text-activeblue text-xl font-bold" onClick={passTrack}>+</button>
    } else {
      return <button className="Track-action text-lightblue hover:text-hoverblue active:text-activeblue text-xl font-bold">-</button>
    }
  };

  function passTrack() {
    props.onAdd(props.track);
  };

  return (
    <div className="Track flex justify-between border-b">
      <div className="Track-information py-2 overflow-ellipsis overflow-x-hidden">
        <h3 className="truncate font-bold">{props.track.name}</h3>
        <p className="truncate">{props.track.artist} | {props.track.album}</p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;