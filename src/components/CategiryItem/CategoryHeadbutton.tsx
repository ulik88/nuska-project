import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import { NuskaColor, NuskaFonts, NuskaDimensions } from '../../constants';
import { ICategoryData } from '../../../types';


export const CategoryHeadbutton = ({ onChangeHeadColor, items, percentage, onPress }) => {

    useEffect(() => {

    }, [percentage]);

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={items}
                keyExtractor={(item: ICategoryData) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.categoryNameBox, { backgroundColor: onChangeHeadColor(item) }]}
                        onPress={() => {
                            onPress(item);
                            onChangeHeadColor(item);
                        }}>
                        <View style={styles.categoryNameBox}>
                            <Text style={styles.categoryName}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

        </View>

    );
};
const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: NuskaColor.WHITE_COLOR,
        marginHorizontal: NuskaDimensions.MARGIN_MEDIUM,
        marginVertical: NuskaDimensions.MARGIN_SMALL,
        zIndex: 3,
    },
    categoryNameBox: {
        justifyContent: 'center',

        marginHorizontal: 4,
        borderRadius: 10,
    },
    categoryName: {
        padding: 6,
        fontFamily: NuskaFonts.openSansBold,
        fontSize: 18,
        color: NuskaColor.BLACK_COLOR,
        marginVertical: 4,
    },
})
