import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListarProdutos from "../screens/Produtos";
import CadastrarProdutos from "../screens/Produtos/CadastrarProdutos";


const Tabs = createBottomTabNavigator()

const RotaProduto = () => {

    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Listar" component={ListarProdutos} options={{headerShown: false}}/>
            <Tabs.Screen name="Cadastrar" component={CadastrarProdutos} options={{headerShown: false}}/>
        </Tabs.Navigator>
    )
}

export default RotaProduto