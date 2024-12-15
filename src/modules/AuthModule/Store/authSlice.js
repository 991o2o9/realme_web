import { createSlice } from "@reduxjs/toolkit";
import { handleLogin, handleRegister } from "../Api/AuthApi";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    jwt: null,
    error: null,
    isSuccess: false,
  },
  reducers: {
    handleLogOut(state) {
      localStorage.removeItem("jwt");
      localStorage.removeItem("email");
      state.currentUser = null;
      state.jwt = null;
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
      state.jwt = action.payload.jwt;
      state.error = null;
    });
    builder.addCase(handleLogin.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { handleLogOut } = authSlice.actions;
export default authSlice.reducer;
