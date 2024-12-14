import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const handleRegister = createAsyncThunk(
  "auth/register",
  async (formData) => {
    try {
      await axios.post(`API/user/register/`, formData);
      return "Регистрация прошла успешно";
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const handleLogin = createAsyncThunk(
  "auth/login",
  async ({ formData, email }) => {
    try {
      const { data } = await axios.post(`API/user/login/`, formData);
      localStorage.setItem("tokens", JSON.stringify(data));
      localStorage.setItem("email", email);
      return { tokens: data, currentUser: email };
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  try {
    const tokens = JSON.parse(localStorage.getItem("tokens"));
    if (!tokens?.refresh) throw new Error("ТОКЕНЫ НЕ НАЙДЕНЫ.");
    const { data } = await axios.post(
      `API/user/refresh/`,
      {
        refresh: tokens.refresh,
      },
      { headers: { "Content-type": "application/json" } }
    );
    localStorage.setItem(
      "tokens",
      JSON.stringify({ access: data.access, refresh: tokens.refresh })
    );
    return {
      tokens: { access: data.access, refresh: tokens.refresh },
      currentUser: JSON.parse(localStorage.getItem("email")),
    };
  } catch (error) {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    throw new error("Ошибка обновления токенов");
  }
});

export const checkCode = createAsyncThunk(
  "auth/checkCode",
  async (formData) => {
    try {
      await axios.get(
        `API/user/active/${formData.get("email")}/${formData.get(
          "activationCode"
        )}`
      );
      return "Код активирован";
    } catch (error) {
      throw new Error(error);
    }
  }
);
