import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer/index";
import thunk from "redux-thunk";

const store = createStore(reducer, {}, applyMiddleware(thunk));
// PART 1
// console.log(store, "store");
// // store.dispatch({ type: "user_name_update", userName: "umair" });
// store.dispatch({ type: "INCRE" });
// console.log(store.getState(), "getstate 1");
// store.dispatch({ type: "INCRE" });
// console.log(store.getState(), "getstate 2");
// store.dispatch({ type: "DECRE" });
// console.log(store.getState(), "getstate 3");

// PART 2
// console.log(store, "store");
// store.dispatch({ type: "user_name_update", userName: "umair" });
// store.dispatch({ type: "INCRE", val: 2 });
// console.log(store.getState(), "getstate 1");
// store.dispatch({ type: "INCRE", val: 1 });
// console.log(store.getState(), "getstate 2");
// store.dispatch({ type: "DECRE", val: 1 });
// console.log(store.getState(), "getstate 3");

export default store;
