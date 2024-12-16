import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/helper/helper";

export const submitOrder = createAsyncThunk(
  "order/submit",
  async (order, { rejectWithValue }) => {
    try {
      const username = localStorage.getItem("email");
      const password = localStorage.getItem("password");

      if (!username || !password) {
        throw new Error("Имя пользователя или пароль отсутствуют.");
      }

      const encodedCredentials = btoa(`${username}:${password}`);
      const config = {
        headers: {
          Authorization: `Basic ${encodedCredentials}`,
        },
      };

      const response = await axios.post(
        `${API_URL}/cart-items/`,
        order,
        config
      );

      return response.data;
    } catch (error) {
      console.error("Error details:", error.response || error.message);
      return rejectWithValue(
        error.response?.data?.detail || error.message || "Неизвестная ошибка"
      );
    }
  }
);
