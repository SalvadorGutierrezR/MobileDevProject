import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { globalStyles } from '../styles/GlobalStyles'
import CheckBox from '@react-native-community/checkbox'
import { SelectionContext } from '../navigation/SelectionProvider'
import { numbersWithCommas } from '../helpers/numbersWithCommas'

const ItemsCard = ({ item }) => {

    const { selections, setSelections } = useContext(SelectionContext);

    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const { name, description, price, image } = item;

    const onPress = () => {
        setToggleCheckBox(!toggleCheckBox);

        if(!toggleCheckBox){
            setSelections({
                ...selections,
                items: { ...selections.items, [name]: item }
            })
        }else{
            delete selections.items[name];
        }

    }

    return(
        <TouchableOpacity 
            style={styles.card}
            onPress={() => onPress()}
            activeOpacity={0.8}
        >
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            <Image
                style={styles.image}
                source={{uri: image}}
            />
            <View style={styles.textContainer}>
                <Text style={{...globalStyles.subtitleText, textTransform: 'capitalize'}}>{ name }</Text>
                <Text style={globalStyles.generalText}>{ description.length > 100 ? description.substring(0, 100) + '...' : description }</Text>
                <Text style={globalStyles.generalText}>Price: ${`${numbersWithCommas(price)} `}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemsCard

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        width: '85%',
        height: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        width: 100,
        height: 100,
    },
    textContainer:{
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor:'white'
    }
})