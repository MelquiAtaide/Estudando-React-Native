import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialIcons } from '@expo/vector-icons';
import { HomeScreen } from '../screens/home';
import { CategoriasScreen } from '../screens/categorias';
import { ProdutoScreen } from '../screens/produto';
import { CarrinhoScreen } from '../screens/carrinho';
import { Busca } from '../components/busca';
import { LoginScreen } from '../screens/login';
import { CadastroScreen } from '../screens/cadastro';


const Tab = createBottomTabNavigator();
const ProdutosStack = createStackNavigator();

function MyStack() {
    return (
      <ProdutosStack.Navigator screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#9ACD32' },
      }}>
        <ProdutosStack.Screen name="Home" component={HomeScreen} options={{
          headerRight: () => <Busca />
        }}/>
        <ProdutosStack.Screen name="LoginScreen" component={LoginScreen} />
        <ProdutosStack.Screen name="Produto Screen" component={ProdutoScreen} />
        <ProdutosStack.Screen name="CadastroScreen" component={CadastroScreen} />
      </ProdutosStack.Navigator>
    );
}

export function NavegacaoPrincipal() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarActiveBackgroundColor: 'green',
                tabBarInactiveBackgroundColor: '#9ACD32',
                tabBarActiveTintColor: 'white'
            }}>
                <Tab.Screen name="HomeScreen" component={MyStack} options={{ 
                    tabBarLabel:"Home",
                    tabBarIcon:() => <MaterialIcons name="home" size={20}/>}}/>
                <Tab.Screen name="Carrinho" component={CarrinhoScreen} options={{ 
                    tabBarLabel:"Carrinho",
                    tabBarIcon:() => <MaterialIcons name="shopping-cart" size={20}/>}}/>
                <Tab.Screen name="Categorias" component={CategoriasScreen} options={{ 
                    tabBarLabel:"Categorias",
                    tabBarIcon:() => <MaterialIcons name="view-module" size={20}/>}}/>
            </Tab.Navigator>
      </NavigationContainer>
    );
}