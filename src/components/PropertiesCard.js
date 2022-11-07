import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import { SelectionContext } from '../navigation/SelectionProvider'
import { numbersWithCommas } from '../helpers/numbersWithCommas'

const PropertiesCard = ({ property }) => {

    const navigation = useNavigation();
    const { setSelections } = useContext(SelectionContext);

    const { name, address, description, images, price } = property.item;

    const renderProperties = ( image ) => {

        return(
            <Image
                source={{ uri: image.item }}
                style={{
                    width: 200,
                    height: 200,
                }}
            />
        )
    }

    const onPress = () => {
        navigation.navigate('ItemsScreen');
        setSelections(prev => ({ ...prev, property: property.item }));
    }

    return(
        <View style={styles.cardContainer}>
            <Text style={globalStyles.subtitleText}>{ name }</Text>
            <FlatList
                horizontal
                data={images}
                renderItem={(image) => renderProperties(image)}
                keyExtractor={item => item}
            />
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={1}
            >
                <Text style={globalStyles.generalText}>Dirección: { address }</Text>
                <Text style={globalStyles.generalText}>Descripción: { description }</Text>
                <Text style={globalStyles.generalText}>Precio: ${`${numbersWithCommas(price)} `}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PropertiesCard

const styles = StyleSheet.create({
    image:{
        width: 200,
        height: 200,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    cardContainer: {
        backgroundColor: 'white',
        width: '99%', 
        padding: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 4,
    }
})