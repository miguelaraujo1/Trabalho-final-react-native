
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListarProdutos from "../screens/Produtos";


const Tabs = createBottomTabNavigator()

const RotaProduto = () => {

    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Listar" component={ListarProdutos} options={{headerShown: false}}/>
        </Tabs.Navigator>
    )
}

export default RotaProduto