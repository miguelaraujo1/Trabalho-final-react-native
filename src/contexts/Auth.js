import React, { createContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false)
  }, []);

  const login = (email, password) => {
    console.log("login auth", { email, password });

    const loggedUser = {
      id: "123",
      email,
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));

    //verificação de senha correta
    if (password === "secret") {
      setUser(loggedUser);
      navigation.navigate("Home");
    } else {
      alert("dados incorretos, por favor tente novamente.");
    }
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem('user')
    setUser(null);
    navigation.navigate("SignScreen");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
