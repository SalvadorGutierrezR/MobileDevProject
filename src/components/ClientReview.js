import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'

const ClientReview = ({ client, email }) => {
    return(
        <View style={{ marginBottom: 10}}>
            <Text style={ globalStyles.generalText }>Nombre: { client }</Text>
            <Text style={ globalStyles.generalText }>Email: { email }</Text>
        </View>
    )
}

export default ClientReview

const styles = StyleSheet.create({})