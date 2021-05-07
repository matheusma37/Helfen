import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './routes/AuthRoutes';
import LoggedRoutes from './routes/LoggedRoutes';

export default App = () => {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <NavigationContainer >
      {authenticated ? < LoggedRoutes /> : < AuthRoutes />}
    </NavigationContainer>
  );
};