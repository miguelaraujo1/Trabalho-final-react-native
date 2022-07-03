import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import QuemSomos from "../screens/QuemSomos/index"

const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Home'
                    component={Home}
                    options={{headerShown: false}}
                    />
                    <Stack.Screen
                    name='QuemSomos'
                    component={QuemSomos}
                    />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes