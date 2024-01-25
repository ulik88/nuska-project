import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
/* import { fetchDesks } from '../../components/api/api'; */
import ResourceCardItem from '../../components/ResourceCardItem';
import { SearchItemsComponent } from '../../components/SearchItem/SearchItemsComponent';
import SettingsComponent from '../../components/Settings/SettingsComponent';
import SettingsScreen from "../SettingScreen";
import { Logo } from '../../components/ui/Logo';
import CurrentData from "../../data/CurrentData";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NuskaColor, NuskaFonts, NuskaDimensions, DEFAULT_TOP_STYLE } from '../../constants';
import { ItemListComponent } from '../../components/SearchItem/ItemListComponent';


export const HomeScreen = () => {

  // Clear the onboarding value from AsyncStorage
  const clearOnboarding = async () => {
    try {
      await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (error) {
      console.log('Error @storage', error);
    }
  }

  const [showSettings, setShowSettings] = useState(false);
  const [desks, setDesks] = useState([]);

  const testApi = () => {
    setDesks(CurrentData);

  };

  useEffect(() => {
    // Call the testApi function when the component mounts
    testApi();
  }, []);

  const renderCurrents = ({ item }: { item: any }) => {
    return (
      <ResourceCardItem
        title={item.title}
        description={item.description}
        content={item.content}
        imageSource={{ uri: `https://picsum.photos/200/300?random=${Math.random()}` }}
        created_at={item.created_at}
      />
    );

  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: NuskaColor.WHITE_COLOR }}>
      <View style={[DEFAULT_TOP_STYLE.topOfScreen]}>
        <View>
          <Logo />
        </View>

        {/*   <Button title="Test API" onPress={testApi} /> */}

        <TouchableOpacity onPress={clearOnboarding}>
          <Text style={{ color: 'red' }}>Clear</Text>
        </TouchableOpacity>

        {!showSettings && (
          <SettingsComponent
            onSettingsClick={() => setShowSettings(prevState => !prevState)}
          />
        )}
      </View>

      {showSettings && (
        <SettingsScreen
          onSettingsClick={() => setShowSettings(true)}
          onCloseSettings={() => setShowSettings(false)} />
      )}

      <SearchItemsComponent />

      <View style={[DEFAULT_TOP_STYLE.container]}>
        <View>
          <Text style={styles.title}>Aktuelle</Text>
        </View>

        <View style={styles.containerRow}>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={desks.slice(0, 4)}
            renderItem={renderCurrents}
            showsHorizontalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={styles.gridContainer}
            ListEmptyComponent={<Text>No Components</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  title: {
    fontFamily: NuskaFonts.openSansReg,
    marginLeft: NuskaDimensions.MARGIN_MEDIUM,
    marginBottom: NuskaDimensions.MARGIN_SMALL,
    marginTop: NuskaDimensions.MARGIN_MEDIUM,
    fontSize: NuskaFonts.MEDIUM_FONT_SIZE,
    fontWeight: '500',
  },
  containerRow: {
    padding: 5,
  },

  gridContainer: {
    justifyContent: "space-between",
  },
});

