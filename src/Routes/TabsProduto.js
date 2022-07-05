
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListarProdutos from "../screens/Produtos";
import CadastrarProdutos from "../screens/Produtos/CadastrarProdutos";
import ExibirProduto from "../screens/Produtos/ExibirProduto";


const Tabs = createBottomTabNavigator()

const TabsProduto = () => {

    return(
        <>
        <Tabs.Navigator>
            <Tabs.Screen name="Listar" component={ListarProdutos} options={{headerShown: false}}/>
            <Tabs.Screen name="Cadastrar" component={CadastrarProdutos} options={{headerShown: false}}/>
        </Tabs.Navigator>
        </>
    )
}

export default TabsProduto