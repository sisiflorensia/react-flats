import React from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectedFlat, selectFlat }) => {
  return (
    <div className="flat-list">
    {flats.map((flat, index) => {
      return <Flat flat={flat} key={flat.name} index={index} selected={flat.name === selectedFlat.name} selectFlat={selectFlat} />;
    })}
  </div>
  );
}

export default FlatList;
