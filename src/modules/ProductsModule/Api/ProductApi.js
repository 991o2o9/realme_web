import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk(
  "usefulInfo/fetchUsefulInfo",
  async (page) => {
    const url = `http://100.27.228.237/api/v1/products/?page=${page}`;
    const { data } = await axios.get(url);
    return data;
  }
);

export const getOneProd = createAsyncThunk("news/getOneNew", async (id) => {
  const response = await axios.get(
    `http://100.27.228.237/api/v1/products/${id}`
  );
  return response.data;
});
