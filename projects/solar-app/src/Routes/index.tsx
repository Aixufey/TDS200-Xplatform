import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import HomeRoutes from "./Welcome.Routes"
import { Text, View } from "react-native"
const { Navigator, Screen } = createStackNavigator()


const Welcome: React.FC = () => {
    return (
        <View>
            <Text>
                Hello from Welcome
            </Text>
        </View>
    )
}



const WelcomeRoutes: React.FC = () => {
    return (
        /* independent is the parent */
        <NavigationContainer independent={true}>
            <Navigator>
                <Screen name="Welcome" component={Welcome} />
                <Screen name="HomeRoutes" component={HomeRoutes} />
            </Navigator>
        </NavigationContainer>
    );
}

export default WelcomeRoutes;