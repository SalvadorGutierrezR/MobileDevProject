import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { globalStyles } from '../styles/GlobalStyles';
import firestore from '@react-native-firebase/firestore';
import PropertiesCard from '../components/PropertiesCard';
import FloatingButton from '../components/FloatingButton';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SelectionContext } from '../navigation/SelectionProvider';

const PropertiesScreen = () => {

    const { loaders } = useContext(SelectionContext);
    
    return(
        <View style={globalStyles.mainContainer}>
            <Text style={globalStyles.titleText}>Selecciona una propiedad</Text>
            <FlatList
                data={loaders.property}
                renderItem={(property) => <PropertiesCard property={ property }/>}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default PropertiesScreen

const styles = StyleSheet.create({})