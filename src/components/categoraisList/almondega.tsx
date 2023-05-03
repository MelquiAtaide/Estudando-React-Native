import * as React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

const produtos = [
    {
        id:'001',
        imagem: require('../../assets/imgs/almondega03.jpg'),
        titulo:'Almondega Temperada',
        preco:'30.00'
    },
]

export interface CategoriasListAlmondegaProps {

}

export function CategoriasListAlmondega(props: CategoriasListAlmondegaProps) {
    return (
        
            <FlatList 
                data={produtos}
                keyExtractor={item=>item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <View style={styles.produtos}>
                        <Image source={item.imagem} 
                                style={{height: 180, 
                                        width: '100%'}}/>
                        <View style={styles.cardInfo}>
                            <Text style={{ height: 40, 
                                           width: 150, 
                                           padding: 2.1,
                                           justifyContent: 'center' }}>
                                    {item.titulo}</Text>
                        </View>
                    </View>
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