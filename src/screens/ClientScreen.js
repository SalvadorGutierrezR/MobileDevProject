import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { CustomInput } from '../components/CustomInput'
import { SelectionContext } from '../navigation/SelectionProvider'
import { useNavigation } from '@react-navigation/native'

const ClientScreen = () => {

    const navigation = useNavigation();

    const { selections, setSelections } = useContext(SelectionContext);

    const { client, email } = selections;

    const onPress = () => {
        navigation.navigate('PropertiesScreen');
    }

    return(
        <View style={globalStyles.mainContainer}>
            <Text style={globalStyles.titleText}>Ingresa la información de tu cliente</Text>
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    marginTop: 20,
                }}
            >
                <CustomInput
                    label="Nombre"
                    value={client}
                    onChangeText={(text) => setSelections(prev => ({...prev, client: text}))}
                />
                <CustomInput
                    label="Correo electrónico"
                    value={email}
                    onChangeText={(text) => setSelections(prev => ({...prev, email: text}))}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
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
                    onPress={onPress}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                        }}
                    >Continuar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ClientScreen

const styles = StyleSheet.create({})