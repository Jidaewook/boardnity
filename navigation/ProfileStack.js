import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Mypage from '../screen/profile/Mypage';
import Setting from '../screen/profile/Setting';
import Detail from '../screen/detail/Detail';

const ProfileStack = createStackNavigator();

export default () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen 
                name="Mypage" 
                component={Mypage} 
                options={{
                    headerShown: false
                }}
            />
            <ProfileStack.Screen name="Setting" component={Setting} />
            <ProfileStack.Screen name="Detail" component={Detail} />
        </ProfileStack.Navigator>
    )
}