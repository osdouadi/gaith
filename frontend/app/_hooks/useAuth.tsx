"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axiosClient from "../_utils/axiosClient";

// Define the User interface
interface User {
  firstName: string;
  lastName: string;
  university: string;
  speciality: string;
  email: string;
  phone: string;
  id: string;
  token: string;
}

// Define the AuthContextType interface
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (
    firstName: string,
    lastName: string,
    university: string,
    speciality: string,
    email: string,
    phone: string,
    password: string,
    passwordConfirm: string,
    id: string,
    token: string
  ) => Promise<void>;
}

// Create the initial context value
const initialAuthContext: AuthContextType = {
  user: null,
  loading: false,
  login: async () => {},
  logout: async () => {},
  signup: async () => {},
};

// Create the AuthContext
const AuthContext = createContext<AuthContextType>(initialAuthContext);

// Define the props interface for AuthProvider
interface AuthProviderProps {
  children: React.ReactNode;
}

const SaveDataToLocalStorage = (userData: User | null) => {
  localStorage.setItem("user", JSON.stringify(userData));
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Define state variables for user and loading
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

useEffect(() => {
  const storedUserData = localStorage.getItem("user");

  if (storedUserData) {
    setUser(JSON.parse(storedUserData));
  } else if (!user) {
    setUser(null); // Set user to null only if no user data is found and user context is null
  }
  setLoading(false);
}, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await axiosClient.post("/users/login", {
        email,
        password,
      });
      const userData = response.data;
      setUser(userData);
      SaveDataToLocalStorage(userData);
    } catch (error) {
      console.log("error => ", error);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await fetch("api/logout");
    setUser(null);
    localStorage.removeItem("user");
  };

  const signup = async (
    firstName: string,
    lastName: string,
    university: string,
    speciality: string,
    email: string,
    phone: string,
    password: string,
    passwordConfirm: string
  ) => {
    setLoading(true);
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
      const userData = response.data.user;
      setUser(userData);
      SaveDataToLocalStorage({
        firstName: userData.data.user.firstName,
        lastName: userData.data.user.lastName,
        university: userData.data.user.university,
        speciality: userData.data.user.speciality,
        email: userData.data.user.email,
        phone: userData.data.user.phone,
        id: userData.data.user.id,
        token: userData.token,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
