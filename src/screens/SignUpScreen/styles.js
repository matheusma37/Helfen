import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { lightBlue, darkGreen, lightOrange } from '../../assets/colors';

export const Container = styled.SafeAreaView`
  background-color: ${lightBlue};
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`;

export const TopMessage = styled.View`
  flex: 0.4;
  align-items: flex-start
`;

export const ButtonGroup = styled.View`
  flex: 0.4;
  align-items: center;
  justify-content: flex-start
`;

export const RoundedButton = styled.TouchableOpacity`
  height: 50px;
  width: 300px;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
`;

export const Footer = styled.View`
  flex: 0.2;
  flex-direction: row;
  justify-content: center;
  align-items: center
`;

export const GreenText = styled.Text`
  color: ${darkGreen};
  font-size: 18px;
  font-family: Montserrat-Regular
`;

export const WhiteText = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
  font-family: Montserrat-Regular;
`;

export const styles = StyleSheet.create({
  patientButton: {
    backgroundColor: lightOrange,
    marginBottom: 15
  },
  psychologistButton: {
    backgroundColor: darkGreen
  },
  shadowedButton: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.0,
    elevation: 9
  },
  textLink: {
    textDecorationLine: 'underline'
  }
})