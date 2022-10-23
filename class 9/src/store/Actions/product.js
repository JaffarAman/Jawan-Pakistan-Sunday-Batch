import axios from "axios";
import ActionTypes from "../constant";

const getProductAtion = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ActionTypes.GET_PRODUCTDATA_LOADING,
      });
      const data = await axios.get("https://fakestoreapi.com/products");
      console.log("data", data);
      dispatch({
        type: ActionTypes.GET_PRODUCTDATA_SUCCESS,
        payload: data.data,
      });

      console.log(data);
    } catch (error) {
      console.log("error", error);
      dispatch({
        type: ActionTypes.GET_PRODUCTDATA_FAIL,
      });
    }
  };
};

const AddtoCartAction = (product) => {
  return (dispatch) => {
    console.log("product action", product);
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: product,
    });
  };
};

const RemovetoCartAction = (product) => {
  return (dispatch) => {
    console.log("product action", product);
    dispatch({
      type: ActionTypes.REMOVE_TO_CART,
      payload: product,
    });
  };
};
export { getProductAtion, AddtoCartAction, RemovetoCartAction };
