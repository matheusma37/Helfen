import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'

import styles from './HomeScreenStyles';
import images from '../../assets/images';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor='rgba(0,0,0,0.2)' />
        <View style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={images.logo} />
          <Text style={styles.logoText}>HELFEN</Text>
        </View>
        <View style={styles.welcome}>
          <Text style={styles.whiteMidText}>
            Olá! Bem-vindo ao Helfen!
          </Text>
          <Text style={styles.whiteMidText}>
            Já nos conhece?
          </Text>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity style={[styles.button, styles.moreInfo]}>
            <Text style={styles.greenMidText}>Quero saber mais!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.createAccount]}>
            <Text style={styles.whiteMidText}>Criar minha conta</Text>
          </TouchableOpacity>
          <View style={styles.enterContainer}>
            <Text>Já sou usuário </Text>
            <TouchableOpacity>
              <Text style={styles.enterButton}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}