import React from "react";
import RootNavigator from './src/navigation/RootNavigartor';
import { useFonts } from 'expo-font';
import { MySplashScreen } from "./src/screens/SplashScreen";
import * as SplashScreen from "expo-splash-screen";


export default function App() {

  const loadFonts = async () => {
    await useFonts({
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    });
  };

  loadFonts();

  if (!loadFonts()) {
    return <RootNavigator />;
  } else {
    return <RootNavigator />;
  }
}


