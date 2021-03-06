import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Mypage from '../Screen/profile/Mypage';
import Setting from '../Screen/profile/Setting';
import Detail from '../Screen/Detail/Detail';
import MyPageEdit from '../Screen/profile/MyPageEdit';
import BackBtn from '../components/BackBtn';


const ProfileStack = createStackNavigator();

export default () => {
    return (
        <ProfileStack.Navigator
            screenOptions={{
                headerBackTitleVisible: false,
                headerTransparent: true,
                headerBackImage: () => <BackBtn />,
            }}
        >
            <ProfileStack.Screen 
                name="Mypage" 
                component={Mypage} 
                options={{
                    headerShown: false
                }}
            />
            <ProfileStack.Screen 
                name="Setting" 
                component={Setting} 
                options={{
                    headerTitle: '세부 설정',
                    headerTransparent: false,
                  }}  
            />
            <ProfileStack.Screen 
                name="Detail" 
                component={Detail} 
                options={{
                    headerShown: false
                }} 
            />
            <ProfileStack.Screen 
                name="MyPageEdit" 
                component={MyPageEdit} 
                options={{
                    headerTitle: '프로필 설정',
                    headerTransparent: false,
          
                  }}  
            />
        </ProfileStack.Navigator>
    )
}