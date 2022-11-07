import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import PropertiesScreen from "../screens/PropertiesScreen";
import SavedPropertiesScreen from '../screens/SavedPropertiesScreen';
import React from "react";
import { colors } from '../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import SelectionStack from "./SelectionStack";
import SavedStack from "./SavedStack";

const Tab = createMaterialBottomTabNavigator();

export const MainNavigation = () => {
    return(
        <Tab.Navigator
            initialRouteName="PropertiesScreen"
            activeColor={colors.secondary}
            inactiveColor={colors.primary}
            labeled={false}
            barStyle={{ backgroundColor: '#f5f5f5' }}
        >
            <Tab.Screen 
                name="SelectionStack" 
                component={SelectionStack} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen 
                name="SavedStack" 
                component={SavedStack} 
                options={{
                    tabBarLabel: 'Saved',
                    tabBarIcon: ({ color }) => (
                        <Icon name="bookmark" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}