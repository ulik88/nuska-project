import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { SearchItemsComponent } from '../../components/SearchItem/SearchItemsComponent';
import { SettingScreen } from "../SettingScreen";
import { SettingsComponent } from '../../components/Settings/SettingsComponent';
import { Ionicons } from '@expo/vector-icons';

import { NuskaColor, NuskaFonts, NuskaDimensions, DEFAULT_TOP_STYLE } from '../../constants';

import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const CurrentDetailScreen = ({ settings, route, navigation }) => {

  const { title, description, content, imageSource, created_at } = route.params;
  const [showSettings, setShowSettings] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: NuskaColor.WHITE_COLOR }}>
      <View style={[DEFAULT_TOP_STYLE.topOfScreen]}>
        <View>
          <Ionicons
            name="chevron-back"
            size={34}
            color={NuskaColor.GREY_COLOR}
            onPress={() => navigation.goBack()}
          />
        </View>
        <Text style={{ fontFamily: NuskaFonts.openSansSemiBold, fontSize: NuskaFonts.HEADER_FONT_SIZE }}>{title}</Text>

        {!showSettings && (
          <SettingsComponent
            onSettingsClick={() => setShowSettings(prevState => !prevState)}
          />
        )}

      </View>
      {showSettings && (
        <SettingScreen
          onSettingsClick={() => setShowSettings(true)}
          onCloseSettings={() => setShowSettings(false)} />
      )}

      <SearchItemsComponent />

      <View style={[DEFAULT_TOP_STYLE.container]}>
        <ScrollView
          style={styles.innerContainer}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <Text style={styles.description}> {description}</Text>
          <View style={[styles.imageSource,]}>
            <ImageBackground
              source={{ uri: imageSource }}
              style={styles.imageBackground}
            ></ImageBackground>
          </View>

          <Text style={{ fontFamily: NuskaFonts.openSansReg }}>{content}</Text>
          <Text style={{ fontFamily: NuskaFonts.openSansReg }}>Posted at: {created_at}</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  innerContainer: {
    marginHorizontal: NuskaDimensions.MARGIN_LARGE,
  },

  imageSource: {
    flex: 1,
    width: "100%",
    aspectRatio: 1.6,
    flexShrink: 0,
    marginVertical: NuskaDimensions.MARGIN_DEFAULT,
    backgroundColor: NuskaColor.SECONDARY_COLOR,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },

  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",

  },

  description: {
    fontSize: NuskaFonts.MEDIUM_FONT_SIZE,
    fontFamily: NuskaFonts.openSansReg,
    color: NuskaColor.BLACK_COLOR,
    marginVertical: NuskaDimensions.MARGIN_DEFAULT,
    textAlign: "left",
    lineHeight: 25,
    fontWeight: "600",
  },
});

export default CurrentDetailScreen;