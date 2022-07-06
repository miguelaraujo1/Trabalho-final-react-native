import { useEffect, useContext } from "react";
import { View } from "react-native";
import { AuthContext } from "../../contexts/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


export const LogOut = () => {
    const {setUser} = useContext(AuthContext)
    const navigation = useNavigation();
    
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