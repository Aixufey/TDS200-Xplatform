import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native';
import HomePage from '../pages/HomePage';
import Assets from '../Assets';
import SearchPage from '../pages/Search';
import DetailsPage from '../pages/DetailPage';




const Tab = createBottomTabNavigator();
const HomeRoutes: React.FC = () => {
    return (
        /* Screens */
        <Tab.Navigator initialRouteName='Start'>
            <Tab.Screen name="Start" component={HomePage} options={{ ...screenOptions, tabBarIcon: (({ focused }) => (<Assets.icons.Home style={iconStyle(focused)} />)) }} />
            <Tab.Screen name="Search" component={SearchPage} options={{ ...screenOptions, tabBarIcon: (({ focused }) => (<Assets.icons.Search style={iconStyle(focused)} />)) }} />
            <Tab.Screen name="Favorites" component={HomePage} options={{ ...screenOptions, tabBarIcon: (({ focused }) => (<Assets.icons.Save style={iconStyle(focused)} />)) }} />
            <Tab.Screen name="DetailsPage" component={DetailsPage} options={{ ...screenOptions, tabBarIcon: (({ focused }) => (<Assets.icons.Gallery style={iconStyle(focused)} />)) }} />
        </Tab.Navigator>
    )
};

const iconStyle = (focused: boolean) => ({
    opacity: focused ? 1 : 0.5,
    marginBottom: focused ? 6 : 0,
})

const screenOptions = {
    headerShown: false,
    tabBarStyle: {
        borderColor: '#000',
        backgroundColor: '#000',
    },
    tabBarActiveTintColor: 'yellow',
    tabBarInactiveTintColor: '#fff',
} as BottomTabNavigationOptions;

export default HomeRoutes;