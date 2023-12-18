import { View, Text, ImageBackground, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import CurrentDetailScreen from '../../screens/CurrentDetailScreen';




const ResourceCardItem = ({ title, description, imageSource, created_at }) => {

    const navigation = useNavigation();

    const onPress = () => {
        navigation.navigate("CurrentDetail", { id: 1 });
        };
        
  return (
    <View style={styles.cardContainer}>
      <ImageBackground source={imageSource} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <Text style={styles.description}>{description}</Text>
          <Pressable
            onPress={onPress}
            style={[styles.wrapperCustom, ]}>
                {({ pressed }) => (
                <Text style={styles.textMore}>Mehr lesen</Text>
                )}
            </Pressable>
          <Text style={styles.created_at}>{created_at}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 190,
    aspectRatio: 0.8,
    marginLeft: 10,
    backfaceVisibility: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    borderRadius: 15,
    backgroundColor: '#E5F2FB',
    
  },
  imageBackground: {
    flex: 1,
    borderRadius: 15,
    overflow: 'hidden',
  },
  overlay: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start', // Align content to the top
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  titleContainer: {
    height: 35,
    width: '130%', // Make the titleContainer span the entire width of the card
    position: 'absolute',
    top: 0,
    left: -10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0172BB',
    borderRadius: 13,
  },
  title: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#fff',
   
  },
  description: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#000',
    fontFamily: 'Roboto',
    marginTop: 35,
  },
  created_at: {
    fontSize: 10,
    fontFamily: 'sans-serif',
    color: '#000',
  },

  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },

  textMore: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#0172BB',
    fontFamily: 'Roboto',
    marginTop: 5,
  },
});

export default ResourceCardItem;
