import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import QuemSomos from "../screens/QuemSomos/index"
import RotaProduto from "./RotaProduto";

const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                    <Stack.Screen
                        name="Produto"
                        component={RotaProduto}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                    name='QuemSomos'
                    component={QuemSomos}
                    options={{headerShown: false}}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes