import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-svg';


const HomePage: React.FC = () => {
    return (
        <View>
            <Text>
                Hello from Start
            </Text>
        </View>
    )
}

    
    const Tab = createBottomTabNavigator();
    const HomeRoutes: React.FC = () => {
        return (
            /* Screens */
            <Tab.Navigator initialRouteName='Start'>
                <Tab.Screen name="Start" component={HomePage} />
                <Tab.Screen name="Search" component={HomePage} />
                <Tab.Screen name="Favorites" component={HomePage} />
                <Tab.Screen name="DetailPage" component={HomePage} />
            </Tab.Navigator>
        )
    }
    export default HomeRoutes;