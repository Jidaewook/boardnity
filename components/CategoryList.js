import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../consts/colors';

const CategoryList = ({categories, set, categoryIndex}) => {
    return (
        <View style={styles.categoryListContainer}>
            {categories.map((item, index) => (
                <TouchableOpacity 
                    key={index}
                    activeOpacity={0.8}
                    onPress={() => set(index)}
                >
                    <View>
                        <Text
                            style={{
                                ...styles.categoryListText,
                                color: 
                                    categoryIndex == index
                                        ? COLORS.main5
                                        : COLORS.main1 
                            }}
                        >
                            {item}
                        </Text>
                        {categoryIndex == index && (
                            <View 
                                style={{
                                    height: 4, 
                                    width: 20, 
                                    backgroundColor: COLORS.main4, 
                                    marginTop: 10
                                }}
                            />
                        )}
                    </View>

                </TouchableOpacity>
            ))}
        </View>
    );
};

export default CategoryList;

const styles = StyleSheet.create({
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 30
    },
    categoryListText: {
        fontSize: 17,
        fontWeight: 'bold'
    }
})