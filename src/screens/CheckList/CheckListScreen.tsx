import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { SearchItemsComponent } from '../../components/SearchItem/SearchItemsComponent';
import { Ionicons } from '@expo/vector-icons';
import { NuskaColor, NuskaFonts, NuskaDimensions, DEFAULT_TOP_STYLE } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CheckListScreen = ({ route, navigation }) => {

    const { title, contentItems, content } = route.params;

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

                <ScrollView
                    style={styles.innerContainer}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
                    <Text style={styles.categoryTitle}> {title}</Text>
                    <Text style={styles.description}>
                        {contentItems.map((contentItem, index) => {
                            return (
                                <Text key={index}>{contentItem.description} </Text>
                            )
                        }
                        )
                        }</Text>

                    <Text style={{ fontFamily: NuskaFonts.openSansReg }}>{content}</Text>
                    <Text style={{ fontFamily: NuskaFonts.openSansReg }}>Posted at: { }</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

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
});