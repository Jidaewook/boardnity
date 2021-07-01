import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import RecommendStack from './RecommendStack';
import ProfileStack from './ProfileStack';
import CategoryStack from './CategoryStack';

import {Feather} from '@expo/vector-icons';
import {theme, COLORS} from '../consts';

const Tabs = createBottomTabNavigator();

export default () => {
    return (
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    let iconName
                    if (route.name === "Home") {
                        iconName = "home"
                    } else if (route.name === "Recommend") {
                        iconName = "tv"
                    } else if (route.name === "Category") {
                        iconName = "compass"
                    } else if (route.name === "Profile") {
                        iconName = "user"
                    }
                    return (
                        <Feather 
                            name={iconName}
                            color={focused ? COLORS.primary : COLORS.secondary}
                            size={theme.sizes.h1}
                        />
                    )
                }
            })}
        >
            <Tabs.Screen name="Home" component={HomeStack} />
            <Tabs.Screen name="Category" component={CategoryStack} />
            <Tabs.Screen name="Recommend" component={RecommendStack} />
            <Tabs.Screen name="Profile" component={ProfileStack} />
        </Tabs.Navigator>
    );
};