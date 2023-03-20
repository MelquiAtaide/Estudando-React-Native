import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export function Botao() {
    return (
        <TouchableOpacity onPress={() => console.log("Clicou!")}>
            <View style={styles.botaoContainer}>
                <Text style={styles.botaoTexto}>Comprar</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botaoContainer: {
        borderRadius: 10,
        backgroundColor: '#98FB98',
        padding: 10
    },
    botaoTexto: {
        color: 'white'
    }
});