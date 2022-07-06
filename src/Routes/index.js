import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import { AppStack } from "./AppStack";
// import { AuthStack } from "./AuthStack";
// import { HomeScreen } from "../screens/HomeScreen";
import { SignScreen } from "../screens/SignScreen";
// import { SettingScreen } from "../screens/SettingScreen";
import { AuthProvider } from "../contexts/Auth";
import { Home } from "../screens/Home";
import { QuemSomos } from "../screens/QuemSomos";
import { TabsProduto } from "./TabsProduto";
import { ProdutoProvider } from "../contexts/ProdutoContext";
import ExibirProduto from "../screens/Produtos/ExibirProduto";
const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="SignScreen" component={SignScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Root" component={TabsProduto} options={{ headerShown: false }}/>
            <Stack.Screen name="ExibirProduto" component={ExibirProduto}  />
          <Stack.Screen name="QuemSomos" component={QuemSomos} />

        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};
