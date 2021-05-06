import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ArrowBack from '../../components/ArrowBack';
import StartScreen from '../../screens/StartScreen';
import AboutScreen from '../../screens/AboutScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import InviteScreen from '../../screens/InviteScreen';
import PatientSignUpScreen from '../../screens/PatientSignUpScreen';
import PsychologistSignUpScreen from '../../screens/PsychologistSignUpScreen';
import LoginScreen from '../../screens/LoginScreen';

import { darkGreen } from '../../assets/colors'

const Stack = createStackNavigator();

const AuthRoutes = () => {
  const transparentHeader = {
    title: null,
    headerStyle: {
      height: 60
    },
    headerTransparent: 'true',
    cardStyle: { backgroundColor: 'transparent', shadowColor: 'transparent' },
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent',
      },
    }),
    headerLeft: (props) => <ArrowBack {...props} />
  }

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
        }} component={StartScreen} />
      <Stack.Screen
        name="About"
        options={
          {
            title: null,
            headerStyle: {
              backgroundColor: darkGreen,
              height: 60
            },
            headerLeft: (props) => <ArrowBack {...props} />
          }
        }
        component={AboutScreen} />
      <Stack.Screen name="SignUp" options={transparentHeader} component={SignUpScreen} />
      <Stack.Screen name="Invite" options={transparentHeader} component={InviteScreen} />
      <Stack.Screen name="PatientSignUp" options={transparentHeader} component={PatientSignUpScreen} />
      <Stack.Screen name="PsychologistSignUp" options={transparentHeader} component={PsychologistSignUpScreen} />
      <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;