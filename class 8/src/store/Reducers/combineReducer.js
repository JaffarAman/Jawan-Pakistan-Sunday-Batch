import { combineReducers } from "redux";
import { addCounterReducer, minusCounterReducer } from "./counterReducers";

const combineReducer = combineReducers({
  addCounterReducer: addCounterReducer,
  //   minusCounterReducer: minusCounterReducer,
});
export default combineReducer;
