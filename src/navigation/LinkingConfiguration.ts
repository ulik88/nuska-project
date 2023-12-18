import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "../../types";


const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      HomePage: {
        screens: {
          HomeScreen: "home",
        },
      },
      Auth: "auth",
      Account: "account",
    },
  },
};

export default linking;
