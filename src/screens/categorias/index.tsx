import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, FlatList } from 'react-native';
import { Button, Input } from '@rneui/base';
import { Product } from '../../components/product';
import { ProductAll } from '../../components/list';
import { CategoriasList } from '../../components/categoraisList/carnes';
import { CategoriasListFrango } from '../../components/categoraisList/frango';
import { CategoriasListAlmondega } from '../../components/categoraisList/almondega';
import { CategoriasListLinguica } from '../../components/categoraisList/linguica';

export interface CategoriasScreenProps {
}

export function CategoriasScreen (props: CategoriasScreenProps) {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Input placeholder='Buscar'
                        leftIcon={{ name: 'search', color: 'white' }} 
                        style={{height: 10,}}/>
            </View>
            <ScrollView>
            <View style={styles.conteudo}>
                <View style={styles.section}>
                    <Text style={{marginLeft: 4, marginTop: 1, color: 'green'}}>Carne</Text>
                    <View style={styles.containerProdutos}>
                        <CategoriasList/>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={{marginLeft: 4, marginTop: 1, color: 'green'}}>Frango</Text>
                    <View style={styles.containerProdutos}>
                        <CategoriasListFrango/>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={{marginLeft: 4, marginTop: 1, color: 'green'}}>Almondega</Text>
                    <View style={styles.containerProdutos}>
                        <CategoriasListAlmondega/>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={{marginLeft: 4, marginTop: 1, color: 'green'}}>Linguiça</Text>
                    <View style={styles.containerProdutos}>
                        <CategoriasListLinguica/>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'blue'
    },

    head:{
        // position: 'absolute',
        backgroundColor:'#9ACD32',
        paddingTop: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    conteudo:{
        flex: 1,
        paddingTop: 5, 
        paddingBottom: 50,
        backgroundColor: '#333333'
    },
    footer:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        backgroundColor: 'gray'
    },

    section: {
        height: 250,
        backgroundColor: '#1d201f',
        margin: 5
    },
    sessaoDestaque: {
        height: '100%',
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