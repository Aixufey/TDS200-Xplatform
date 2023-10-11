import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import HomeRoutes from "./Welcome.Routes"
import { Text, View } from "react-native"
import Welcome from "../pages/Welcome"
const { Navigator, Screen } = createStackNavigator()




const WelcomeRoutes: React.FC = () => {
    const noHeader = {headerShown: false}
    return (
        /* independent is the parent */
        <NavigationContainer independent={false}>
            <Navigator>
                <Screen name="Welcome" component={Welcome} options={noHeader}/>
                <Screen name="HomeRoutes" component={HomeRoutes} options={noHeader}/>
            </Navigator>
        </NavigationContainer>
    );
}

export default WelcomeRoutes;