import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import Auth from "../components/authentication/Auth";
import Account from "../screens/Account";
import HomePage from "../screens/HomePage";
import CurrentDetailScreen from "../screens/CurrentDetailScreen";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RootNavigator = () => {
  const [session, setSession] = useState<boolean>(false);

  // Your useEffect logic to set the session state goes here
  useEffect(() => {
    // Simulating authentication logic
    const isAuthenticated = true; // Replace this with your actual authentication logic
    setSession(isAuthenticated);
  }, []);

  return (
    <NavigationContainer theme={DefaultTheme}>
      <Stack.Navigator>
        {session ? (
          // If the user is authenticated, show the main app
          <>
            <Stack.Screen 
            name="Home" 
            component={HomePage}
            options={{ headerShown: true }}
          
          />
          <Stack.Screen
            name="CurrentDetail"
            component={CurrentDetailScreen}
            options={{ headerShown: true }}
          />
            <Stack.Screen 
            name="Account" 
            component={Account} 
            options={{ headerShown: true }}
            /></>

        ) : (
          // If the user is not authenticated, show the authentication flow
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
