import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './src/components/LoginScreen.js';
import HomeScreen from './src/components/HomeScreen.js';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
