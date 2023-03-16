import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Root from './Root';

const App = () => {


  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};

export default App;
