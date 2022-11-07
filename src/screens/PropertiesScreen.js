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

    // const [properties, setProperties] = useState([]);

    // useEffect(() => {
    //     getProperties();
    // }, []);

    // const getProperties = async () => {
    //     const properties = await firestore().collection('properties').get();
    //     const documents = properties.docs.map(doc => doc.data());
    //     setProperties(documents);
    // }

    return(
        <View style={globalStyles.mainContainer}>
            <Text style={globalStyles.titleText}>Selecciona una propiedad</Text>
            <FlatList
                data={loaders.property}
                renderItem={(property) => <PropertiesCard property={ property }/>}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
            />
            {/* <FloatingButton
                screen="ItemsScreen"
            /> */}
        </View>
    )
}

export default PropertiesScreen

const styles = StyleSheet.create({})