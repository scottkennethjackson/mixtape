import React from "react";

function Track (props) {
  function renderAction() {
    if (props.isRemoval) {
      return <button
        onClick={ passTrackToRemove }
        className="text-xl font-bold text-blue active:text-active-blue cursor-pointer">-</button>
    } else {
      return <button
        onClick={ passTrack }
        className="text-xl font-bold text-blue active:text-active-blue cursor-pointer">+</button>
    }
  };

  function passTrack() {
    props.onAdd(props.track);
  };

  function passTrackToRemove() {
    props.onRemove(props.track)
  };

  return (
    <div className="flex justify-between py-2 border-b border-gray-500">
      <div className="flex items-center space-x-2">
        <Image
          src={ props.track.artwork }
          width='48'
          height='48'
          alt={ `${props.track.album} album artwork` }
        />
        <div className="overflow-x-hidden">
          <h3 className="truncate font-semibold text-white">{ props.track.name }</h3>
          <p className="truncate text-blue">{ props.track.artist } | { props.track.album }</p>
        </div>
      </div>
      { renderAction() }
    </div>
  );
};

export default Track;
