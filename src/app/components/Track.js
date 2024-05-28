import React from "react";

function Track (props) {
  function renderAction() {
    if (props.isRemoval) {
      return <button onClick={passTrackToRemove} className="Track-action text-lightblue hover:text-hoverblue active:text-activeblue text-xl font-bold">-</button>
    } else {
      return <button onClick={passTrack} className="Track-action text-lightblue hover:text-hoverblue active:text-activeblue text-xl font-bold">+</button>
    }
  };

  function passTrack() {
    props.onAdd(props.track);
  };

  function passTrackToRemove() {
    props.onRemove(props.track)
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