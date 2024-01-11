import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { mapImagesSVG } from '../utils/mapper/imageMapper';
import { MARGIN_LARGE, SECONDARY_COLOR, openSansReg, WHITE_COLOR, BLACK_COLOR, PRIMARY_COLOR } from '../constants';
import { SettingItem } from '../components/Settings/SettingItem';

const SettingScreen = ({ onSettingsClick, settings, onCloseSettings }) => {
    const [currentSettings, setCurrentSettings] = useState(['Sprachen', 'Dark Mode', 'FAQ', 'Über Uns', 'Abmelden']); // Add more settings as needed

    const [showToggleIcon, setShowToggleIcon] = useState(false);

    const handleSettingClick = (index) => {
        console.log(`Icon clicked: ${index}`);
        onSettingsClick(index);

        // Toggle the state and display the additional message for the first item
        if (currentSettings && index === 0) {
            setShowToggleIcon(!showToggleIcon);
            console.log('Sprachen Zeigt 2 Sprachen an!');
        }
    };

    return (

        <View style={styles.viewStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {mapImagesSVG(settings)}
            </View>
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
                        showToggleIcon={index === 0 && showToggleIcon}

                    />
                ))}
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        position: "absolute",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 100,
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: SECONDARY_COLOR,
        width: Dimensions.get("window").width - 100,
        height: Dimensions.get("window").height = 600,
        zIndex: 1,
        borderWidth: 0.1,
        borderColor: BLACK_COLOR,
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
        borderColor: WHITE_COLOR,
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
        color: BLACK_COLOR,
        fontSize: 20,
        marginLeft: MARGIN_LARGE,
        fontWeight: 'normal',
        fontFamily: openSansReg,
    },

    settingsRow: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },

});

export default SettingScreen
