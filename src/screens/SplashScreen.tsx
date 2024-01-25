import React from "react";
import { ImageBackground } from "react-native";
export const MySplashScreen = () => {

    return (
        <ImageBackground
            style={{
                flex: 1,
                width: "100%",
                height: "100%",
                left: 0,
            }}
            source={require("../../assets/img/splash.png")}
        >
        </ImageBackground>
    );
};
