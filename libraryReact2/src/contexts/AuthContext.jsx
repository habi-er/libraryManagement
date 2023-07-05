import React, { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);
  const navigate = useNavigate();

  const login = (email, password) => {
    const logUser = {
      id: "a1",
      email,
    };
    localStorage.setItem("bookUser", JSON.stringify(logUser));
    if (password === "1234") {
      setUser(logUser);
      navigate("/");
    }
  };
  const logout = () => {
    localStorage.removeItem("bookUser");
    setUser(null);
    navigate("/login");
  };
  const value = useMemo(() => ({ login, logout, authed: !!user }), [login, logout, user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
