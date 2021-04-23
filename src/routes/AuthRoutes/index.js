import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ArrowBack from '../../components/ArrowBack';
import StartScreen from '../../screens/StartScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import InviteScreen from '../../screens/InviteScreen';

import { lightBlue, lightOrange } from '../../assets/colors'

const Stack = createStackNavigator();

const AuthRoutes = ({ setLoading }) => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        name="Start"
        options={{ headerShown: false }}>
        {(props) => <StartScreen {...props} setLoading={setLoading} />}
      </Stack.Screen>
      <Stack.Screen
        name="SignUp"
        options={
          {
            title: null,
            headerStyle: {
              backgroundColor: lightBlue
            },
            headerLeft: (props) => (
              <ArrowBack {...props} />
            )
          }
        } >
        {(props) => <SignUpScreen {...props} setLoading={setLoading} />}
      </Stack.Screen>
      <Stack.Screen
        name="Invite"
        options={
          {
            title: null,
            headerStyle: {
              backgroundColor: lightOrange,
            },
            headerLeft: (props) => (
              <ArrowBack {...props} />
            )
          }
        } >
        {(props) => <InviteScreen {...props} setLoading={setLoading} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default AuthRoutes;