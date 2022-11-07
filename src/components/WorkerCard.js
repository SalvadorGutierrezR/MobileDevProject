import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import { useNavigation } from '@react-navigation/native'
import { SelectionContext } from '../navigation/SelectionProvider'
import { numbersWithCommas } from '../helpers/numbersWithCommas'

const WorkerCard = ({ worker }) => {

    const { setSelections } = useContext(SelectionContext);
    const navigation = useNavigation();
    const { name, last_name, image, experience, price } = worker;

    const onPress = () => {
        navigation.navigate('ReviewScreen');
        setSelections(prevState => ({
            ...prevState,
            worker: worker
        }));
    }

    return(
        <TouchableOpacity
            style={styles.card}
            onPress={onPress}
        >
            <Image
                style={styles.image}
                source={{ uri: image }}
            />
            <View
                style={styles.textContainer}
            >
                <View>
                    <Text style={globalStyles.titleText}>{ name }</Text>
                    <Text style={globalStyles.titleText}>{ last_name }</Text>
                </View>
                <Text style={globalStyles.subtitleText}>Experiencia: { experience } años</Text>
                <Text style={globalStyles.generalText}>Precio: ${`${numbersWithCommas(price)} `} </Text>
            </View>
        </TouchableOpacity>
    )
}

export default WorkerCard

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        width: '95%',
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        margin: 10,
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
        width: 120,
        height: 120,
        borderRadius: 100,
        marginHorizontal: 10
    },
    textContainer:{
        height: '100%',
        justifyContent: 'space-evenly',
    }
})