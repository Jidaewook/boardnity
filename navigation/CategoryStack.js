import React from 'react';
import {View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Category from '../Screen/category/Category';
import Favorite from '../Screen/category/Favorite';
import Detail from '../Screen/Detail/Detail';

const CategoryStack = createStackNavigator();

export default () => {
    return (
        <CategoryStack.Navigator>
            <CategoryStack.Screen 
                name="Category" 
                component={Category} 
                options={{
                    headerShown: false
                }} 
            />
            <CategoryStack.Screen 
                name="Favorite" 
                component={Favorite} 
                options={{
                    headerShown: false
                }} 
            />
            <CategoryStack.Screen 
                name="Detail" 
                component={Detail} 
                options={{
                    headerShown: false
                }} 
            />
        </CategoryStack.Navigator>
    );
};