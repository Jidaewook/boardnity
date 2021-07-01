import React from 'react';
import {View} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { COLORS, theme } from '../consts';

const BackBtn = () => {
    return (
        <View
            style={{paddingLeft: 5}}
        >
            <MaterialCommunityIcons 
                name="chevron-left" 
                color={COLORS.gray} 
                size={theme.sizes.h1} 
            />
        </View>
    );
};

export default BackBtn;