import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect, useCallback } from 'react';
import Auth from "../components/authentication/Auth";
import { BottomTabNavigator } from "./BottomTabBarNavigator";



export const RootNavigator = () => {

  const Stack = createStackNavigator();

  return (

    <Stack.Navigator>

      <Stack.Screen
        name="BottomTabNav"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

