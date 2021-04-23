import React from 'react';
import { ActivityIndicator } from 'react-native';
import { LoadingContainer, WhiteText } from './styles';

export default LoadingScreen = ({ message }) => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color='white' />
      <WhiteText>
        {message}
      </WhiteText>
    </LoadingContainer>
  );
}