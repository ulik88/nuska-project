import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const SettingsClickableIcon = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    {children}
    {/* You can add a text label or any additional content here */}
    {/* <Text>Click me</Text> */}
  </TouchableOpacity>
);
