import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Platform,
  Dimensions
} from "react-native";
import React, { useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import CurrentDetailScreen from "../../screens/CurrentDetailScreen";

import {
  openSansReg,
  openSansBold,
  PRIMARY_COLOR,
  BLACK_COLOR,
  THIRD_COLOR,
  DEFAULT_FONT_SIZE,
  WHITE_COLOR,
  DEFAULT_HEIGHT,
  PADDING_SMALL,
  PADDING_MEDIUM,
  MARGIN_SMALL,
} from "../../constants";

const ResourceCardItem = ({ title, description, content, imageSource, created_at }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("CurrentDetail", {

      title: title,
      description: description,
      imageSource: imageSource,
      created_at: created_at,
      content: content, // Pass the content to CurrentDetailScreen
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.overlay}>
          <Text style={styles.description}>{description}</Text>
          <Pressable onPress={onPress} style={[styles.wrapperCustom]}>
            {({ pressed }) => <Text style={styles.textMore}>Mehr lesen</Text>}
          </Pressable>
          <Text style={styles.created_at}>{created_at}</Text>
        </View>
        <View style={styles.imageSource}>
          <ImageBackground
            source={imageSource}
            style={styles.imageBackground}
          ></ImageBackground>
        </View>
      </View>
    </View>
  );
};


const isIOS = Platform.OS === 'ios';

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: PADDING_SMALL,
  },

  cardContainer: {
    width: "100%",
    aspectRatio: 0.8,
    marginBottom: 10,
    shadowColor: BLACK_COLOR,
    shadowOffset: { width: 2, height: 4 },
    boxShadow: "3px 4px 4px 0 rgba(0, 0, 0, 0.25)",
    borderRadius: 15,
    backgroundColor: THIRD_COLOR,




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
    padding: PADDING_MEDIUM,
  },
  titleContainer: {
    height: DEFAULT_HEIGHT,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 13,
  },
  title: {
    textAlign: "center",
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: "bold",
    color: WHITE_COLOR,
    fontFamily: openSansBold,
  },
  description: {
    height: DEFAULT_HEIGHT,
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: "normal",
    color: BLACK_COLOR,
    fontFamily: openSansReg,
  },
  created_at: {
    fontSize: 10,
    fontFamily: openSansReg,
    color: BLACK_COLOR,
    fontStyle: "italic",
    fontWeight: "300",
    textAlign: "right",
  },

  wrapperCustom: {
    borderRadius: 8,
  },

  textMore: {
    marginBottom: MARGIN_SMALL,
    fontSize: DEFAULT_FONT_SIZE,
    fontStyle: "italic",
    color: PRIMARY_COLOR,
    fontFamily: openSansReg,
  },
});

export default ResourceCardItem;
