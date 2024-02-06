import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { SearchItemsComponent } from '../../components/SearchItem/SearchItemsComponent';
import { Ionicons } from '@expo/vector-icons';
import { NuskaColor, NuskaFonts, NuskaDimensions, DEFAULT_TOP_STYLE } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IContent, IRequirements, RootStackParamList } from '../../../types';
import { TextHelper } from '../../utils/helpers/TextHelper';
import { ChecklistItem } from '../../components/ChecklistItem/ChecklistItem';
import { CheckListNote } from '../../components/ChecklistItem/CheckListNote';
import { RouteProp } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { CheckListCompletedRequirements } from '../../components/ChecklistItem/CheckListComplReq';


export const CheckListScreen: React.FC<{ route: RouteProp<RootStackParamList, 'CheckList'> }> = ({ route }) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const { id, sub_title, description, content_title, contentItems } = route.params || {};

    const [completedRequirements, setCompletedRequirements] = useState(
        contentItems?.[0]?.requirements.map(() => false) || []
    );

    console.log('Test', completedRequirements);

    const toggleChecked = (index: number) => {
        const newCompletedRequirements = [...completedRequirements];
        newCompletedRequirements[index] = !newCompletedRequirements[index];
        setCompletedRequirements(newCompletedRequirements);
    };

    const allRequirementsCompleted = completedRequirements.every((completed: boolean) => completed);
    useEffect(() => {
        // Hier sind die Initialisierung von completedRequirements vorgenommen
        const initialCompletedRequirements = contentItems?.[0]?.requirements?.map(() => false) || [];
        setCompletedRequirements(initialCompletedRequirements);
    }, [contentItems]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: NuskaColor.WHITE_COLOR }}>
            <View style={[DEFAULT_TOP_STYLE.topOfScreen]}>
                <Ionicons
                    name="chevron-back"
                    size={34}
                    color={NuskaColor.GREY_COLOR}
                    onPress={() => navigation.navigate('Categories')}
                />
            </View>
            <SearchItemsComponent />
            <View style={[DEFAULT_TOP_STYLE.container]}>
                {!contentItems ? (
                    <CheckListNote />
                ) : (
                    <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>
                        <Text style={styles.categoryTitle}>{sub_title}</Text>
                        {contentItems?.map((contentItem: IContent, index: number) => (
                            <View key={index}>
                                <Text style={styles.description}>{contentItem.description}</Text>
                                <Text
                                    style={{
                                        fontFamily: NuskaFonts.openSansSemiBold,
                                        marginTop: NuskaDimensions.MARGIN_DEFAULT,
                                        marginBottom: NuskaDimensions.MARGIN_DEFAULT,
                                        fontSize: NuskaFonts.MEDIUM_FONT_SIZE,
                                        fontWeight: "800",
                                    }}
                                >
                                    {contentItem.content_title}
                                </Text>
                                <View>
                                    {contentItem.requirements?.map((requirement: IRequirements, reqIndex) => (
                                        <ChecklistItem
                                            key={reqIndex}
                                            requirement={requirement}
                                            index={reqIndex}
                                            completed={completedRequirements[reqIndex]}
                                            toggleChecked={toggleChecked}
                                        />
                                    ))}
                                </View>
                            </View>
                        ))}

                        {!allRequirementsCompleted ? (
                            <Text style={styles.completedRequarements}>
                                {completedRequirements.filter((completed: boolean) => completed).length} von {contentItems?.[0]?.requirements?.length ?? 0} erfüllt

                            </Text>
                        ) : (
                            <Text style={styles.completedRequarements}>Alle Voraussetzungen erfüllt</Text>
                        )}
                        <CheckListCompletedRequirements
                            completedRequirements={completedRequirements}
                            contentItems={contentItems} setContentItems={function (value: React.SetStateAction<IContent[]>): void {
                                throw new Error('Function not implemented.');
                            }} setCompletedRequirements={function (value: React.SetStateAction<boolean[]>): void {
                                throw new Error('Function not implemented.');
                            }} />
                    </ScrollView>
                )}
            </View>
        </SafeAreaView >
    );
};


const styles = StyleSheet.create({

    innerContainer: {
        marginHorizontal: NuskaDimensions.MARGIN_LARGE,
    },

    description: {
        fontSize: NuskaFonts.MEDIUM_FONT_SIZE,
        fontFamily: NuskaFonts.openSansReg,
        color: NuskaColor.BLACK_COLOR,
        marginVertical: NuskaDimensions.MARGIN_DEFAULT,
        textAlign: "left",
        lineHeight: 25,
        fontWeight: "600",
    },
    categoryTitle: {
        fontSize: NuskaFonts.LARGE_FONT_SIZE,
        fontFamily: NuskaFonts.openSansBold,
        color: NuskaColor.BLACK_COLOR,
        marginVertical: NuskaDimensions.MARGIN_DEFAULT,
        textAlign: "left",
        lineHeight: 25,
        fontWeight: "600",
    },
    completedRequarements: {
        fontSize: NuskaFonts.LARGE_FONT_SIZE,
        fontFamily: NuskaFonts.openSansBold,
        color: NuskaColor.SECONDARY_COLOR,
        marginVertical: NuskaDimensions.MARGIN_DEFAULT,
        textAlign: "left",
        lineHeight: 25,
        fontWeight: "600",
    },
});