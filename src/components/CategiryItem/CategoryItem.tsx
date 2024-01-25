import React, { FC, FunctionComponent, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, useWindowDimensions, Pressable } from 'react-native';
import { NuskaColor, NuskaFonts, NuskaDimensions, } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { v4 } from 'uuid';

//Generic type
interface CategoryItemProps {
    item: any;
    content: string;
    contentItems: any[];
    currentSectionIndex: number;
}

export const CategoryItem: FunctionComponent<CategoryItemProps> = ({ content, currentSectionIndex, item, contentItems }) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { width } = useWindowDimensions();

    const [expanded, setExpanded] = useState({});

    const toggleExpand = (subItemId) => {
        setExpanded((prev) => ({
            ...prev,
            [subItemId]: !prev[subItemId],
        }));
        console.log('toggleExpand', [subItemId]);
    };

    return (
        <SafeAreaView style={{ flex: 1, width }}>
            <ScrollView>
                {item.subItems.map((subItem, index) => (
                    <View key={subItem.id}>
                        <TouchableOpacity
                            onPress={() => toggleExpand(subItem.id)}
                            style={[styles.categorySubTitleBox, { marginBottom: expanded[subItem.id] ? 0 : NuskaDimensions.MARGIN_DEFAULT }]}>
                            <Text style={styles.categorySubTitle} key={index}>
                                {subItem.id} - {subItem.title}
                            </Text>
                            <SimpleLineIcons
                                name={expanded[subItem.id] ? 'arrow-down' : 'arrow-right'}
                                size={30}
                                color="white"
                            />
                        </TouchableOpacity>

                        {expanded[subItem.id] && (
                            <View style={[styles.categoryItemsInnereBox]}>
                                {subItem.content.map((contentItem, contentIndex) => (
                                    <View key={v4()}>
                                        <Text key={contentIndex}>{contentItem.description}</Text>
                                        <Text key={v4()}>{contentItem.title}</Text>
                                        {/* Add any additional content rendering here */}
                                    </View>
                                ))}
                                <Pressable
                                    style={{ padding: 10, borderBottomWidth: 1, marginTop: 10 }}
                                    onPress={() => navigation.navigate('CheckList', {
                                        id: v4,
                                        title: item.title ? subItem.title : 'No title',
                                        contentItems: contentItems ? subItem.content : 'No content',
                                        content: content,
                                    })}>
                                    <Text>Mehr Lesen... </Text>
                                </Pressable>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    categorySubTitleBox: {
        backgroundColor: NuskaColor.SECONDARY_COLOR,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: NuskaDimensions.MARGIN_DEFAULT,
        marginVertical: NuskaDimensions.MARGIN_DEFAULT,
        borderRadius: 15,
        padding: NuskaDimensions.PADDING_DEFAULT,
        paddingLeft: NuskaDimensions.PADDING_XX_LARGE,
        paddingRight: NuskaDimensions.PADDING_LARGE

    },
    categorySubTitle: {
        fontFamily: NuskaFonts.openSansBold,
        fontSize: NuskaFonts.MEDIUM_FONT_SIZE,
        color: NuskaColor.WHITE_COLOR,

    },
    expandedContent: {
        padding: NuskaDimensions.PADDING_CATEGORY_EXPANDED,
    },

    categoryItemsInnereBox: {
        fontFamily: NuskaFonts.openSansReg,
        backgroundColor: NuskaColor.SUB_CATEGORY_COLOR,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginHorizontal: NuskaDimensions.MARGIN_DEFAULT,
        marginVertical: NuskaDimensions.MARGIN_SMALL,
        borderRadius: 15,
        padding: NuskaDimensions.PADDING_DEFAULT,
        paddingLeft: NuskaDimensions.PADDING_LARGE,
        paddingRight: NuskaDimensions.PADDING_LARGE
    },
});
