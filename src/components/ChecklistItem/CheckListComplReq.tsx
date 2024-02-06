import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NuskaColor, NuskaDimensions, NuskaFonts, DEFAULT_TOP_STYLE } from '../../constants';
import { IContent } from '../../../types';

interface CheckListCompletedRequirementsProps {
    completedRequirements: boolean[];
    contentItems: IContent[];
    setContentItems: React.Dispatch<React.SetStateAction<IContent[]>>;
    setCompletedRequirements: React.Dispatch<React.SetStateAction<boolean[]>>;
}

export const CheckListCompletedRequirements: React.FC<CheckListCompletedRequirementsProps> = ({ completedRequirements, contentItems, setContentItems, setCompletedRequirements }) => {

    const completedRequirementTexts = contentItems[0]?.requirements
        ?.filter((_, index) => completedRequirements[index])
        .map(requirement => requirement.requirement)
        .join(', ');

    /*     const addNewRequirement = () => {
            const newCompletedRequirements = [...completedRequirements, false];
    
            const newContentItems = [...contentItems];
            newContentItems?.[0]?.requirements.push({
                id: newContentItems?.[0]?.requirements.length || 0,
                requirement: 'New Requirement'
            });
            setCompletedRequirements(newCompletedRequirements);
            setContentItems(newContentItems);
        };
    
        const removeRequirement = (index: number) => {
            const newCompletedRequirements = [...completedRequirements];
            newCompletedRequirements.splice(index, 1);
    
            const newContentItems = [...contentItems];
            newContentItems?.[0]?.requirements.splice(index, 1);
            setCompletedRequirements(newCompletedRequirements);
            setContentItems(newContentItems);
        };
    
        const updateCompletedRequirements = (newText: string) => {
            const newCompletedRequirements = newText.split(',').map(() => false);
            setCompletedRequirements(newCompletedRequirements);
        }; */

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: NuskaColor.WHITE_COLOR }}>
            <View style={[styles.container, DEFAULT_TOP_STYLE.container]}>
                <Text style={styles.completedRequarements}>
                    {completedRequirementTexts}
                </Text>
                {/*                 <TextInput
                    style={{
                        height: 40,
                        borderColor: 'gray',
                        borderWidth: 1,
                        width: 300,
                        marginTop: 10, // Hier kannst du die Position nach Bedarf anpassen
                    }}
                    onChangeText={(text) => updateCompletedRequirements(text)}
                    value={completedRequirementTexts}
                /> */}

            </View>
            {/*             <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={addNewRequirement}>
                    <Ionicons name="add" size={22} color={NuskaColor.WHITE_COLOR} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => removeRequirement(0)}>
                    <Ionicons name="remove" size={22} color={NuskaColor.WHITE_COLOR} />
                </TouchableOpacity>
            </View> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginHorizontal: NuskaDimensions.MARGIN_LARGE,
        marginBottom: NuskaDimensions.MARGIN_LARGE,
        paddingHorizontal: NuskaDimensions.PADDING_LARGE,
    },
    completedRequarements: {
        fontFamily: NuskaFonts.openSansSemiBold,
        marginTop: NuskaDimensions.MARGIN_DEFAULT,
        marginBottom: NuskaDimensions.MARGIN_DEFAULT,
        fontSize: NuskaFonts.MEDIUM_FONT_SIZE,
        fontWeight: "800",
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: NuskaDimensions.MARGIN_DEFAULT,
        marginBottom: 0,
        marginHorizontal: NuskaDimensions.MARGIN_LARGE,
    },
    button: {
        backgroundColor: NuskaColor.SECONDARY_COLOR,
        borderRadius: 30,
        padding: NuskaDimensions.PADDING_LARGE,
        width: 60,
        height: 60,
        justifyContent: "space-between",
        alignItems: "center",
    },
});
