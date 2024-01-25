import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Platform,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { NuskaColor, NuskaFonts, NuskaDimensions } from '../../constants';

const ResourceCardItem = ({ title, description, content, imageSource, created_at }) => {


  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const onPress = () => {
    navigation.navigate('CurrentDetail', {

      id: 1,
      title: title,
      description: description,
      imageSource: imageSource,
      created_at: created_at,
      content: content,

    });
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={[styles.cardContainer]}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.overlay}>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.textMore}>Mehr lesen</Text>
            <Text style={styles.created_at}>{created_at}</Text>
          </View>
          <View style={styles.imageSource}>
            <ImageBackground
              source={imageSource}
              style={styles.imageBackground}
            ></ImageBackground>
          </View>
        </View>
      </Pressable>
    </View>
  );
};


const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '50%',
    padding: NuskaDimensions.PADDING_MEDIUM,
    marginBottom: NuskaDimensions.MARGIN_SMALL,

  },

  cardContainer: {
    flex: 1,
    width: "100%",
    aspectRatio: 0.8,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: NuskaColor.THIRD_COLOR,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,

  },

  imageSource: {
    flex: 1,
    overflow: "hidden",
    resizeMode: "cover",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

  },
  imageBackground: {
    flex: 1,
    overflow: "hidden",
    resizeMode: "cover",
  },
  overlay: {
    padding: NuskaDimensions.PADDING_MEDIUM,
  },
  titleContainer: {
    height: NuskaDimensions.DEFAULT_HEIGHT,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: NuskaColor.PRIMARY_COLOR,
    borderRadius: 13,
  },
  title: {
    textAlign: "center",
    fontSize: NuskaFonts.DEFAULT_FONT_SIZE,
    fontWeight: "bold",
    color: NuskaColor.WHITE_COLOR,
    fontFamily: NuskaFonts.openSansBold,
  },
  description: {
    height: NuskaDimensions.DEFAULT_HEIGHT,
    fontSize: NuskaFonts.DEFAULT_FONT_SIZE,
    fontWeight: "normal",
    color: NuskaColor.BLACK_COLOR,
    fontFamily: NuskaFonts.openSansReg,
  },
  created_at: {
    fontSize: 10,
    fontFamily: NuskaFonts.openSansReg,
    color: NuskaColor.BLACK_COLOR,
    fontStyle: "italic",
    fontWeight: "300",
    textAlign: "right",
  },

  wrapperCustom: {

  },

  textMore: {
    marginBottom: NuskaDimensions.MARGIN_SMALL,
    fontSize: NuskaFonts.DEFAULT_FONT_SIZE,
    fontStyle: "italic",
    color: NuskaColor.PRIMARY_COLOR,
    fontFamily: NuskaFonts.openSansReg,
  },
});

export default ResourceCardItem;
