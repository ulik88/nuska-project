import React from "react";
import { ImageBackground, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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

} from "../constants";
export const MySplashScreen = () => {
    return (
        <ImageBackground
            style={{
                flex: 1,
                width: "100%",
                height: "100%",
                left: 0,
            }}
            source={require("../../assets/img/Splashscreen.png")}
        >
            <View style={styles.column}>
                <TouchableOpacity
                    onPress={() => Linking.openSettings()}
                    style={styles.button}
                >
                    <Text style={{ color: "#fff", fontSize: 16 }}>Einstellungen öffnen</Text>
                </TouchableOpacity>

                <Text
                    style={{
                        fontFamily: openSansReg,
                        fontSize: 17,
                        color: "gray",
                        fontWeight: "normal",
                        margin: 10,
                    }}
                >
                    Dein aktueller Standort wird auf der Karte angezeigt und für Routen
                    sowie Suchergebnisse in der Nähe verwendet.
                </Text>

                <Text
                    style={{
                        fontFamily: openSansReg,
                        fontSize: 32,
                        color: "black",
                        fontWeight: "bold",
                        margin: 10,
                    }}
                >
                    Nutze deinen <Text style={{ color: "#1c303b" }}>Standort</Text>
                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    column: {
        flex: 1,
        flexDirection: "column-reverse",
        paddingBottom: 25,
    },
    button: {
        alignItems: "center",
        margin: 10,
        padding: 8,
        backgroundColor: "#de6418",
        borderRadius: 28,
        elevation: 3,
    }
});
