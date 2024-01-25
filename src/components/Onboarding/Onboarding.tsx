import { View, Text, StyleSheet, FlatList, Animated, Pressable } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { OnboardingItems } from './OnboardingItems';
import OnboardingData from '../../../src/data/OnboardingData';
import { Paginator } from './Paginator';
import { Nexbutton } from './Nexbutton';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Onboarding = ({ onFinishOnboarding }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }
    ).current;

    const scrollTo = async () => {
        if (currentIndex < OnboardingData.length - 1) {
            slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            try {
                await AsyncStorage.setItem('@viewedOnboarding', 'true');
                onFinishOnboarding(); // Call the callback function to navigate after onboarding
            } catch (error) {
                console.log('Error @storage', error);
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 4 }}>
                <FlatList
                    data={OnboardingData}
                    renderItem={({ item }) => <OnboardingItems item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}

                    onViewableItemsChanged={viewableItemsChanged}
                    scrollEventThrottle={32}
                    ref={slidesRef}
                />
            </View>
            <Paginator data={OnboardingData} scrollX={scrollX} />
            <Nexbutton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / OnboardingData.length)} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})

