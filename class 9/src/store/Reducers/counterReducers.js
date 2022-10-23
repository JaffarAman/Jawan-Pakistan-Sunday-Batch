import ActionTypes from "../constant";

const INTIALSTATE = {
  globalCounter: 0,
  name: "counter app",
  bool: true,
  und: undefined,
};

///JS PURE FUNCTIONS
const addCounterReducer = (state = INTIALSTATE, action) => {
  switch (action.type) {
    case ActionTypes.COUNTER_PLUS:
      return {
        ...state,
        globalCounter: ++state.globalCounter,
      };
    case ActionTypes.COUNTER_MINUS:
      return {
        globalCounter: --state.globalCounter,
      };
    default:
      return state;
  }
};

export { addCounterReducer };
