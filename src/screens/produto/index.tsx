import React, { useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, Alert, ToastAndroid } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import { ModalComprar } from "../../components/modalComprar";

export interface ProdutoScreenProps {
}

export function ProdutoScreen (props: ProdutoScreenProps) {

    const modal = React.useRef<Modalize>();

    const abrir = () => {
        try {
          modal.current?.open();
        } catch (erro) {
          console.log(erro)
        }
    }

    const confirmaCompra = () => {
        ToastAndroid.show('Compra realizada', ToastAndroid.LONG);
        modal.current?.close();
    }

    return (
        <GestureHandlerRootView style={styles.container}>
          <Image
            style={styles.imagem}
            source={require('../../assets/imgs/hamburguer01.jpg')}/>
            <View style={styles.descricaoContainer}>
            <Text style={styles.titulo}>Hamburguer de Carne</Text>
            <Text style={styles.preço}>R$ 29,99</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.botaoCarrinho}>
                <Icon name="shopping-cart" size={25} color="#9ACD32"/>
                <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoCompra} onPress={abrir}>
                <Text style={styles.buttonText}>Comprar</Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={styles.descricaoContainer}>
                <Text style={styles.descricao}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur vel metus non aliquam. Integer molestie leo sapien, vel vehicula nisi facilisis a. Donec tincidunt malesuada metus tincidunt volutpat. Praesent mi dolor, mollis et dapibus non, porta vel lorem. Vivamus eget ligula at erat bibendum cursus vitae sit amet quam. 
                </Text>
            </View>
          <Modalize 
                ref={modal}
                // modalHeight={200}>
                // snapPoint={180}
                adjustToContentHeight
                childrenStyle={{ height: 500 }}>
            <ModalComprar/>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.botaoCancelar} onPress={() => {
                    Alert.alert('Cancelar', 'Deseja realmente cancelar a compra?', [
                    { text: 'Sim', onPress: ()=> modal.current?.close()},
                    { text: 'Não'}])}}>
                    <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoConfirmar} onPress={confirmaCompra}>
                    <Text style={styles.buttonText}>Confirmar compra</Text>
                </TouchableOpacity>
            </View>
            </Modalize>
        </GestureHandlerRootView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      imagem: {
        width: '100%',
        height: '40%',
      },
      descricaoContainer: {
        padding: 20,
      },
      titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      descricao: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'left',
      },
      preço: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
      },
      buttonContainer: {
        flexDirection: 'row',
      },
      botaoCompra: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoCarrinho: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 5,
        marginRight: 10,
        width: '50%'
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      botaoCancelar: {
        backgroundColor: 'tomato',
        padding: 10,
        borderRadius: 5,
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
      },
      botaoConfirmar: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20
      }
    });

function persist() {
    throw new Error("Function not implemented.");
}
