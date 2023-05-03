import * as React from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const produtos = [
    {
        id:'001',
        imagem: require('../../assets/imgs/hamburguer01.jpg'),
        titulo:'Hamburguer de Carne',
        preco:'30.00'
    },
    {
        id:'002',
        imagem: require('../../assets/imgs/hamburger-frango.jpg'),
        titulo:'Hamburguer de Frango',
        preco:'25.00'
    },
    {
        id:'003',
        imagem: require('../../assets/imgs/nuggetFrango01.jpg'),
        titulo:'Nugget de Frango',
        preco:'30.00'
    },
    {
        id:'004',
        imagem: require('../../assets/imgs/almondega03.jpg'),
        titulo:'Almondega de Carne',
        preco:'30.00'
    },
]

export interface ProductProps {

}

export function Product(props: ProductProps) {
    const navegacao = useNavigation<any>();
    return (
        
            <FlatList 
                data={produtos}
                keyExtractor={item=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.produtos} onPress={() => navegacao.navigate('Produto Screen')}>
                        <Image source={item.imagem} 
                                style={{height: 155, 
                                        width: '100%'}}/>
                        <View style={styles.cardInfo}>
                            <Text style={{ height: 40, 
                                           width: 150, 
                                           padding: 2.1 }}>
                                    {item.titulo}</Text>
                            <Text style={{ height: 25, 
                                           width: '95%', 
                                           paddingBottom: 3, 
                                           fontSize: 18, 
                                           color: 'green' }}>
                                    R$ {item.preco}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />  
    )
}

const styles = StyleSheet.create({
    produtos: {
        flex: 1,
        backgroundColor: '#333333',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 4,
    },
    cardInfo: {
        height: 65,
        width: '95%',
        flexDirection: 'column',
        alignItems: 'center'
    },
});