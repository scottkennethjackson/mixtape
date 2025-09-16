import React from "react";

function Track (props) {
  function renderAction() {
    if (props.isRemoval) {
      return <button
        onClick={ passTrackToRemove }
        className="text-xl font-bold text-blue active:text-activeblue cursor-pointer">-</button>
    } else {
      return <button
        onClick={ passTrack }
        className="text-xl font-bold text-blue active:text-activeblue cursor-pointer">+</button>
    }
  };

  function passTrack() {
    props.onAdd(props.track);
  };

  function passTrackToRemove() {
    props.onRemove(props.track)
  };

  return (
    <div className="flex justify-between border-b">
      <div className="flex min-w-0 items-center space-x-2">
        <Image
          src={ props.track.artwork }
          width='48'
          height='48'
          alt={ `${props.track.album} album artwork` }
        />
        <div className="py-2 overflow-x-hidden">
          <h3 className="truncate font-bold">{ props.track.name }</h3>
          <p className="truncate">{ props.track.artist } | { props.track.album }</p>
        </div>
      </div>
      { renderAction() }
    </div>
  );
};

export default Track;
