import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SavedPropertiesScreen from '../screens/SavedPropertiesScreen';
import SavedPropertiesDetailsScreen from '../screens/SavedPropertiesDetailsScreen';

const Stack = createNativeStackNavigator();

const SavedStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
                headerShown: false
        }}
    >
      <Stack.Screen name="SavedPropertiesScreen" component={SavedPropertiesScreen} />
      <Stack.Screen name="SavedPropertiesDetailsScreen" component={SavedPropertiesDetailsScreen} />
    </Stack.Navigator>
  );
}

export default SavedStack
