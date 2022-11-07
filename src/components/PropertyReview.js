import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { numbersWithCommas } from '../helpers/numbersWithCommas'

const PropertyReview = ({ property }) => {

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

    return(
        <View style={styles.cardContainerProperty}>
            <Text style={globalStyles.subtitleText}>{ property.name }</Text>
            <FlatList
                horizontal
                data={property.images}
                renderItem={(image) => renderProperties(image)}
                keyExtractor={item => item}
            />
            <View>
                <Text style={globalStyles.generalText}>Dirección: { property.address }</Text>
                <Text style={globalStyles.generalText}>Descripción: { property.description }</Text>
                <Text style={globalStyles.generalText}>Precio: ${`${numbersWithCommas(property.price)} `}</Text>
            </View>
        </View>
    )
}
{}
export default PropertyReview

const styles = StyleSheet.create({
    cardContainerProperty: {
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
    },
})