import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home';
import { LoginScreen } from '../screens/login';
import { CadastroScreen } from '../screens/cadastro';
import { NavegacaoPrincipal } from './configNavegacaoPrincipal';

const LoginStack = createStackNavigator();

function MyStack() {
  return (
    <LoginStack.Navigator> 
      <LoginStack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      <LoginStack.Screen name="Home" component={NavegacaoPrincipal} options={{headerShown: false}}/>
      <LoginStack.Screen name="Cadastro" component={CadastroScreen} options={{ headerTintColor: 'white', title: '', headerStyle: { backgroundColor: '#98FB98' } }}/>
    </LoginStack.Navigator>
  );
}

export function NavegacaoLogin() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}