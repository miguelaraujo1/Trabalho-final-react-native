import React, { createContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = AsyncStorage.getItem("user");
    if (recoveredUser) {
      setUser(recoveredUser);
      //anotar
    }
    setLoading(false)
  }, []);

  const login = (email, password) => {
    console.log("login auth", { email, password });

    const loggedUser = {
      id: "123",
      email,
    };

    AsyncStorage.setItem("user", JSON.stringify(loggedUser));

    //verificação de senha correta
    if (password === "secret") {
      setUser(loggedUser);
      navigation.navigate("Root");
    } else {
      alert("dados incorretos, por favor tente novamente.");
    }
  };

  const logout = () => {
    console.log("logout");
    AsyncStorage.removeItem('user')
    setUser(null);
    navigation.navigate("SignScreen");
  };

  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
