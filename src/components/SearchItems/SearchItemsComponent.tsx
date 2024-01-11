import { StyleSheet, Text, View, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  MEDIUM_FONT_SIZE,
  PADDING_DEFAULT,
  PADDING_MEDIUM,
  MARGIN_DEFAULT,
  DEFAULT_SEARCH_BAR_HEIGHT,
  openSansReg,
  PRIMARY_COLOR,
  FOURTH_COLOR,
  THIRD_COLOR,
  MARGIN_MEDIUM,
  MARGIN_LARGE,
} from "../../constants";

const isIOS = Platform.OS === "ios";

const SearchItemsComponent = () => {
  return (
    <View style={styles.searchBarContainer}>
      <View style={styles.searchBarInput}>
        <AntDesign name="search1" size={26} color="black" />
        <Text style={styles.searchText}>Suchen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: MARGIN_LARGE,
    marginBottom: MARGIN_MEDIUM,
    marginHorizontal: MARGIN_MEDIUM,
  },
  searchBarInput: {
    paddingLeft: PADDING_DEFAULT,
    paddingRight: PADDING_MEDIUM,
    flexDirection: "row",
    width: isIOS ? "100%" : "90%", // Adjust as needed
    height: DEFAULT_SEARCH_BAR_HEIGHT,
    backgroundColor: THIRD_COLOR,
    borderRadius: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchText: {
    flex: 1,
    paddingLeft: PADDING_MEDIUM,
    fontSize: MEDIUM_FONT_SIZE,
    color: FOURTH_COLOR,
    fontStyle: "italic",
  },

});

export default SearchItemsComponent;
