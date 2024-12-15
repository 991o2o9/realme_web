import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        "http://100.27.228.237/api/v1/products/"
      );
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
