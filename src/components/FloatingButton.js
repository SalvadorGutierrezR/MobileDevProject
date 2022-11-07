import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const FloatingButton = ({screen}) => {

    const navigation = useNavigation();

    return(
        <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => navigation.navigate(screen)}
        >
            <Icon
                name="arrow-forward"
                size={30}
                color="white"
            />
        </TouchableOpacity>
    )
}

export default FloatingButton

const styles = StyleSheet.create({
    floatingButton:{
        backgroundColor: 'black',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
})