import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS, theme} from '../consts';

const BadgePill = ({title, containerStyle, textStyle}) => {
    return (
        <View style={[styles.badge, containerStyle]}>
            <Text style={[{fontSize: theme.sizes.h5, letterSpacing: -0.78, color: COLORS.primary}, textStyle]}>
                {title}
            </Text>
        </View>
    );
};

export default BadgePill;

const styles = StyleSheet.create({
    badge: {
        backgroundColor: COLORS.gray2,
        borderColor: COLORS.light,
        color: COLORS.gray,
        borderWidth: 1,
        borderRadius: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
})