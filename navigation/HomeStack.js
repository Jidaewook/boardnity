import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screen/home/Home';
import Detail from '../screen/detail/Detail';
import ProfileStack from '../navigation/ProfileStack';

const HomeStack = createStackNavigator();

export default () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={Home} 
        options={{
          headerShown: false
        }} 
        
      />
      <HomeStack.Screen name="Detail" component={Detail}  />
      <HomeStack.Screen name="Profile" component={ProfileStack} />
    </HomeStack.Navigator>
  );
};