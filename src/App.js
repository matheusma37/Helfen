import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './routes/AuthRoutes'

// import HomeScreen from './screens/HomeScreen';

export default App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  // loggedIn = () => {
  //   return (
  //     <Stack.Navigator initialRouteName="Home">
  //       <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  //     </Stack.Navigator>
  //   );
  // }

  return (
    <NavigationContainer >
      {/* {authenticated ? loggedIn() : notLoggedIn()} */}
      {authenticated ? null : < AuthRoutes />}
    </NavigationContainer>
  );
};