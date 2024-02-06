const { getDefaultConfig } = require("expo/metro-config");
const { mergeConfig } = require("@react-native/metro-config");

const customConfig = {
  resolver: {
    sourceExts: ["jsx", "js", "ts", "tsx", "expo.js", "expo.ts"],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), customConfig);
