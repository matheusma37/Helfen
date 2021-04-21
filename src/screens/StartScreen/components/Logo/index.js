import React from 'react';
import { View, Image, Text } from 'react-native';

import logo from '../../../../assets/images/logo.png';
import styles from './styles';

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image
        style={styles.logoImage}
        source={logo} />
      <Text style={styles.logoText}>HELFEN</Text>
    </View>
  )
}

export default Logo;