import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { SelectionContext } from '../navigation/SelectionProvider';
import { globalStyles } from '../styles/GlobalStyles';
import WorkerCard from '../components/WorkerCard';

const WorkersScreen = () => {

    const { loaders } = useContext(SelectionContext);

    return(
        <View style={globalStyles.mainContainer}>
            <Text style={globalStyles.titleText}>Selecciona un trabajador</Text>
            <FlatList
                data={loaders.workers}
                renderItem={({ item }) => (
                    <WorkerCard worker={item} />
                )}
                keyExtractor={item => item.name}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default WorkersScreen

const styles = StyleSheet.create({})