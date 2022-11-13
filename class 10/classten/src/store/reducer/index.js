function reducer(state = 0, action) {
    console.log(state, action);
    if (action.type == "INCRE") {
      return state + action.val;
    } else if (action.type == "DECRE") {
      return state - action.val;
    }
    return state;
  }

  export default reducer;