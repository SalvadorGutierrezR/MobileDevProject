import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { SelectionContext } from '../navigation/SelectionProvider';
import { globalStyles } from '../styles/GlobalStyles';
import ClientReview from '../components/ClientReview';
import PropertyReview from '../components/PropertyReview';
import WorkerReview from '../components/WorkerReview';
import ItemsReview from '../components/ItemsReview';
import { numbersWithCommas } from '../helpers/numbersWithCommas';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../navigation/AuthProvider';

const ReviewScreen = () => {

    const navigation = useNavigation();
    
    const { selections, setSelections } = useContext(SelectionContext)
    const { user } = useContext(AuthContext);
    const { property, items, worker, client, email } = selections;
    let itemsArray = [];
    let itemsTotal = 0;
    let itemsHours = 0;
    
    for (let i in items) {
        itemsArray.push(items[i]);
        itemsTotal += items[i].price;
        itemsHours += items[i].hours;
    }

    const total = itemsTotal + ( worker.price * itemsHours ) + property.price;

    const onPress = () => {
        firestore()
        .collection('saved')
        .add({
            property,
            itemsArray,
            worker,
            client,
            email,
            total,
            agent: user.uid
        })
        .then(() => {
            navigation.navigate('SavedStack')
            setSelections({
                property: {},
                items: {},
                worker: {},
                client: '',
                email: '',
                total: 0,
            })
        });
    }

    return(
        <ScrollView>
            <View style={globalStyles.mainContainer}>
                <Text style={globalStyles.titleText}>Revisa tu selección</Text>
                <View style={{ marginTop: 10}}>
                    <Text style={ globalStyles.subtitleText }>Cliente</Text>
                    <ClientReview client={ client } email={ email } />

                    <Text style={ globalStyles.subtitleText }>Propiedad</Text>
                    <PropertyReview property={ property }/>
                    
                    <Text style={ globalStyles.subtitleText }>Trabajador</Text>
                    <WorkerReview worker={ worker } />

                    <Text style={ globalStyles.subtitleText }>Items</Text>
                    {
                        itemsArray.map((item, index) => (
                            <ItemsReview item={ item } key={ index } />
                        ))
                    }

                    <Text style={ globalStyles.subtitleText }>Total</Text>
                    <Text style={ globalStyles.generalText }>${`${numbersWithCommas(total)} `}</Text>
                    <View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#D62828',
                                width: '60%',
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 25,
                                marginVertical: 20,
                                alignSelf: 'center'
                            }}
                            onPress={() => onPress()}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                }}
                            >Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ReviewScreen

const styles = StyleSheet.create({})