import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import RecommendStack from './RecommendStack';

import Detail from '../screen/detail/Detail';

const Tabs = createBottomTabNavigator();

export default () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeStack} />
            <Tabs.Screen name="Recommend" component={RecommendStack} />
            <Tabs.Screen name="List" component={Detail} />
            <Tabs.Screen name="Profile" component={Detail} />
        </Tabs.Navigator>
    );
};