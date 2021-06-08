import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Screen/Home/Home';
import Detail from './Screen/Detail/Detail';

const Stack = createStackNavigator();



const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Detail'} component={Detail} />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
};

export default App;