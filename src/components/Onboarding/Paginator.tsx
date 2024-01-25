import { View, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import React from 'react';

export const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();

    return (
        <View style={{ flexDirection: 'row' }}>
            {data.map((_, i) => {
                const dotColor = scrollX.interpolate({
                    inputRange: [(i - 1) * width, i * width, (i + 1) * width],
                    outputRange: ['rgba(0, 0, 0, 0.33)', '#000', 'rgba(0, 0, 0, 0.33)'],
                    extrapolate: 'clamp',
                });

                return <Animated.View key={i.toString()} style={[styles.dot, { backgroundColor: dotColor }]} />;
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    dot: {
        width: 12,
        height: 12,
        borderRadius: 10,
        marginHorizontal: 8,
        backgroundColor: '#000'
    },
});
