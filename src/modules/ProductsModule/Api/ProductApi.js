import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/helper/helper";

export const getAllProducts = createAsyncThunk(
  "usefulInfo/fetchUsefulInfo",
  async (page) => {
    const url = `${API_URL}/products/?page=${page}`;
    const { data } = await axios.get(url);
    return data;
  }
);

export const getOneProd = createAsyncThunk("news/getOneNew", async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
});
