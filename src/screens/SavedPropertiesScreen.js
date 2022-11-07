import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import { globalStyles } from '../styles/GlobalStyles';
import LogOut from '../components/LogOut';
import SavedCard from '../components/SavedCard';
import { SelectionContext } from '../navigation/SelectionProvider';

const SavedPropertiesScreen = () => {

    const { loaders } = useContext(SelectionContext);

    const { saved } = loaders;

    return(
        <View style={globalStyles.mainContainer}>
            <LogOut/>
            <Text style={globalStyles.titleText}>Presupuestos guardados</Text>
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