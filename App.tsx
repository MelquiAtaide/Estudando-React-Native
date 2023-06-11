import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screens/login';
import { CadastroScreen } from './src/screens/cadastro';
import { HomeScreen } from './src/screens/home';
import { Product } from './src/components/product';
import { ProdutoScreen } from './src/screens/produto';
import { CategoriasScreen } from './src/screens/categorias';
import { NavegacaoPrincipal } from './src/navegations/configNavegacaoPrincipal';
import { NavegacaoLogin } from './src/navegations/configNavegacaoLogin';


export default function App() {
  return (
    // <LoginScreen/>
    // <CadastroScreen/>
    // <NavegacaoPrincipal/>
    <NavegacaoLogin />
  );
}
