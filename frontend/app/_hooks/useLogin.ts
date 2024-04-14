"use client";

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axiosClient from "../_utils/axiosClient";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (
    email,
    password
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosClient.post("/users/login", {
        email,
        password,
      });

      const userData = response.data;

      localStorage.setItem("user", JSON.stringify(userData));

      dispatch({ type: "LOGIN", payload: userData });

      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
