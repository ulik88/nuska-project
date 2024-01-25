import React, { useState, useRef, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Animated } from 'react-native';
import { CategoryData } from '../../data/CategoryData';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NuskaColor, NuskaFonts, NuskaDimensions, DEFAULT_TOP_STYLE } from '../../constants';
import { CategoryItem } from '../../components/CategiryItem/CategoryItem';
import { CategoryHeadbutton } from '../../components/CategiryItem/CategoryHeadbutton';
import { SearchItemsComponent } from '../../components/SearchItem/SearchItemsComponent';
import { Ionicons } from '@expo/vector-icons';


export const CategoryScreen = ({ navigation }) => {

    const flatListRef = useRef(null);

    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;


    useEffect(() => {
        if (currentSectionIndex === -1) {
            setCurrentSectionIndex(0);
        }
    }, []);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length === 1) {
            const index = viewableItems[0].index;
            setCurrentSectionIndex(index);
            onChangeHeadColor(CategoryData[index]); // Call onPress with the pressed item
            console.log('Index der Einrichtungen ', index);
        }
    }).current;

    const handlePress = (item: { title: string; }) => {
        const index = CategoryData.findIndex((category) => category.title === item.title);
        flatListRef.current.scrollToIndex({ index, animated: true });
        setCurrentSectionIndex(index);
    };

    const onChangeHeadColor = (item) => {
        if (item.title === CategoryData[currentSectionIndex].title) {
            return NuskaColor.SECONDARY_COLOR;
        } else {
            return NuskaColor.WHITE_COLOR;
        }
    };

    const renderItem = ({ item }) => {
        const contentItems = item.subItems[currentSectionIndex];

        return (
            //  {/* RENDER  CATEGORY ITEMS  */}
            <CategoryItem

                //wenn hier für props{contentItem} von CategoryItem  kein Array übergeben wird, dann wird der Text nicht angezeigt
                // In unserem Fall content ist ein Listarray in der subItems Objekt
                contentItems={contentItems && contentItems.content}
                item={item}
                currentSectionIndex={currentSectionIndex} content={undefined} />
        );
    };

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: NuskaColor.WHITE_COLOR }}>
            <View style={[DEFAULT_TOP_STYLE.topOfScreen]}>
                <Ionicons
                    name="chevron-back"
                    size={34}
                    color={NuskaColor.GREY_COLOR}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <SearchItemsComponent />

            <View style={[DEFAULT_TOP_STYLE.container]}>

                {/* RENDER  CATEGORY HEAD BUTTON */}

                <CategoryHeadbutton
                    items={CategoryData}
                    percentage
                    onPress={handlePress}
                    onChangeHeadColor={(item) => onChangeHeadColor(item)} />

                {/* RENDER  CATEGORY ITEMS  */}
                <Text style={styles.categoryText}>Kategorien</Text>
                <View style={{ flex: 1, top: -30 }}>
                    <Animated.FlatList
                        data={CategoryData}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={renderItem}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        onViewableItemsChanged={viewableItemsChanged}
                        onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                            useNativeDriver: false,
                        })}
                        pagingEnabled
                        bounces={false}
                        scrollEventThrottle={12}
                        ref={flatListRef}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    categoryText: {
        fontFamily: NuskaFonts.openSansBold,
        fontSize: 20,
        color: NuskaColor.BLACK_COLOR,
        marginHorizontal: NuskaDimensions.MARGIN_LARGE,
    },
});

