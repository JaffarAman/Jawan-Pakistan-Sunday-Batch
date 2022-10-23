import ActionTypes from "../constant";

const AddCounterAction = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.COUNTER_PLUS,
    });
  };
};

const MinusCounterAction = () => {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.COUNTER_MINUS,
    });
  };
};

export { AddCounterAction, MinusCounterAction };
