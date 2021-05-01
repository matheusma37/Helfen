import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ArrowBack from '../../components/ArrowBack';
import StartScreen from '../../screens/StartScreen';
import AboutScreen from '../../screens/AboutScreen';
import SignUpScreen from '../../screens/SignUpScreen';
import InviteScreen from '../../screens/InviteScreen';
import PatientSignUpScreen from '../../screens/PatientSignUpScreen';
import PsychologistSignUpScreen from '../../screens/PsychologistSignUpScreen';

const Stack = createStackNavigator();

const AuthRoutes = () => {
  const transparentHeader = {
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
        {(props) => <StartScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="About" options={transparentHeader} component={AboutScreen} />
      <Stack.Screen name="SignUp" options={transparentHeader} component={SignUpScreen} />
      <Stack.Screen name="Invite" options={transparentHeader} component={InviteScreen} />
      <Stack.Screen name="PatientSignUp" options={transparentHeader} component={PatientSignUpScreen} />
      <Stack.Screen name="PsychologistSignUp" options={transparentHeader} component={PsychologistSignUpScreen} />
    </Stack.Navigator>
  );
}

export default AuthRoutes;