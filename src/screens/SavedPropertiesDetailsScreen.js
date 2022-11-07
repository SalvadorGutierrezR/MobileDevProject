import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../styles/GlobalStyles';
import ClientReview from '../components/ClientReview';
import PropertyReview from '../components/PropertyReview';
import WorkerReview from '../components/WorkerReview';
import ItemsReview from '../components/ItemsReview';
import { numbersWithCommas } from '../helpers/numbersWithCommas';

const SavedPropertiesDetailsScreen = ({ route }) => {

    const { saved } = route.params;
    const { client, email, property, worker, itemsArray, total} = saved;

    const onPress = () => {
        
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
                                marginTop: 20,
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
                            >Mandar Correo</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default SavedPropertiesDetailsScreen

const styles = StyleSheet.create({})