import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tabs from './navigation/Tabs';

// import Home from './Screen/Home/Home';
// import Detail from './screen/detail/Detail';

const Stack = createStackNavigator();



const App = () => {

  return (
    <NavigationContainer>
      <Tabs />

    </NavigationContainer>
    
  );
};

export default App;