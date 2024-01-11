// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
/* import { fetchDesks } from '../../components/api/api'; */
import ResourceCardItem from '../../components/ResourceCardItem';
import SearchItemsComponent from '../../components/SearchItems/SearchItemsComponent';
import SettingsComponent from '../../components/Settings/SettingsComponent';
import { Logo } from '../../components/Logo';
import CurrentData from "../../data/CurrentData";

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
  // Call the fetchDesks function from the api.tsx file later, after you've implemented it
  /* fetchDesks()
  .then((desksData) => {
    console.log('Desks Data:', desksData);
    // Assuming your API response is an array of desks
    
    setDesks(desksData);
  })
  .catch((error) => {
    console.log(error);
  }); */
} from "../../constants";

import SettingsScreen from "../SettingScreen";

const HomeScreen = (props) => {

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
    <View style={styles.container}>

      <View style={styles.topOfContainer}>
        <Logo />
        <Button title="Test API" onPress={testApi} />

        {!showSettings && (
          <SettingsComponent
            onSettingsClick={() => setShowSettings(prevState => !prevState)}
          />
        )}
      </View>
      {showSettings && (
        <SettingsScreen
          onSettingsClick={() => setShowSettings(true)}
          onCloseSettings={() => setShowSettings(false)} settings={undefined} />
      )}
      <SearchItemsComponent />

      <View>
        <Text style={styles.title}>Aktuelle</Text>
      </View>

      <View style={styles.containerRow}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={desks.slice(0, 4)}
          renderItem={renderCurrents}
          showsHorizontalScrollIndicator={false}
          numColumns={2} // Set the initial number of columns
          contentContainerStyle={styles.gridContainer}
          ListEmptyComponent={<Text>No Components</Text>}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: openSansReg,
    padding: PADDING_SMALL,
    backgroundColor: WHITE_COLOR,
  },
  topOfContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginHorizontal: MARGIN_LARGE,
    marginBottom: MARGIN_MEDIUM,

  },
  title: {
    fontFamily: openSansReg,
    marginLeft: MARGIN_MEDIUM,
    marginBottom: MARGIN_DEFAULT,
    fontSize: MEDIUM_FONT_SIZE,
    fontWeight: '500',
  },
  containerRow: {
    padding: 5,
  },

  gridContainer: {
    justifyContent: "space-between",

  },
});

export default HomeScreen;
