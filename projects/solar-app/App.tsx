import React from "react";

import { Text, View } from "react-native";
import WelcomeRoutes from "./src/Routes";
import Welcome from "./src/pages/Welcome";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular
} from "@expo-google-fonts/roboto";
import Button from "./src/components/Button";
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  const logBtn = () => console.log('Clicked')

  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return null
  }

  return <WelcomeRoutes />
  /* return (
    <View style={{ flexGrow: 1, flexShrink: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Continue" Icon={() => <></>} onPress={logBtn}></Button>
    </View>
  ) */

}

