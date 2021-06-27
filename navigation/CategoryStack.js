import React from 'react';
import {View, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Category from '../screen/category/Category';
import Favorite from '../screen/category/Favorite';
import Detail from '../screen/detail/Detail';

const CategoryStack = createStackNavigator();

export default () => {
    return (
        <CategoryStack.Navigator>
            <CategoryStack.Screen name="Category" component={Category} />
            <CategoryStack.Screen name="Favorite" component={Favorite} />
            <CategoryStack.Screen name="Detail" component={Detail} />
        </CategoryStack.Navigator>
    );
};