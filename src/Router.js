import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './Pages/AuthPages/Login/Login';
import Register from './Pages/AuthPages/Register/Register';

const AuthPages = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="RegisterPage" component={Register} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="AuthPages" component={AuthPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
