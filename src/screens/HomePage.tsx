// Import necessary dependencies
import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { fetchDesks } from '../components/api/api';
import { ScrollView } from 'react-native-gesture-handler';
import ResourceCardItem from '../../src/components/ResourceCardItem';


const HomeScreen = () => {
  const [desks, setDesks] = useState([]);

  const testApi = () => {
    fetchDesks()
      .then((desksData) => {
        console.log('Desks Data:', desksData);
        // Assuming your API response is an array of desks
        setDesks(desksData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderCurrents = ({ item }: { item: any }) => {
    return (
      <ResourceCardItem 
        title={item.title} 
        description={item.description} 
        imageSource={{ uri: item.imageSource }} // assuming item has an imageSource property
        created_at={item.created_at}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text >Aktuelle</Text>
      </View>
      <Button title="Test API" onPress={testApi} />
      <View >
        <View style={styles.row}>
          {/* First row */}
          <View >
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={desks.slice(0, 2)} // Display the first two items
              renderItem={renderCurrents}
              ListEmptyComponent={<Text>No Components</Text>}
            />
          </View>
        </View>
        <View style={styles.row}>
          {/* Second row */}
          <View >
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              horizontal
              data={desks.slice(2, 5)} // Display the next two items
              renderItem={renderCurrents}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageTitle: {
    alignItems: 'center',
    textAlign: 'start',
    fontSize: 20,
    fontWeight: 'light',
  },
  container: {
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginLeft: 12,
  },
/*   gridContainer: {
    margin: 25,
  }, */
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },

});

export default HomeScreen;
