import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, Input } from '@rneui/base';
import * as Yup from 'yup';
import { Formik } from 'formik';

export interface LoginscreenProps {
}

export function LoginScreen (props: LoginscreenProps) {

    const [ resultado, setResultado ] = useState<null|'logado'|'falhou'>(null);

    const handleLogin = ({email, senha}:any) => {
        if (email.trim() == 'teste@teste.com' && senha.trim() == '12345678') 
            setResultado('logado')
        else
            setResultado('falhou')
        }
        
    return (
        <View style={styles.background}>
            <Formik
               initialValues={{email: '', senha: ''}}
                validationSchema={Yup.object({
                    email: Yup.string().required('Informe o e-mail').email('E-mail não válido'),
                    senha: Yup.string().required('Informe a senha')
                                .min(8,'A senha precisa ter 8 caracteres')}
                    )}
                onSubmit={handleLogin}>
                    {({errors, handleChange, handleSubmit}) => (
                        <>
                        <Image source={require('../../assets/imgs/logo.png')} style={styles.logo} />
                        <View style={styles.container}>
                            <Input placeholder='Digite seu e-mail'
                                leftIcon={{ name: 'person', color: 'white' }}
                                onChangeText={handleChange('email')} />
                            { errors.email && <Text style={styles.falha}>{errors.email}</Text>}

                            <Input placeholder='Digite sua senha'
                                leftIcon={{ name: 'lock', color: 'white' }}
                                onChangeText={handleChange('senha')}
                                secureTextEntry={true} />
                            { errors.senha && <Text style={styles.falha}>{errors.senha}</Text>}

                            <Button title="Logar" 
                                    containerStyle={{ borderRadius: 10, marginTop: 10 }} 
                                    onPress={() => handleSubmit()}/>
                        </View>
                        <Text style={styles.cadastrar}>
                            Não possui conta? Clique aqui e cadastre-se
                        </Text>
                        { resultado == 'logado' && <Text style={styles.sucesso}>
                            Logado com sucesso
                        </Text>}
                        { resultado == 'falhou' && <Text style={styles.falha}>
                            Email ou senha incorreto
                        </Text>}
                    </>
                    )}
            </Formik>
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

    },
    sucesso: {
        color: 'green',
        textAlign: 'center'
    },
    falha: {
        color: 'red',
        textAlign: 'center'
    }
});