import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainNavigation } from './MainNavigation';
import PropertiesScreen from '../screens/PropertiesScreen';
import ItemsScreen from '../screens/ItemsScreen';
import ClientScreen from '../screens/ClientScreen';
import WorkersScreen from '../screens/WorkersScreen';
import ReviewScreen from '../screens/ReviewScreen';

const Stack = createNativeStackNavigator();

const SelectionStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
                headerShown: false
        }}
    >
      <Stack.Screen name="ClientScreen" component={ClientScreen} />
      <Stack.Screen name="PropertiesScreen" component={PropertiesScreen} />
      <Stack.Screen name="ItemsScreen" component={ItemsScreen} />
      <Stack.Screen name="WorkersScreen" component={WorkersScreen} />
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
    </Stack.Navigator>
  );
}

export default SelectionStack
