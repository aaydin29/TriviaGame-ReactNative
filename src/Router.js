import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

import Login from './Pages/AuthPages/Login/Login';
import Register from './Pages/AuthPages/Register/Register';

import Home from './Pages/ContentPages/Home/Home';
import QuestionPage from './Pages/ContentPages/QuestionPage/QuestionPage';
import Results from './Pages/ContentPages/Results/Results';
import Leaderboard from './Pages/ContentPages/Leaderboard/Leaderboard';

function AuthPages() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="RegisterPage" component={Register} />
    </Stack.Navigator>
  );
}

function ContentPages() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QuestionPage"
        component={QuestionPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Results"
        component={Results}
        // options={{headerShown: false}}
      />
      <Stack.Screen name="Leaderboard" component={Leaderboard} />
    </Stack.Navigator>
  );
}

const Router = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="AuthPages" component={AuthPages} />
        ) : (
          <Stack.Screen name="ContentPages" component={ContentPages} />
        )}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;
