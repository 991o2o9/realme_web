import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/helper/helper";

export const fetchFooter = createAsyncThunk("get/footer.", async () => {
  try {
    const response = await axios.get(`${API_URL}/footer/`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
