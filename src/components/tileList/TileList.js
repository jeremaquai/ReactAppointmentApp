import React from "react";
import { Tile } from '../tile/Tile'

export const TileList = ({list}) => {
  return (
    <div>
      {
        list.map((object, index) => <Tile object={object} key={index} />)
      }
    </div>
  );
};
