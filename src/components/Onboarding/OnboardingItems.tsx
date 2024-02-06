import { View, Text, StyleSheet, Image, SafeAreaView, ImageBackground, useWindowDimensions } from 'react-native'
import React from 'react'
import { mapImagesPNG } from '../../utils/mapper/imageMapper';
import { NuskaColor, NuskaDimensions, NuskaFonts } from '../../constants';


export const OnboardingItems = ({ item }) => {
    const { width } = useWindowDimensions();

    const renderOnboardingImage = () => {
        if (item.imageUrl !== "") {
            return (
                <ImageBackground
                    style={{
                        flex: 1,
                        width: "100%",
                        height: "125%",
                        left: 0,
                    }}
                    source={mapImagesPNG(item.imageUrl)}
                >
                    <View style={styles.textContainerOnboarding}>
                        <Text style={styles.content}>{item.content}</Text>
                    </View>
                </ImageBackground>
            );
        }
        return null;
    };
    return (
        <View style={[styles.image, { width }]}>
            {renderOnboardingImage()}
        </View>
    );
};

const styles = StyleSheet.create({

    image: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },

    textContainerOnboarding: {
        flex: 1,
        flexDirection: 'column',
        padding: NuskaDimensions.PADDING_LARGE,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    content: {
        fontFamily: NuskaFonts.openSansReg,
        fontSize: 13,
        fontWeight: '400',
        color: NuskaColor.BLACK_COLOR,
        textAlign: 'center',
        lineHeight: 20,
        letterSpacing: 0.5,
        padding: NuskaDimensions.PADDING_LARGE,
    }
});
