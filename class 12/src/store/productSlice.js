import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.status = STATUSES.LOADING;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.status = STATUSES.IDLE;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.status = STATUSES.ERROR;
    });
  },
});

const { reducer } = productSlice;

export const fetchProduct = createAsyncThunk("products/fetch", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();
  console.log(products, "products");
  return products;
});

export default reducer;
