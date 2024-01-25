// SearchItemsComponent.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NuskaColor, NuskaFonts, NuskaDimensions, DEFAULT_SEARCH_BAR_STYLE } from '../../constants';
import { SearchResultsComponent } from './SearchResultsComponent';
import { CategoryData } from '../../data/CategoryData';


export const SearchItemsComponent = () => {
  const [searchText, onChangeSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const handleSearch = async () => {

      const filtered = CategoryData.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );

      if (searchText === '' || filtered.length === 0) {

        setShowResults(false); // Wenn kein Text eingegeben wurde, dann zeige keine Ergebnisse an
        return;
      }
      else if (filtered.length > 0) {
        setFilteredData(filtered);
      }
      setShowResults(true); // Wenn Text eingegeben wurde, dann zeige Ergebnisse an
    };


    handleSearch();
  }, [searchText]);

  return (
    <View style={[DEFAULT_SEARCH_BAR_STYLE.searchBarContainer]}>
      <View style={[DEFAULT_SEARCH_BAR_STYLE.searchBarInput]}>
        <AntDesign name="search1" size={26} color="black" />
        <TextInput
          style={{
            flex: 1,
            paddingLeft: NuskaDimensions.PADDING_MEDIUM,
            fontSize: NuskaFonts.MEDIUM_FONT_SIZE,
            color: NuskaColor.FOURTH_COLOR,
            fontStyle: 'italic',
          }}
          onChangeText={(newText) => onChangeSearch(newText)}
          placeholder="Suchen..."
        />
      </View>
      {showResults && <SearchResultsComponent searchResults={filteredData} />}
    </View>
  );
};

