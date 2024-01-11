import { View, Text, StyleSheet, ImageBackground, } from 'react-native'
import SearchItemsComponent from '../../components/SearchItems/SearchItemsComponent';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import SettingsComponent from '../../components/Settings/SettingsComponent';

import {
  openSansReg,
  PRIMARY_COLOR,
  BLACK_COLOR,
  THIRD_COLOR,
  DEFAULT_FONT_SIZE,
  WHITE_COLOR,
  MARGIN_DEFAULT,
  MARGIN_MEDIUM,
  MARGIN_SMALL,
  PADDING_SMALL,
  MARGIN_LARGE,
  MEDIUM_FONT_SIZE,
  PADDING_DEFAULT,
} from "../../constants";

const CurrentDetailScreen = ({ settings, route, navigation }) => {
  const { title, description, content, imageSource, created_at } = route.params;

  // Set the header title dynamically
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

  return (
    <View style={styles.container}>
      <View style={styles.topOfContainer}>
        <SettingsComponent onSettingsClick={settings} />
      </View>
      <SearchItemsComponent />
      <View style={styles.innerContainer}>
        <Text style={styles.description}> {description}</Text>
        <View style={styles.imageSource}>
          <ImageBackground
            source={imageSource}
            style={styles.imageBackground}
          ></ImageBackground>
        </View>

        <Text style={{ fontFamily: openSansReg }}>{content}</Text>
        <Text style={{ fontFamily: openSansReg }}>Posted at: {created_at}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING_SMALL,
    backgroundColor: WHITE_COLOR,
    alignContent: "center",

  },

  topOfContainer: {

    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
    marginHorizontal: MARGIN_LARGE,
    marginBottom: MARGIN_MEDIUM,

  },

  innerContainer: {
    marginHorizontal: MARGIN_LARGE,
    marginBottom: MARGIN_MEDIUM,
  },

  imageSource: {
    width: "100%",
    aspectRatio: 1.6,
    flexShrink: 0,
    marginVertical: MARGIN_DEFAULT,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",

  },

  description: {
    fontSize: MEDIUM_FONT_SIZE,
    fontFamily: openSansReg,
    color: BLACK_COLOR,
    marginVertical: MARGIN_DEFAULT,
    textAlign: "center",
    fontWeight: "500",
  },
});

export default CurrentDetailScreen;