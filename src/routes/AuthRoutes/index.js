import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ArrowBack from '../../components/ArrowBack';
import StartScreen from '../../screens/StartScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import InviteScreen from '../../screens/InviteScreen';
import PatientSignUpScreen from '../../screens/PatientSignUpScreen';

const Stack = createStackNavigator();

const AuthRoutes = ({ setLoading }) => {
  return (
    <Stack.Navigator initialRouteName="Start">
      <Stack.Screen
        name="Start"
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
          transitionConfig: () => ({
            containerStyle: {
              backgroundColor: 'transparent',
            },
          })
        }}>
        {(props) => <StartScreen {...props} setLoading={setLoading} />}
      </Stack.Screen>
      <Stack.Screen
        name="SignUp"
        options={
          {
            title: null,
            headerTransparent: 'true',
            cardStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
            transitionConfig: () => ({
              containerStyle: {
                backgroundColor: 'transparent',
              },
            }),
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
            headerTransparent: 'true',
            cardStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
            transitionConfig: () => ({
              containerStyle: {
                backgroundColor: 'transparent',
              },
            }),
            headerLeft: (props) => (
              <ArrowBack {...props} />
            )
          }
        } >
        {(props) => <InviteScreen {...props} setLoading={setLoading} />}
      </Stack.Screen>
      <Stack.Screen
        name="PatientSignUp"
        options={
          {
            title: null,
            headerTransparent: 'true',
            cardStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
            transitionConfig: () => ({
              containerStyle: {
                backgroundColor: 'transparent',
              },
            }),
            headerLeft: (props) => (
              <ArrowBack {...props} />
            )
          }
        } >
        {(props) => <PatientSignUpScreen {...props} setLoading={setLoading} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default AuthRoutes;