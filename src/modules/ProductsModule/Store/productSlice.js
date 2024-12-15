import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../Api/ProductApi";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],

    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.results;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload || action.error.message;
      });
  },
});

export default productSlice.reducer;
