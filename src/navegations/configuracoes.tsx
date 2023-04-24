import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home';
import { CategoriasScreen } from '../screens/categorias';

const Tab = createBottomTabNavigator();
export function NavegacaoPrincipal() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="tela1" component={HomeScreen} />
                <Tab.Screen name="tela2" component={CategoriasScreen} />
                {/* <Tab.Screen name="tela3" component={Tela3Screen} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}