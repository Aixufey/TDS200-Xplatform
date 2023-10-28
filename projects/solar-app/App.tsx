import React from "react";

import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from "@expo-google-fonts/roboto";
import WelcomeRoutes from "./src/Routes";
import PlanetContextProvider from "./src/providers/PlanetContextProvider";

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <PlanetContextProvider>
      <WelcomeRoutes />
    </PlanetContextProvider>
  );
}

