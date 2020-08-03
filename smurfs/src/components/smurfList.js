import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSmurf } from "../store/Actions/smurfActions";
import SmurfMap from "./smurfMap";

import Loader from "react-loader-spinner";
const SmurfList = (props) => {
  //   console.log(props.state, "props");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSmurf());
  }, []);

  return (
    <div>
      <h1>Smurf List:</h1>

      {props.state.isFetching && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          style={{
            marginLeft: "45%",
          }}
        />
      )}

      {props.state.smurf.length > 0 && <SmurfMap props={props.state} />}
    </div>
  );
};

export default SmurfList;
