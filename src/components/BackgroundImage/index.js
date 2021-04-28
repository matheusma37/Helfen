import React from 'react';
import { ImageBackground } from 'react-native';
import { styles } from './styles'

export default BackgroundImage = ({ ...props }) => {
  return (
    <ImageBackground blurRadius={4} {...props} style={styles.background} />
  );
}