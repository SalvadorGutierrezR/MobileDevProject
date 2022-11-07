import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { globalStyles } from '../../styles/GlobalStyles'

import { CustomInput } from '../../components/CustomInput';
import { AuthContext } from '../../navigation/AuthProvider';

const LoginScreen = () => {

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = () => {
        login(email, password);
        // auth().signInWithEmailAndPassword(email, password).then(() => {
        //     console.log('User account created & signed in!');
        // }).catch(error => {
        //     if (error.code === 'auth/email-already-in-use') {
        //         console.log('That email address is already in use!');
        //     }

        //     if (error.code === 'auth/invalid-email') {
        //         console.log('That email address is invalid!');
        //     }

        //     console.error(error);
        // });
    }   

    return(
        <View style={globalStyles.mainContainer}>
            <Text style={globalStyles.logoText}>Eta Carinae</Text>
            <Text style={globalStyles.subtitleText}>Inicia sesión</Text>
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                }}

            >
                <CustomInput
                    label="Correo electrónico"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <CustomInput
                    label="Contraseña"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
                {/* <Text style={globalStyles.generalText}>Correo Electronico</Text>
                <TextInput
                    style={globalStyles.textInputStyle}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={globalStyles.generalText}>Contraseña</Text>
                <TextInput
                    style={globalStyles.textInputStyle}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => setPassword(text)}
                /> */}
                <TouchableOpacity
                    style={{
                        backgroundColor: '#D62828',
                        width: '50%',
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25,
                        marginTop: 20,
                        alignSelf: 'center'
                    }}
                    onPress={() => logIn()}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                        }}
                    >Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})