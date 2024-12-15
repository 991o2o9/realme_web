import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AddToCart = createAsyncThunk("cart/add", async (order) => {
  try {
    const response = await axios.post(
      "http://100.27.228.237/api/v1/cart/items/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка отправки заказа");
    }

    return response.json();
  } catch (error) {
    console.log(error);
  }
});
