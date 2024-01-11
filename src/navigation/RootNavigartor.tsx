import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import Auth from "../components/authentication/Auth";
import CurrentDetailScreen from "../screens/CurrentDetailScreen";
import BottomTabNavigator from "./BottomTabBarNavigator";


const RootNavigator = () => {

  const [session, setSession] = useState<boolean>(false);

  const Stack = createStackNavigator();

  useEffect(() => {

    const isAuthenticated = true;
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
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CurrentDetail"
              component={CurrentDetailScreen}
              options={{ headerShown: true }}
            />
          </>
        ) : (
          // If the user is not authenticated, show the authentication flow
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
