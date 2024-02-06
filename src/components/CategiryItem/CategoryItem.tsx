import React, { FC, FunctionComponent, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, useWindowDimensions, Pressable } from 'react-native';
import { NuskaColor, NuskaFonts, NuskaDimensions, } from '../../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { IContent, ISubItem, RootStackParamList } from '../../../types';
import { StackNavigationProp } from '@react-navigation/stack';


export const CategoryItem = ({ item, contentItems, description }) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { width } = useWindowDimensions();

    const [expanded, setExpanded] = useState({});

    const toggleExpand = (subItemId: number) => {
        setExpanded((prev) => ({
            ...prev,
            [subItemId]: !prev[subItemId],
        }));
        console.log('toggleExpand', [subItemId]);
    };

    return (
        <SafeAreaView style={{ flex: 1, width }}>
            <ScrollView>
                {item.subItems.map((subItem: ISubItem, index: number) => (
                    <View key={subItem.id}>
                        <TouchableOpacity
                            onPress={() => toggleExpand(subItem.id)}
                            style={[styles.categorySubTitleBox, { marginBottom: expanded[subItem.id] ? 0 : NuskaDimensions.MARGIN_SMALL }]}>
                            <Text style={styles.categorySubTitle}
                                key={index}> {subItem.id} - {subItem.sub_title}
                            </Text>
                            <SimpleLineIcons
                                name={expanded[subItem.id] ? 'arrow-down' : 'arrow-right'}
                                size={30}
                                color="white"
                            />
                        </TouchableOpacity>

                        {expanded[subItem.id] && (
                            <View style={[styles.categoryItemsInnereBox]}>
                                {subItem.content.map((contentItem: IContent, contentIndex) => (
                                    <View key={contentIndex}>
                                        <Text style={styles.categoryItemsInnereDesc}
                                            key={contentIndex}>{contentItem.description}
                                        </Text>
                                        <Text
                                            style={{
                                                fontFamily: NuskaFonts.openSansReg,
                                                marginTop: NuskaDimensions.MARGIN_DEFAULT,
                                                fontSize: NuskaFonts.MIDDLE_FONT_SIZE,
                                            }}
                                        >{contentItem.content_title}</Text>
                                        {/* Add any additional content rendering here */}
                                    </View>
                                ))}
                                <Pressable
                                    key={index}
                                    style={{ padding: 10, borderBottomWidth: 1, marginTop: 10 }}
                                    onPress={() => navigation.navigate('CheckList', {
                                        id: subItem.id,
                                        sub_title: subItem.sub_title || '',
                                        contentItems: subItem.content.map((contentItem: IContent) => {
                                            return {
                                                id: contentItem.id,
                                                requirements: contentItem.requirements,
                                                description: contentItem.description,
                                                content_title: contentItem.content_title
                                            };
                                        }),
                                    })}>
                                    <Text>Mehr lesen... </Text>
                                </Pressable>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView >
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
    categoryItemsInnereDesc: {
        fontFamily: NuskaFonts.openSansReg,
        fontSize: NuskaFonts.MIDDLE_FONT_SIZE,
        marginVertical: NuskaDimensions.MARGIN_DEFAULT,
    },
});
