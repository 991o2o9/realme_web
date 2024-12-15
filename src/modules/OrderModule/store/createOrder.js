import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getConfig = () => {
  const jwt = localStorage.getItem("jwt");
  if (!jwt) {
    console.error("JWT token not found");
    throw new Error("JWT token not found");
  }

  const Authorization = `Bearer ${jwt}`;

  return {
    headers: { Authorization },
  };
};

export const submitOrder = createAsyncThunk(
  "order/submit",
  async (order, { rejectWithValue }) => {
    try {
      const config = getConfig();
      console.log("Request config:", config);

      const response = await axios.post(
        "http://100.27.228.237/api/v1/cart/items/",
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

const orderSlice = createSlice({
  name: "order",
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitOrder.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to submit order";
      });
  },
});

export default orderSlice.reducer;
