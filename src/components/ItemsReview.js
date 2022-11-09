import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { numbersWithCommas } from '../helpers/numbersWithCommas';

const ItemsReview = ({ item }) => {
    const { image, name, description, price, hours} = item;
    return(
        <View 
            style={styles.card}
        >
            <Image
                style={styles.image}
                source={{uri: image}}
            />
            <View style={styles.textContainer}>
                <Text style={{...globalStyles.subtitleText, textTransform: 'capitalize'}}>{ name }</Text>
                <Text style={globalStyles.generalText}>{ description.length > 100 ? description.substring(0, 100) + '...' : description }</Text>
                <Text style={globalStyles.generalText}>Horas para completar: { hours }</Text>
                <Text style={globalStyles.generalText}>Precio: ${`${numbersWithCommas(price)} `}</Text>
            </View>
        </View>
    )
}

export default ItemsReview

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        width: '100%',
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
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
    image:{
        width: 100,
        height: 100,
    },
    textContainer:{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor:'white'
    }
})