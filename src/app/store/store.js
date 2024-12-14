import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../../modules/OrderModule/store/cartSlice";
import productSlice from "../../modules/ProductsModule/Store/productSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
  },
});
