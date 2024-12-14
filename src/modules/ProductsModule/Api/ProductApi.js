import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get("/api/products");
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
      const response = await axios.get(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
