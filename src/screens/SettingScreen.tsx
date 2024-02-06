import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { mapImagesSVG } from '../utils/mapper/imageMapper';
import { NuskaColor, NuskaFonts, NuskaDimensions } from '../constants';
import { SettingItem } from '../components/Settings/SettingItem';

export const SettingScreen = ({ onSettingsClick, onCloseSettings }) => {
    const [currentSettings, setCurrentSettings] = useState(['Sprachen', 'Dark Mode', 'FAQ', 'Über Uns', 'Abmelden']);
    const [toggleIcons, setToggleIcon] = useState(false);



    const handleSettingClick = (index: number) => {
        onSettingsClick(index);
        console.log(`Icon clicked: ${index}`);

        if (currentSettings && index === 1) {
            setToggleIcon(!toggleIcons);
            console.log(toggleIcons, 'Icone DarkMode clicked!');
        }

    };
    return (
        <View style={[styles.viewStyle, { backgroundColor: toggleIcons ? NuskaColor.PRIMARY_COLOR : NuskaColor.SECONDARY_COLOR }]}>
            <View style={styles.topRow}>
                <TouchableOpacity style={{ padding: 10, marginHorizontal: 10 }} onPress={onCloseSettings}>
                    <Fontisto name="player-settings" size={30} color="#3e4042" />
                </TouchableOpacity>
                <Text style={styles.textSetting}>Einstellungen</Text>
            </View>
            <View style={styles.settingsRow}>
                {currentSettings.map((setting, index) => (
                    <SettingItem
                        key={index}
                        setting={setting}
                        index={index}
                        onPress={handleSettingClick}
                        toggleIcons={toggleIcons}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        position: "absolute",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: '25%',
        marginTop: '20%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        width: Dimensions.get("window").width - 80,
        height: Dimensions.get("window").height = 600,
        zIndex: 3,
        borderWidth: 0.1,
        borderColor: NuskaColor.BLACK_COLOR,
        shadowColor: '8px 8px 8px 4px rgba(5, 0, 0, 0.59)',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 6,
    },
    topRow: {
        flexDirection: "row",
        alignItems: "center",
        borderTopLeftRadius: 12,
        width: "100%",
        backgroundColor: '#fcfcfc',
        borderBottomWidth: 1,
        borderColor: NuskaColor.WHITE_COLOR,
    },
    categoryItemText: {
        fontSize: 16,
        flex: 1,
        color: "#000000",
    },

    icons: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: 16,
    },

    textSetting: {
        color: NuskaColor.BLACK_COLOR,
        fontSize: 20,
        marginLeft: NuskaDimensions.MARGIN_LARGE,
        fontWeight: 'normal',
        fontFamily: NuskaFonts.openSansReg,
    },

    settingsRow: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },

});
