import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../../screens/HomeScreen';
import { lightGray, lightOrange } from '../../assets/colors';

const Tab = createBottomTabNavigator();

const LoggedRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: lightGray,
          borderTopColor: 'transparent'
        },
        activeTintColor: lightOrange,
        inactiveTintColor: 'white',
        tabStyle: {
          paddingBottom: 5,
          paddingTop: 5
        }
      }}>
      <Tab.Screen
        name="Perfil"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name='person' color={color} size={size} />
          )
        }} />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name='home' color={color} size={size} />
          )
        }} />
      <Tab.Screen
        name="Calendario"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name='event-note' color={color} size={size} />
          )
        }} />
    </Tab.Navigator>
  );
}

export default LoggedRoutes;