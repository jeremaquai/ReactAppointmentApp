import React from "react";

export const Tile = (props) => {

  const values = Object.values(props.object);
  console.log(values)
  console.log()
  return (
    <div className="tile-container">
      {values.map((value, index) => {
        if (index === 0) {
          return (
            <p className=" tile tile-title" key={index} > {value} </p>
          );
        } else {
          return (
            <p className="tile" key={index} > {value} </p>
          );
        }
        })}
    </div>
  );
};
