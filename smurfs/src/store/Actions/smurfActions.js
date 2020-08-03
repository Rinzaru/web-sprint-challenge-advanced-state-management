import axios from "axios";

export const FETCH_SMURF = "FETCH_SMURF";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SINGLE_SMURF = "FETCH_SINGLE_SMURF";
export const FETCH_SINGLE_SMURF_SUCCESS = "FETCH_SINGLE_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_ERROR";
export const FETCH_SINGLE_SMURF_ERROR = "FETCH_SINGLE_SMURF_ERROR";
export const POST_SMURF = "POST SMURF";
export const POST_SMURF_SUCCESS = "POST SMURF";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const fetchSmurf = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SMURF });
    axios
      .get("http://localhost:3333/smurfs")
      .then((resp) => {
        const smurfEntries = Object.entries(resp.data);

        const smurfs = smurfEntries.map((smurf) => {
          const smurfId = smurf[0];
          const smurfData = smurf[1];
          console.log(smurfData);
          return { id: smurfId, ...smurfData };
        });

        dispatch({ type: FETCH_SMURF_SUCCESS, payload: smurfs });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_SMURF_FAIL, payload: err });
      });
  };
};

export const postSmurf = (smurf) => {
  return (dispatch) => {
    dispatch({ type: POST_SMURF });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((res) => {
        console.log("Post Success!", res.data);
        dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: POST_SMURF_FAIL, payload: err });
      });
  };
};
