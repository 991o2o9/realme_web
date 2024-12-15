import { createSlice } from "@reduxjs/toolkit";
import {
  checkAuth,
  checkCode,
  handleLogin,
  handleRegister,
} from "../Api/AuthApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    tokens: null,
    error: null,
    isSuccess: false,
  },
  reducers: {
    handleLogOut(state) {
      localStorage.removeItem("tokens");
      localStorage.removeItem("email");
      state.currentUser = null;
      state.tokens = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(handleRegister.fulfilled, (state) => {
      state.isSuccess = true;
      state.error = null;
    });
    builder.addCase(handleRegister.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.currentUser = action.payload.currentUser;
      state.tokens = action.payload.tokens;
      state.error = null;
    });
    builder.addCase(handleLogin.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.currentUser = action.payload.currentUser;
      state.tokens = action.payload.tokens;
      state.error = null;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.error = action.payload;
    });
    builder.addCase(checkCode.fulfilled, (state) => {
      state.isSuccess = true;
      state.error = null;
    });
    builder.addCase(checkCode.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { handleLogOut } = authSlice.actions;
export default authSlice.reducer;
