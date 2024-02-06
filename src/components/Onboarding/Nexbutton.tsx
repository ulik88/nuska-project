import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import React, { useEffect } from 'react';
import { NuskaColor, NuskaFonts, NuskaDimensions } from '../../constants';


export const Nexbutton = ({ percentage, scrollTo }) => {

    useEffect(() => {
        (percentage);
    }, [percentage]);

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignSelf: 'flex-end' }}>
            {
                percentage === 100 ? (
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={scrollTo}
                    >
                        <Text style={styles.buttonText}>START</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.8}
                        onPress={scrollTo}
                    >
                        <Text style={styles.buttonText}>WEITER</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: NuskaColor.PRIMARY_COLOR,
        borderRadius: 15,
        width: 100,
        height: NuskaDimensions.BUTTON_HEIGHT,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: NuskaColor.BLACK_COLOR,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        right: 40,
        top: 25,
    },

    buttonText: {
        color: NuskaColor.WHITE_COLOR,
        fontSize: NuskaFonts.MIDDLE_FONT_SIZE,
        fontFamily: NuskaFonts.openSansBold,
        fontWeight: '900',
    }

})