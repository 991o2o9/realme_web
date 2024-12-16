import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/helper/helper";

export const getBanner = createAsyncThunk("home/banner", async () => {
  try {
    const response = await axios.get(`${API_URL}/banners/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
