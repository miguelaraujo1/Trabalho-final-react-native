import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
// import { AppStack } from "./AppStack";
// import { AuthStack } from "./AuthStack";
// import { HomeScreen } from "../screens/HomeScreen";
import { SignScreen } from "../screens/SignScreen";
// import { SettingScreen } from "../screens/SettingScreen";
import { AuthProvider} from "../contexts/Auth";
import {Home} from "../screens/Home";
import {QuemSomos} from "../screens/QuemSomos";
const Stack = createNativeStackNavigator();

export const Routes = () => {
//   const navigation = useNavigation();
//   const Private = ({children}) => {
//     const { authenticated } = useContext(AuthContext);

//     //proteção de endpoint da url
//     if (!authenticated) {
//       return navigation.navigate("SignIn");
//     }
//     return children
//   };

  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name="SignScreen" component={SignScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="QuemSomos" component={QuemSomos} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};