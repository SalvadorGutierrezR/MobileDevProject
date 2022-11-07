import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { useNavigation } from '@react-navigation/native'

const SavedCard = ({ saved }) => {

    const navigation = useNavigation();
    
    const { client, property } = saved;
    
    const onPress = () => {
        navigation.navigate('SavedPropertiesDetailsScreen', { saved })
    }

    return(
        <TouchableOpacity 
            style={styles.card}
            onPress={() => onPress()}
            activeOpacity={0.8}
        >
            <View style={styles.textContainer}>
                <Text style={globalStyles.subtitleText}>{ client }</Text>
                <Text style={globalStyles.subtitleText}>{ property.name }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SavedCard

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        width: '100%',
        height: 80,
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
    textContainer:{
        width: '90%',
        height: '100%',
        justifyContent: 'center',
        marginHorizontal: 10,
    }
})