import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomePage/HomeScreen";
import { CategoryScreen } from "../screens/Categories/CategoryScreen";
import { CheckListScreen } from "../screens/CheckList/CheckListScreen";
import Account from "../screens/Account";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import CurrentDetailScreen from "../screens/CurrentDetailScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            name="CurrentDetail"
            component={CurrentDetailScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="CheckList"
            component={CheckListScreen}
            options={{ headerShown: false }}
        />
    </Stack.Navigator>
);
export const BottomTabNavigator = () => (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#e91e63', // Change later to #FFBB00
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={24} color="black" />
                ),
            }}
        />
        <Tab.Screen
            name="Categories"
            component={CategoryScreen}
            options={{
                tabBarLabel: 'Kategorie',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="category" size={24} color="black" />
                ),
            }}
        />
        <Tab.Screen
            name="CheckList"
            component={CheckListScreen}
            options={{
                tabBarLabel: 'CheckListe',
                tabBarIcon: ({ color, size }) => (
                    <Octicons name="checklist" size={24} color="black" />
                ),
            }}
        />
        <Tab.Screen
            name="Account"
            component={Account}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={24} color="black" />
                ),
            }}
        />
    </Tab.Navigator>
);
