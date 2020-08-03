import React from "react";

const SmurfMap = (props) => {
  return (
    <div>
      <h1>Hello</h1>
      {props.props.smurf.map((smurf) => {
        return (
          <div key={smurf.id}>
            <h2>Name: {smurf.name}</h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SmurfMap;
