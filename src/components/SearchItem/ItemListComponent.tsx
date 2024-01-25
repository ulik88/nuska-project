// ItemListComponent.js
import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NuskaColor, NuskaFonts, NuskaDimensions } from '../../constants';
import { ScrollView } from 'react-native-gesture-handler';


export const ItemListComponent = ({ title, subItems }) => (

    <View style={{ flex: 1 }}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.itemContainer}>
            <TouchableOpacity
                onPress={() => alert("Item Pressed")}>

                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => alert("SubItem Pressed")} >
                <Text style={styles.subItems}>{subItems}</Text>
            </TouchableOpacity>
        </ScrollView>
    </View >
);

const styles = StyleSheet.create({

    itemContainer: {

        backgroundColor: NuskaColor.PRIMARY_COLOR,
        marginVertical: 1,
        padding: NuskaDimensions.PADDING_MEDIUM,

    },
    title: {
        color: NuskaColor.WHITE_COLOR,
        fontFamily: NuskaFonts.openSansSemiBold,
        fontSize: NuskaFonts.SEARCH_FONT_SIZE,
    },
    subItems: {
        color: NuskaColor.WHITE_COLOR,
        fontFamily: NuskaFonts.openSansReg,
        fontSize: NuskaFonts.SEARCH_FONT_SIZE,
    },
});
