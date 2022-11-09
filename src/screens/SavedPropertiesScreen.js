import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import { globalStyles } from '../styles/GlobalStyles';
import LogOut from '../components/LogOut';
import SavedCard from '../components/SavedCard';
import firestore from '@react-native-firebase/firestore';

const SavedPropertiesScreen = () => {

    const { user } = useContext(AuthContext);

    const [saved, setSaved] = useState({});

    useEffect(() => {
        getSaved();
    }, []);
    
    const getSaved = async () => {
        const saved = await firestore().collection('saved').where('agent', '==', user.uid).get();
        const documents = saved.docs.map(doc => doc.data());
        setSaved(documents);
    }


    return(
        <View style={globalStyles.mainContainer}>
            <LogOut/>
            <Text style={globalStyles.titleText}>Presupuestos guardados</Text>
            <Text style={globalStyles.subtitleText}>Numero de Ventas: { saved.length }</Text>
            <FlatList
                data={saved}
                renderItem={({ item }) => (
                    <SavedCard saved={item}/>
                )}
                keyExtractor={item => item.client}

            />
        </View>
    )
}

export default SavedPropertiesScreen

const styles = StyleSheet.create({})