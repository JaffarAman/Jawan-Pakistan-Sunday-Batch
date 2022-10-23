import ActionTypes from "../constant";

const INTIALSTATE = {
  data: [],
  dataLoading: false,

  ///add-to-cart
  cartItem: [],
};

const GetProductReducer = (state = INTIALSTATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_PRODUCTDATA_LOADING:
      return {
        ...state,
        dataLoading: true,
      };
    case ActionTypes.GET_PRODUCTDATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        dataLoading: false,
      };
    case ActionTypes.GET_PRODUCTDATA_FAIL:
      return {
        ...state,
        dataLoading: false,
        data: [],
      };
    default:
      return state;
  }
};

const AddToCartReducer = (state = INTIALSTATE, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload],
      };

    case ActionTypes.REMOVE_TO_CART:
      const product = state.cartItem.filter((p) => p.id !== action.payload.id);
      return {
        ...state,
        cartItem: [...product],
      };

    default:
      return state;
  }
};

export { GetProductReducer, AddToCartReducer };
