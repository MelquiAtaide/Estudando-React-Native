import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Button, Input } from '@rneui/base';

export interface HomeScreenProps {
}

export function HomeScreen (props: HomeScreenProps) {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Input placeholder='Buscar'
                        leftIcon={{ name: 'search', color: 'white' }} 
                        style={{height: 10,}}/>
            </View>
            <View style={styles.conteudo}>
                <ScrollView>
                    <View style={styles.section}>
                        <Text style={{marginLeft: 4, marginTop: 1, color: 'green'}}>Promoção</Text>
                        <View style={styles.containerProdutos}>
                            <View style={styles.produtos}>
                                <Image source={require('../../assets/imgs/hamburguer01.jpg')} 
                                    style={{height: 155, width: '100%'}}/>
                                <View style={styles.cardInfo}>
                                    <Text style={{height: 40, width: '95%', paddingBottom: 3}}>Título do produto vai ficar aqui</Text>
                                    <Text style={{height: 25, width: '95%', paddingBottom: 3, fontSize: 18, color: 'green'}}>R$ 30,00</Text>
                                </View>
                            </View>
                            <View style={styles.produtos}>
                                <Image source={require('../../assets/imgs/linguica.png')} 
                                    style={{height: 155, width: '100%'}}/>
                                <View style={styles.cardInfo}>
                                    <Text style={{height: 40, width: '95%', paddingBottom: 3}}>Título do produto vai ficar aqui</Text>
                                    <Text style={{height: 25, width: '95%', paddingBottom: 3, fontSize: 18, color: 'green'}}>R$ 30,00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={{marginLeft: 4, marginTop: 1, color: 'green'}}>Mais vendidos</Text>
                        <View style={styles.containerProdutos}>
                            <View style={styles.produtos}>
                                <Image source={require('../../assets/imgs/hamburguer01.jpg')} 
                                    style={{height: 155, width: '100%'}}/>
                                <View style={styles.cardInfo}>
                                    <Text style={{height: 40, width: '95%', paddingBottom: 3}}>Título do produto vai ficar aqui</Text>
                                    <Text style={{height: 25, width: '95%', paddingBottom: 3, fontSize: 18, color: 'green'}}>R$ 30,00</Text>
                                </View>
                            </View>
                            <View style={styles.produtos}>
                                <Image source={require('../../assets/imgs/linguica.png')} 
                                    style={{height: 155, width: '100%'}}/>
                                <View style={styles.cardInfo}>
                                    <Text style={{height: 40, width: '95%', paddingBottom: 3}}>Título do produto vai ficar aqui</Text>
                                    <Text style={{height: 25, width: '95%', paddingBottom: 3, fontSize: 18, color: 'green'}}>R$ 30,00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Text style={{marginLeft: 4, marginTop: 1, color: 'green'}}>Destaques</Text>
                        <View style={styles.containerProdutos}>
                            <View style={styles.produtos}>
                                <Image source={require('../../assets/imgs/hamburguer01.jpg')} 
                                    style={{height: 155, width: '100%'}}/>
                                <View style={styles.cardInfo}>
                                    <Text style={{height: 40, width: '95%', paddingBottom: 3}}>Título do produto vai ficar aqui</Text>
                                    <Text style={{height: 25, width: '95%', paddingBottom: 3, fontSize: 18, color: 'green'}}>R$ 30,00</Text>
                                </View>
                            </View>
                            <View style={styles.produtos}>
                                <Image source={require('../../assets/imgs/linguica.png')} 
                                    style={{height: 155, width: '100%'}}/>
                                <View style={styles.cardInfo}>
                                    <Text style={{height: 40, width: '95%', paddingBottom: 3}}>Título do produto vai ficar aqui</Text>
                                    <Text style={{height: 25, width: '95%', paddingBottom: 3, fontSize: 18, color: 'green'}}>R$ 30,00</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.footer}>
                
            </View>
        </View>

        
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue'
    },

    head:{
        flex: 1,
        backgroundColor:'#9ACD32',
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    conteudo:{
        flex: 10,
        backgroundColor: '#333333'
    },
    footer:{
        flex: 1,
        backgroundColor: 'pink'
    },

    section: {
        height: 250,
        backgroundColor: '#1d201f',
        margin: 5
    },
    containerProdutos: {
        flex: 1,
        flexDirection: 'row',
        margin: 2,
        backgroundColor: '#1d201f'
    },
    produtos: {
        flex: 1,
        backgroundColor: '#333333',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 4
    },
    cardInfo: {
        height: 65,
        width: '95%',
        flexDirection: 'column',
        alignItems: 'center'
    },

});