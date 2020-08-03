import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postSmurf } from "../store/Actions/smurfActions";
import Loader from "react-loader-spinner";
const SmurfForm = (props) => {
  const [postingSmurf, setPostSmurf] = useState({
    name: "",
    age: "",
    height: "",
  });

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setPostSmurf({ ...postingSmurf, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    dispatch(postSmurf(postingSmurf));
  };
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Add Name:
          <input
            value={props.state.smurf.name}
            onChange={inputHandler}
            name="name"
          />
        </label>
        <label>
          Add Age:
          <input
            value={props.state.smurf.age}
            onChange={inputHandler}
            name="age"
          />
        </label>
        <label>
          Add Height:
          <input
            value={props.state.smurf.height}
            onChange={inputHandler}
            name="height"
          />
        </label>
        <button onClick={submitHandler}>Add Smurf</button>
      </form>
    </div>
  );
};

export default SmurfForm;
