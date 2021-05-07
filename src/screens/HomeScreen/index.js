import React from 'react';
import { StatusBar, View, Text } from 'react-native';

export default HomeScreen = ({ navigation }) => {
  return (
    <View>
      <StatusBar barStyle='light-content' translucent={true} backgroundColor='rgba(0,0,0,0.15)' />
      <Text>HomeScreen</Text>
    </View>
  );
}