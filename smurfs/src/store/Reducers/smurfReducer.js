import {
  FETCH_SMURF,
  FETCH_SMURF_SUCCESS,
  FETCH_SINGLE_SMURF,
  FETCH_SINGLE_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  FETCH_SINGLE_SMURF_ERROR,
  POST_SMURF,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL,
} from "../Actions/smurfActions";
import { bindActionCreators } from "redux";

const initialState = {
  smurf: [],
  singleSmurf: "",
  isFetching: false,
  isPosting: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_SINGLE_SMURF:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SINGLE_SMURF_SUCCESS:
      return {
        ...state,
        singleSmurf: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case FETCH_SINGLE_SMURF_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case POST_SMURF:
      return {
        ...state,
        isPosting: true,
        smurf: [...state.smurf],
      };
    case POST_SMURF_SUCCESS:
      return {
        ...state,
        isPosting: false,
        smurf: action.payload,
      };
    case POST_SMURF_FAIL:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
