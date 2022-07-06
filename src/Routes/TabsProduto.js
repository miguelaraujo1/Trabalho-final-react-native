import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListarProdutos from "../screens/Produtos";
import CadastrarProdutos from "../screens/Produtos/CadastrarProdutos";
import ExibirProduto from "../screens/Produtos/ExibirProduto";
import { Ionicons } from "@expo/vector-icons";
import { Button, Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { SignScreen} from "../screens/SignScreen";
import { QuemSomos} from "../screens/QuemSomos";
import { useContext } from 'react';
// import { AuthContext } from '../contexts/Auth'
import { ButtonLogout } from "../components/ButtonStyle/ButtonStyle";
import { LogOut } from "../screens/LogOut";


const Tabs = createBottomTabNavigator();

export const TabsProduto = () => {
  // const {logout} = useContext(AuthContext)

  // const handleLogout = () => {
  //   logout()
  // }

  return (
    <>
      <Tabs.Navigator screenOptions={{tabBarActiveTintColor:"white",tabBarStyle:{backgroundColor:"#e03404", borderTopColor:"white", borderTopWidth:2.6}}} >
        {/* BUTTON FICTICIO */}
        
        <Tabs.Screen
          name="Listar"
          component={ListarProdutos}
          options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            if(focused){
                return <Ionicons name="search" size={size} color={color}/>
            }
            return <Ionicons name="search-outline" size={size} color={color}/>
          }  }}
        />
        <Tabs.Screen
          name="Cadastrar"
          component={CadastrarProdutos}
          options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            if(focused){
                return <Ionicons name="add" size={size} color={color}/>
            }
            return <Ionicons name="add-outline" size={size} color={color}/>
          }  }}
        />
        <Tabs.Screen
          name="Log Out"
          component={LogOut}
          options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            if(focused){
                return <Ionicons name="power" size={size} color={color}/>
            }
           return(
              // <ButtonLogout onpress={handleLogout}> 
              <Ionicons name="power-outline" size={size} color={color}/>
              // </ButtonLogout> 
           )
          }  }}
        />
      </Tabs.Navigator>
    </>
  );
};
