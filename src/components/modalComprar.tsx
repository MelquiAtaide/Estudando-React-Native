import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ToastAndroid } from "react-native";

export interface modalComprarProps {
}

export function ModalComprar (props: modalComprarProps) {

    const [quantidade, setQuantidade] = useState(1);

    const aumentarQuantidade = () => {
        setQuantidade(quantidade + 1);
      }
    
    const diminuirQuantidade = () => {
        if (quantidade > 1) {
          setQuantidade(quantidade - 1);
        }
    }

    return (
        <View style={styles.container}>
            <Image
            style={styles.imagem}
            source={require('../assets/imgs/hamburguer01.jpg')}/>
            <View style={styles.descricaoContainer}>
                <Text style={styles.titulo}>Hamburguer de Carne</Text>
                <Text style={styles.preço}>R$ 29,99</Text>
                <View style={styles.containerQuantidade}>
                <TouchableOpacity onPress={diminuirQuantidade}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                    <Text style={styles.quantidade}>{quantidade}</Text>
                <TouchableOpacity onPress={aumentarQuantidade}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
      },
      imagem: {
        width: 150,
        height: 150,
        margin: 20
      },
      titulo: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      preço: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'left',
      },
      descricaoContainer: {
        padding: 20
      },
      containerQuantidade: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 100,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
      },
      buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginHorizontal: 15
      },
      quantidade: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
      },
});