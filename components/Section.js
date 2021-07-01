import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Section = ({title, onPress}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: 20}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 15, marginLeft: 10}}>
                {title}
            </Text>
            <TouchableOpacity onPress={onPress}>
                <Text>
                    전체 보기
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Section;