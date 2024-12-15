import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        "https://675ea15563b05ed0797a9882.mockapi.io/api/v1/order/order"
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const fetchOneProducts = createAsyncThunk(
  "products/fetchProductsById",
  async (id) => {
    try {
      const response = await axios.get(
        `https://675ea15563b05ed0797a9882.mockapi.io/api/v1/order/order/${id}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
