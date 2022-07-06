import { useEffect, useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../../contexts/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const LogOut = () => {
    const {setUser} = useContext(AuthContext)
    
    useEffect(()=>{
    console.log("logout");
    AsyncStorage.removeItem('user')
    setUser(null);
    navigation.navigate("SignScreen");
    },[])

    return (
      <View></View>
    );
  };