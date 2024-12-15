import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFooter = createAsyncThunk("get/footer.", async () => {
  try {
    const response = await axios.get("http://100.27.228.237/api/v1/footer/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
