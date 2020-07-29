import React from 'react';
import { View, Image, Text } from 'react-native'

import images from '../../assets/images';
import styles from './LogoStyles'

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image
        style={styles.logoImage}
        source={images.logo} />
      <Text style={styles.logoText}>HELFEN</Text>
    </View>
  )
}

export default Logo;