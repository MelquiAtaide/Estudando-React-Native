import * as React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, Input } from '@rneui/base';

export interface LoginscreenProps {
}

export function LoginScreen (props: LoginscreenProps) {
    return (
        <View style={styles.background}>
            <Image source={require('../../assets/imgs/logo.png')} style={styles.logo}/>
            <View style={styles.container}>
                <Input placeholder='Digite seu e-mail'
                        leftIcon={{name:'person', color:'white'}}/>
                <Input placeholder='Digite sua senha' 
                        leftIcon={{name:'lock', color:'white'}}
                        secureTextEntry={true} />
                <Button title="Logar"
                        containerStyle={{borderRadius:10}}/>
            </View>
            <Text style={styles.cadastrar}>Não possui conta? Clique aqui e cadastre-se</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background: { 
        flex: 1,
        backgroundColor: '#98FB98',
        alignItems: 'center',
        justifyContent: 'center'
     },

    container: {
        paddingBottom: '10%',
        width: '90%'
    },
    logo: {
        marginBottom: 10,
        width: '55%',
        height: '29%'
    },
    cadastrar: {
        color: '#708090',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 10,
        textAlign: 'center'

    }
});