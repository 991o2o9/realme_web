import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../../utils/helper/helper";
export const AddToCart = createAsyncThunk("cart/add", async (order) => {
  try {
    const response = await axios.post(`${API_URL}/cart/items/"`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (!response.ok) {
      throw new Error("Ошибка отправки заказа");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
});
