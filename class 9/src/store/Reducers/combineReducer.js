import { combineReducers } from "redux";
import { addCounterReducer } from "./counterReducers";
import { AddToCartReducer, GetProductReducer } from "./productReducer";

const combineReducer = combineReducers({
  addCounterReducer: addCounterReducer,
  GetProductReducer: GetProductReducer,
  AddToCartReducer: AddToCartReducer,
});
export default combineReducer;
