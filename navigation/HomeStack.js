import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screen/home/Home';
import Detail from '../screen/detail/Detail';
import ProfileStack from '../navigation/ProfileStack';
import NcsSectionStack from './sectionStack/NcsSectionStack';
import PsatSectionStack from './sectionStack/PsatSectionStack';
import BoardSectionStack from './sectionStack/BoardSectionStack';

import BackBtn from '../components/BackBtn';
import { COLORS } from '../consts';

const HomeStack = createStackNavigator();

export default () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTransparent: true,
        headerBackImage: () => <BackBtn />,
      }}
      initialRouteName="Main"
    >
      <HomeStack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false
        }} 
        
      />
      <HomeStack.Screen 
        name="Detail" 
        component={Detail}  
        options={{
          headerTitle: false
        }} 
      />
      <HomeStack.Screen 
        name="Profile" 
        component={ProfileStack} 
        options={{
          headerShown: false
        }}   
      />
      <HomeStack.Screen 
        name="NcsSectionStack" 
        component={NcsSectionStack} 
        options={{
          headerTitle: 'NCS 게시판',
          headerTransparent: false,
        }}   
      />
      <HomeStack.Screen 
        name="PsatSectionStack" 
        component={PsatSectionStack} 
        options={{
          // headerShown: false
        }}   
      />
      <HomeStack.Screen 
        name="BoardSectionStack" 
        component={BoardSectionStack} 
        options={{
          headerShown: false
        }}   
      />
    </HomeStack.Navigator>
  );
};