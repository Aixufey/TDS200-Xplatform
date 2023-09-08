import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import Routes from "./Routes";





const { Navigator, Screen } = createStackNavigator();
const Navigation: React.FC = () => {
    return (
        <NavigationContainer independent>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Routes" component={Routes} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Navigation;