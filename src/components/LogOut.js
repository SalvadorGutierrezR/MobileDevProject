import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../navigation/AuthProvider'

const LogOut = () => {
    const { logout } = useContext(AuthContext);

    return(
        <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => logout()}
        >
            <Icon
                name="log-out-outline"
                size={30}
                color="red"
            />
        </TouchableOpacity>
    )
}

export default LogOut

const styles = StyleSheet.create({
    floatingButton:{
        backgroundColor: 'white',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        right: 10,
    }
})