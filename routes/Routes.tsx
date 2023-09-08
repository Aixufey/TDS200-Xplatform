import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    View,
    Text,
} from "react-native"
import { CounterPage } from "../pages";



const Tab = createBottomTabNavigator();
const Routes: React.FC = () => {
    return (
        <Tab.Navigator initialRouteName="CounterPage">
            <Tab.Screen name="CounterPage" component={CounterPage} />
        </Tab.Navigator>
    )
}

export default Routes;






