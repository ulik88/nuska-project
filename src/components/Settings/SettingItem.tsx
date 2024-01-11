import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MARGIN_LARGE, openSansReg } from '../../constants';
import { mapImagesSVG } from '../../utils/mapper/imageMapper';

export const SettingItem = ({ setting, index, onPress, showToggleIcon }) => {
    return (
        <TouchableOpacity
            style={{
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                borderBottomWidth: 1,
                borderColor: 'white',
            }}
            onPress={() => onPress(index)}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {mapImagesSVG(setting)}
                <Text style={{
                    marginLeft: MARGIN_LARGE,
                    color: 'white',
                    fontFamily: openSansReg,
                    fontSize: 18,
                }}>{setting}</Text>
            </View>
            {/* Display the toggle icon conditionally */}
            {index === 0 && showToggleIcon && (
                <FontAwesome name="toggle-on" size={24} color="black" />
            )}

            {index === 1 && showToggleIcon && (
                <FontAwesome name="toggle-off" size={24} color="black" />
            )}

        </TouchableOpacity>
    );
};

