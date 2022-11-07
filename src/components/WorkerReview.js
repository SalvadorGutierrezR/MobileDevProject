import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { numbersWithCommas } from '../helpers/numbersWithCommas'

const WorkerReview = ({ worker }) => {
    return(
        <View style={styles.cardWorker}>
            <Image
                style={styles.imageWorker}
                source={{ uri: worker.image }}
            />
            <View
                style={styles.textContainerWorker}
            >
                <View>
                    <Text style={globalStyles.titleText}>{ worker.name }</Text>
                    <Text style={globalStyles.titleText}>{ worker.last_name }</Text>
                </View>
                <Text style={globalStyles.subtitleText}>Experiencia: { worker.experience } años</Text>
                <Text style={globalStyles.generalText}>Precio: ${`${numbersWithCommas(worker.price)} `} </Text>
            </View>
        </View>
    )
}

export default WorkerReview

const styles = StyleSheet.create({
    cardWorker:{
        backgroundColor: 'white',
        width: '100%',
        height: 150,
        flexDirection: 'row',
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
    imageWorker:{
        width: 120,
        height: 120,
        borderRadius: 100,
        marginHorizontal: 10
    },
    textContainerWorker:{
        width: '60%',
        height: '100%',
        justifyContent: 'space-evenly',

    }
})