import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { NuskaDimensions, openSansReg } from '../../constants';
import { mapImagesSVG } from '../../utils/mapper/imageMapper';

export const SettingItem = ({ setting, index, onPress, toggleIcons }) => {
    const handlePress = () => {
        onPress(index);
        if (index === 1) {
            // Toggle the icon state only for the "Language" setting (index 1)
            // If showToggleIcon is true, set it to false; otherwise, set it to true
            onPress(index);
        }
    };

    return (
        <TouchableOpacity
            style={{
                padding: 30,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                borderBottomWidth: 1,
                borderColor: 'white',
            }}
            onPress={handlePress}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {mapImagesSVG(setting)}
                <Text style={{
                    marginLeft: NuskaDimensions.MARGIN_LARGE,
                    color: 'white',
                    fontFamily: openSansReg,
                    fontSize: 18,
                }}>{setting}</Text>
            </View>
            {/* Display the toggle icon conditionally */}
            {index === 1 && (toggleIcons ? (
                <FontAwesome name="toggle-on" size={24} color="white" />
            ) : (
                <FontAwesome name="toggle-off" size={24} color="white" />
            ))}
        </TouchableOpacity>
    );
};


