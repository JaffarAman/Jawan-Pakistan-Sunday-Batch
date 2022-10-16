const AddCounterAction = () => {
  return (dispatch) => {
    console.log("action call");
    dispatch({
      type: "ADD_COUNTER",
      //   payload,
    });
  };
};

const MinusCounterAction = () => {
  return (dispatch) => {
    dispatch({
      type: "MINUS_COUNTER",
      //   payload,
    });
  };
};

export { AddCounterAction, MinusCounterAction };
