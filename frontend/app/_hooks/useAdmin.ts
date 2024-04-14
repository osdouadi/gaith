"use client";

import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axiosClient from "../_utils/axiosClient";
import { useRouter } from "next/navigation";

export const useAdmin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const router = useRouter();
  const adminLogin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axiosClient.post("/users/admin-auth", {
        email,
        password,
      });

      const adminData = response.data;

      localStorage.setItem("admin", JSON.stringify(adminData));

      dispatch({ type: "LOGIN", payload: adminData });

      setIsLoading(false);
      router.push("/dashboard");
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  return { adminLogin, isLoading, error };
};
