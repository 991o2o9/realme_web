import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../../modules/OrderModule/store/cartSlice";
import authSlice from "../../modules/AuthModule/Store/authSlice";
import orderSlice from "../../modules/OrderModule/store/createOrder";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    order: orderSlice,
  },
});
