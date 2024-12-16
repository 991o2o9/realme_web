import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://100.27.228.237/api/v1";

export const handleRegister = createAsyncThunk(
  "auth/register",
  async (formData) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(`${API_URL}/register/`, formData);
      return "Регистрация прошла успешно";
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

export const handleLogin = createAsyncThunk(
  "auth/login",
  async ({ formData, email }) => {
    try {
      const { data } = await axios.post(`${API_URL}/login/`, formData);
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("email", email);
      const { username, password } = formData;
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      return { jwt: data.jwt, currentUser: email };
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);
