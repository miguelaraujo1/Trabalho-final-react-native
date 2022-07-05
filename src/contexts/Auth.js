import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log("login auth", { email, password });
    //verificação de senha correta
    if (password === "secret") {
      setUser({ id: "123", email });
      navigation.navigate("Root");
    } else {
        alert("dados incorretos, por favor tente novamente.")
    }
  };

  const logout = () => {
    console.log("logout");
    setUser(null);
    navigation.navigate("SignScreen");
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
