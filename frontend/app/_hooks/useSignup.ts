"use client"

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axiosClient from "../_utils/axiosClient";

export const useSign = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (
    firstName,
    lastName,
    university,
    speciality,
    email,
    phone,
    password,
    passwordConfirm
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosClient.post("/users/signup", {
        firstName,
        lastName,
        university,
        speciality,
        email,
        phone,
        password,
        passwordConfirm,
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

  return { signup, isLoading, error };
};
