import { createSlice } from "@reduxjs/toolkit";
import { fetchOneProducts, fetchProducts } from "../Api/ProductApi";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    oneProduct: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchOneProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchOneProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.oneProduct = action.payload;
    });
    builder.addCase(fetchOneProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default productSlice.reducer;
