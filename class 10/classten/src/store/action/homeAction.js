const doIncre = () => {
  return (dispatch) => {
    dispatch({ type: "INCRE", val: 3 });
  };
};

export { doIncre };
