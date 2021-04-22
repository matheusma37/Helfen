import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ArrowBack from './components/ArrowBack';

// import HomeScreen from './screens/HomeScreen';
import StartScreen from './screens/StartScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createStackNavigator();

export default App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // loggedIn = () => {
  //   return (
  //     <Stack.Navigator initialRouteName="Home">
  //       <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  //     </Stack.Navigator>
  //   );
  // }

  notLoggedIn = () => {
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
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {/* {authenticated ? loggedIn() : notLoggedIn()} */}
      {authenticated ? null : notLoggedIn()}
    </NavigationContainer>
  );
};
