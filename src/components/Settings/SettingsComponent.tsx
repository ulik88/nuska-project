import { View, Text } from 'react-native';
import { Path, SvgXml } from 'react-native-svg';
import Svg, { Circle, Rect } from 'react-native-svg';
import React from 'react';
import { SettingsSVG } from "../../../assets/img/svg/SettingsSVG";
import { SettingsClickableIcon } from './SettingsClickableIcon';

export const SettingsComponent = ({ onSettingsClick }) => {
  return (
    <View>
      <SettingsClickableIcon onPress={onSettingsClick}>
        <SettingsSVG />
      </SettingsClickableIcon>
    </View>
  );
};
