const INTIALSTATE = {
  globalCounter: 0,
};

const addCounterReducer = (state = INTIALSTATE, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      console.log("addCounterReducer");
      return {
        globalCounter: ++state.globalCounter,
      };
    case "MINUS_COUNTER":
      console.log("minusCounterReducer");
      return {
        globalCounter: --state.globalCounter,
      };
    default:
      return { ...state };
  }
};

// const minusCounterReducer = (state = INTIALSTATE, action) => {
//   switch (action.type) {
//     case "MINUS_COUNTER":
//       console.log("minusCounterReducer");
//       return {
//         globalCounter: --state.globalCounter,
//       };
//     default:
//       return { ...state };
//   }
// };

export {
  addCounterReducer,
  // minusCounterReducer
};
