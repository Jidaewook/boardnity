import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Recommend from '../screen/recommend/Recommend';
import Detail from '../screen/detail/Detail';

const RecommendStack = createStackNavigator();

export default () => {
    return (
        <RecommendStack.Navigator>
            <RecommendStack.Screen 
                name="Recommend" 
                component={Recommend} 
                options={{
                    headerShown: false
                }} 
            />
            <RecommendStack.Screen 
                name="Detail" 
                component={Detail} 
                options={{
                    headerShown: false
                }} 
            />
        </RecommendStack.Navigator>
    );
};