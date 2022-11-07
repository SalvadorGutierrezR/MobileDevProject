import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AuthContext } from './AuthProvider'
import LoginScreen from '../screens/auth/LoginScreen'
import MainStack from './MainStack'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { SelectionContext } from './SelectionProvider'

const Routes = () => {

    const { user, setUser } = useContext(AuthContext);
    const { setLoaders, loaders } = useContext(SelectionContext);
    const [ initializing, setInitializing ] = useState(true);

    const onAuthStateChanged = ( user ) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
    }, []);

    useEffect(() => {
        getProperties();
        getItems();
        getWorkers();
        getSaved();
    }, []);

    const getProperties = async () => {
        const properties = await firestore().collection('properties').get();
        const documents = properties.docs.map(doc => doc.data());
        setLoaders(prev => ({...prev, property: documents}));
    }

    const getItems = async () => {
        const item = await firestore().collection('items').get();
        const documents = item.docs.map(doc => doc.data());
        setLoaders(prev => ({...prev, items: documents}));
    }

    const getWorkers = async () => {
        const workers = await firestore().collection('workers').get();
        const documents = workers.docs.map(doc => doc.data());
        setLoaders(prev => ({...prev, workers: documents}));
    }

    const getSaved = async () => {
        const saved = await firestore().collection('saved').get();
        const documents = saved.docs.map(doc => doc.data());
        setLoaders(prev => ({...prev, saved: documents}));
    }

    if (initializing) return null;

    return(
        <NavigationContainer>
            { user ? <MainStack/> : <LoginScreen/> }
        </NavigationContainer>
    )
}

export default Routes