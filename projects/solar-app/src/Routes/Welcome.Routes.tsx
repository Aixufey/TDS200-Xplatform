import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Assets from '../Assets';
import DetailsPage from '../pages/DetailPage';
import HomePage from '../pages/HomePage';
import SearchPage from '../pages/Search';
import { Colors } from '../Styles/StyleGuide';
import Favorites from '../pages/Favorites';




const Tab = createBottomTabNavigator();
const HomeRoutes: React.FC = () => {
    return (
        /* Screens */
        <Tab.Navigator initialRouteName='Start'
            sceneContainerStyle={{ backgroundColor: '#5d66aa' }}
            screenOptions={{
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor: '#FF0',
                tabBarLabelStyle: {
                    marginBottom: 5,
                },
                tabBarStyle: [
                    {
                        backgroundColor: Colors.brandBackground,
                        borderTopColor: '#000',
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        padding: 10,
                        height: 65,
                        position: 'absolute',
                    }
                ]
            }}
        >
            <Tab.Screen
                name="Start"
                component={HomePage}
                options={{
                    // ...screenOptions,
                    headerShown: false,
                    tabBarIcon: (({ focused }) => (
                        <Assets.icons.Home
                            style={iconStyle(focused)}
                        />))
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchPage}
                options={{
                    // ...screenOptions,
                    headerShown: false,
                    tabBarIcon: (({ focused }) =>
                    (<Assets.icons.Search
                        style={iconStyle(focused)}
                    />))
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    // ...screenOptions,
                    headerShown: false,
                    tabBarIcon: (({ focused }) =>
                    (<Assets.icons.Save
                        style={iconStyle(focused)}
                    />))
                }}
            />
            <Tab.Screen
                name="DetailsPage"
                component={DetailsPage}
                options={{
                    // ...screenOptions,
                    headerShown: false,
                    tabBarIcon: (({ focused }) =>
                    (<Assets.icons.Gallery
                        style={iconStyle(focused)}
                    />))
                }}
            />
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