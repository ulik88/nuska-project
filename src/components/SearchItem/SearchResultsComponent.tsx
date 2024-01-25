// SearchResultsComponent.js
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { NuskaColor, NuskaFonts, NuskaDimensions, DEFAULT_SEARCH_RESULT_STYLE } from '../../constants';
import { ItemListComponent } from './ItemListComponent';

export const SearchResultsComponent = ({ searchResults }) => {

    const renderItem = ({ item, index }) => {
        if (!item || !item.subItems) {
            return null; // Return null if item or subItems is undefined

        }// console.log("item", item);
        return (
            <ItemListComponent
                title={item.title}
                subItems={item.subItems.map(subItem => subItem.title).join(', ')}
            />
        );
    };

    return (
        <View style={[DEFAULT_SEARCH_RESULT_STYLE.overlay]}>
            {searchResults.length > 0 ? (
                <View style={[DEFAULT_SEARCH_RESULT_STYLE.resultsContainer]}>
                    <FlatList
                        data={searchResults}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => item.id.toString()}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}

                    />
                </View>
            ) : (
                <View style={[DEFAULT_SEARCH_RESULT_STYLE.noResultsContainer]}>
                    <Text style={{
                        color: NuskaColor.WHITE_COLOR,
                        fontFamily: NuskaFonts.openSansSemiBold,
                        fontSize: NuskaFonts.MEDIUM_FONT_SIZE,
                    }}>Keine Ergebnisse gefunden.</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({


});
