import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListarProdutos from "../screens/Produtos";
import CadastrarProdutos from "../screens/Produtos/CadastrarProdutos";
import ExibirProduto from "../screens/Produtos/ExibirProduto";
import { Ionicons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();


export const TabsProduto = () => {
  return (
    <>
      <Tabs.Navigator screenOptions={{tabBarActiveTintColor:"white",tabBarStyle:{backgroundColor:"#e03404", borderTopColor:"white", borderTopWidth:2.6}}} >
        {/* BUTTON FICTICIO */}
        <Tabs.Screen
          name="Log Out"
          component={CadastrarProdutos}
          options={{ headerShown: false, tabBarIcon: ({ color, size, focused }) => {
            if(focused){
                return <Ionicons name="power" size={size} color={color}/>
            }
            return <Ionicons name="power-outline" size={size} color={color}/>
          }  }}
        />
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
      </Tabs.Navigator>
    </>
  );
};
