import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import ItemsCard from '../components/ItemsCard'
import { SelectionContext } from '../navigation/SelectionProvider'
import FloatingButton from '../components/FloatingButton'

const ItemsScreen = () => {

    const { selections, setSelections, loaders } = useContext(SelectionContext);

    return(
        <View style={globalStyles.mainContainer}>
            <Text style={globalStyles.titleText}>Selecciona los ítems de tu preferencia</Text>
            <FlatList
                data={loaders.items}
                renderItem={({ item }) => (
                    <ItemsCard item={item} />
                )}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
            />
            <FloatingButton
                screen="WorkersScreen"
            />
        </View>
    )
}

export default ItemsScreen

const styles = StyleSheet.create({

})