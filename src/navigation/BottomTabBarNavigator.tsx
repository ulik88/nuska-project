import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage/HomePage";
import Categories from "../screens/Categories/CategoryScreen";
import Account from "../screens/Account";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
    <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',// Ändere später in #FFBB00
        }}
    >
        <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <Entypo name="home" size={24} color="black" />),
            }}
        />
        <Tab.Screen
            name="Categories"
            component={Categories}
            options={{
                tabBarLabel: 'Categories',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="category" size={24} color="black" />),
            }} />

        <Tab.Screen
            name="Account"
            component={Account}
            options={{
                headerShown: true,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" size={24} color="black" />),
            }}
        />
    </Tab.Navigator>
);

export default BottomTabNavigator;
