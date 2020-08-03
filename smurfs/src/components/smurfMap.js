import React from "react";
import { Link } from "react-router-dom";
const SmurfMap = (props) => {
  return (
    <div>
      <h1>Hello</h1>
      {props.props.smurf.map((smurf) => {
        return (
          <div key={smurf.id}>
            <h2>
              <Link to={`/smurf/${smurf.id}`}>
                <button>Name: {smurf.name}</button>
              </Link>
            </h2>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SmurfMap;
