import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBanner = createAsyncThunk("home/banner", async () => {
  try {
    const response = await axios.get("http://100.27.228.237/api/v1/banners/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
