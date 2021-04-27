import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import { lightBlue, darkGreen } from '../../assets/colors';

export const Container = styled.SafeAreaView`
  background-color: ${lightBlue};
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`;

export const Section = styled.ScrollView`
  flex: 0.8;
`

export const TopMessage = styled.View`
  align-items: center;
  padding: 0 2%;
`;

export const Form = styled.View`
  margin-top: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center
`

export const RoundedButton = styled.TouchableOpacity`
  height: 35px;
  width: 300px;
  align-items: center;
  justify-content: center;
  border-radius: 35px;
  border-style: solid;
  border-color: white;
  border-width: 2px;
  margin-top: 20px;
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
  textLink: {
    textDecorationLine: 'underline'
  },
  shadowedButton: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.0,
    elevation: 20
  }
})