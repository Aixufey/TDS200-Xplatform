import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import Welcome from "../pages/Welcome"
import HomeRoutes from "./Welcome.Routes"
const { Navigator, Screen } = createStackNavigator()




const WelcomeRoutes: React.FC = () => {
    const noHeader = { headerShown: false }
    return (
        /* independent is the parent */
        <NavigationContainer independent={false}>
            <Navigator>
                <Screen name="Welcome" component={Welcome} options={noHeader} />
                <Screen name="HomeRoutes" component={HomeRoutes} options={noHeader} />
            </Navigator>
        </NavigationContainer>
    );
}

export default WelcomeRoutes;