import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, Input } from '@rneui/base';
import * as Yup from 'yup';
import { Formik } from 'formik';
import DatePicker from 'react-native-date-picker';

export interface CadastroscreenProps {
}

export function CadastroScreen (props: CadastroscreenProps) {
    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)
        
    return (
        <View style={styles.background}>
            <Formik
               initialValues={{email: '', senha: '', nome: '', idade: ''}}
                validationSchema={Yup.object({
                    email: Yup.string().required('Informe o e-mail').email('E-mail não válido'),
                    senha: Yup.string().required('Informe a senha')
                                .min(8,'A senha precisa ter 8 caracteres'),
                    nome: Yup.string().required('Informe seu nome completo'),
                    idade: Yup.number().required('informe sua idade').min(3,'idade não é válida')}
                    )}>
                    {({errors, handleChange, handleSubmit}) => (
                        <>
                        <View style={styles.container}>
                            <Text style={styles.titulo}>Cadastre-se</Text>
                            <Input placeholder='Digite seu nome completo'
                                    leftIcon={{ name: 'person', color: 'white' }}
                                    onChangeText={handleChange('nome')}/>
                                    { errors.email && <Text style={styles.falha}>{errors.nome}</Text>}
                            <Input placeholder='Digite sua idade'
                                    leftIcon={{ name: 'person', color: 'white' }}
                                    onChangeText={handleChange('idade')}/>
                                    { errors.email && <Text style={styles.falha}>{errors.idade}</Text>}
                            {/* <DatePicker 
                                modal open={open} 
                                date={date}
                                onConfirm={(date) => 
                                    {setOpen(false)
                                    setDate(date)
                                }}
                                onCancel={() => {
                                    setOpen(false)
                                }} /> */}

                            <Input placeholder='Digite seu e-mail'
                                leftIcon={{ name: 'mail', color: 'white' }}
                                onChangeText={handleChange('email')} />
                            { errors.email && <Text style={styles.falha}>{errors.email}</Text>}

                            <Input placeholder='Crie sua senha'
                                leftIcon={{ name: 'lock', color: 'white' }}
                                onChangeText={handleChange('senha')}
                                secureTextEntry={true} />
                            { errors.senha && <Text style={styles.falha}>{errors.senha}</Text>}

                            <Button title="Cadastrar" 
                                    containerStyle={{ borderRadius: 10, marginTop: 10 }} 
                                    onPress={() => handleSubmit()}/>
                        </View>
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
    },
    titulo: {
        color: '#8B4513',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
    }
});