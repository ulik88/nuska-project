import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { NuskaColor, NuskaDimensions, NuskaFonts } from '../../constants';

export const CheckListNote = () => {
    return (
        <View style={styles.notificationContainer}>

            <ImageBackground
                style={[styles.noteImageBackground,
                {
                    width: NuskaDimensions.WIDTH_DEFAULT * 4,
                    height: NuskaDimensions.HEIGHT_DEFAULT * 4,
                }]}
                source={require('../../../assets/img/notes_1.png')}>
            </ImageBackground>
            <Text style={styles.noteText}>
                Sie haben noch keine Kategorie ausgewählt. Gehen Sie dafür zum Kategorie-Tab und wählen Sie Ihre Kategorie aus.
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    notificationContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: NuskaDimensions.PADDING_MEDIUM,

    },

    noteImageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },

    noteText: {
        padding: NuskaDimensions.PADDING_MEDIUM,
        textAlign: 'center',
        color: NuskaColor.FOURTH_COLOR,
        fontFamily: NuskaFonts.openSansBold,
        fontSize: NuskaFonts.MEDIUM_FONT_SIZE,

    },
});

