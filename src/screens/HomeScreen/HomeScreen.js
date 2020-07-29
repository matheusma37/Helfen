import React from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'

import { Logo, SquareButton } from '../../components/HomeScreen'

import styles from './HomeScreenStyles';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' backgroundColor='rgba(0,0,0,0.2)' />
        <Logo />
        <View style={styles.welcome}>
          <Text style={styles.whiteMidText}>
            Olá! Bem-vindo ao Helfen!
          </Text>
          <Text style={styles.whiteMidText}>
            Já nos conhece?
          </Text>
        </View>
        <View style={styles.bottom}>
          <SquareButton style={styles.moreInfo}>
            <Text style={styles.greenMidText}>Quero saber mais!</Text>
          </SquareButton>
          <SquareButton style={styles.createAccount}>
            <Text style={styles.whiteMidText}>Criar minha conta</Text>
          </SquareButton>
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