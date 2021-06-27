import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {COLORS, theme} from '../consts';

const BbsList = ({datas}) => {

    const navigation = useNavigation();

    return (
        <View style={styles.Container}>
            {datas.map(data => (
                <TouchableOpacity
                    
                >
                    <View style={styles.bbsList}>
                        <View style={{flexDirection: 'row'}}>
                            {data.tag.map(t => (
                                <Text>
                                    {t}
                                </Text>
                            ))}
                        </View>
                    </View>
                    <View>
                        <Text>
                            {data.title}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
                
        </View>
    );
};

export default BbsList;

const styles = StyleSheet.create({
    Container: {
        backgroundColor: COLORS.gray2
    },
    bbsList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingRight: 10
    }
})