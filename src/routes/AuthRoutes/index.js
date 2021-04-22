import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ArrowBack from '../../components/ArrowBack';
import StartScreen from '../../screens/StartScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import InviteScreen from '../../screens/SignUpScreen';

const Stack = createStackNavigator();

AuthRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={
          {
            title: null,
            headerStyle: {
              backgroundColor: '#7BB7D9',
            },
            headerLeft: (props) => (
              <ArrowBack {...props} />
            )
          }
        } />
      <Stack.Screen
        name="Invite"
        component={InviteScreen}
        options={
          {
            title: null,
            headerStyle: {
              backgroundColor: '#7BB7D9',
            },
            headerLeft: (props) => (
              <ArrowBack {...props} />
            )
          }
        } />
    </Stack.Navigator>
  );
}

export default AuthRoutes;