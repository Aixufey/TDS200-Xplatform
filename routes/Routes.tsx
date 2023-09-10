import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    View,
    Text,
} from "react-native"
import { BasicFormPage, CounterPage, NotePage } from "../pages";
import AppSpace from "../AppSpace";




const Tab = createBottomTabNavigator();
const Routes: React.FC = () => {
    return (
        <Tab.Navigator initialRouteName="NotePage" screenOptions={{ headerShown: false }}>
            <Tab.Screen name="NotePage" component={NotePage} />
            <Tab.Screen name="CounterPage" component={CounterPage} />
            <Tab.Screen name="AppSpace" component={AppSpace} />
            <Tab.Screen name="FormPage" component={BasicFormPage} />
        </Tab.Navigator>
    )
}

export default Routes;






