import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NuskaColor, NuskaFonts, NuskaDimensions } from '../../constants';
import { IRequirements } from '../../../types';
import { TextHelper } from '../../utils/helpers/TextHelper';

export const ChecklistItem = ({ requirement, index, completed, toggleChecked }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={styles.requirementText}>
                {requirement.id}. {TextHelper.lineBreakRequirements(requirement.requirement)}
            </Text>
            <TouchableOpacity onPress={() => toggleChecked(index)}>
                <Ionicons
                    name={completed ? 'checkbox' : 'checkbox-outline'}
                    size={30}
                    color={completed ? NuskaColor.BLACK_COLOR : 'black'}
                    style={{ marginTop: NuskaDimensions.MARGIN_DEFAULT }}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    requirementText: {
        fontFamily: NuskaFonts.openSansReg,
        marginTop: NuskaDimensions.MARGIN_DEFAULT,
        marginBottom: NuskaDimensions.MARGIN_DEFAULT,
        fontSize: NuskaFonts.MIDDLE_FONT_SIZE,
        fontWeight: "800",
    },

});
