import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from 'react-native';
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { RootNavigator } from './src/navigation/RootNavigator';
import { MySplashScreen } from "./src/screens/SplashScreen";
import * as Font from 'expo-font';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Onboarding } from './src/components/Onboarding/Onboarding';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size="large" color='red' />
    </View>
  )
}

export default function App() {

  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);

  const [fontLoaded, setFontLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  const loadFonts = async () => {
    await Font.loadAsync({
      'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
      'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'OpenSans-Light': require('./assets/fonts/OpenSans-Light.ttf'),
      'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
      'OpenSans-Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
      'OpenSans-SemiBoldItalic': require('./assets/fonts/OpenSans-SemiBoldItalic.ttf'),
      'OpenSans-MediumItalic': require('./assets/fonts/OpenSans-MediumItalic.ttf'),
    });
  };

  useEffect(() => {
    // Den Onboarding Screen anzeigen, wenn der Nutzer ihn noch nicht gesehen hat
    const checkOnboarding = async () => {
      try {
        const value = await AsyncStorage.getItem('@viewedOnboarding');
        if (value !== null) {
          setViewedOnboarding(value === 'true');
        }
      } catch (error) {
        console.log('Error @viewedOnboarding', error);
      } finally {
        await setLoading(false);
        setFontLoaded(true);
        setTimeout(() => {
          setShowSplash(false);
        }, 2000);
      }
    };
    checkOnboarding();

  }, []);

  useEffect(() => {
    loadFonts();
  }, []);

  // Den Onboarding Screen zuschliesen, wenn der Nutzer ihn schon gesehen hat
  const onFinishOnboarding = () => {
    setViewedOnboarding(true);
  };

  if (!fontLoaded || showSplash) {
    console.log('I am the SplashScreen', showSplash, fontLoaded);
    return <MySplashScreen />;
  }

  return (
    <NavigationContainer>
      {loading ? <Loading /> : viewedOnboarding ? <RootNavigator /> : <Onboarding onFinishOnboarding={onFinishOnboarding} />}
    </NavigationContainer>
  );
}