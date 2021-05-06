import styled from 'styled-components/native';
import { StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get('window').height;

import { lightBlue, lightGray, midGray, darkGreen } from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export const Header = styled.View`
  flex: 0.2;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(0,0,0,0.3);
`;

export const Content = styled.View`
  flex: 0.6;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: white;
`;

export const TextGroup = styled.View`
  width: 100%;
  align-items: flex-start;
  padding: 0 3%;
  margin-top: 10px;
`;

export const Form = styled.View`
  align-items: center;
  margin: 5% 0;
`;

export const InputGroup = styled.View`
  margin-bottom: 5%;
`;

export const Input = styled.TextInput`
  width: 300px;
  height: 55px;
  font-size: 18px;
  color: ${midGray};
  font-weight: 400;
  font-style: normal;
  background-color: white;
  border: 1px solid ${lightGray}26;
`

export const RoundedButton = styled.TouchableOpacity`
  height: 55px;
  width: 300px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background-color: ${lightBlue};
`;

export const GreenText = styled.Text`
  color: ${darkGreen};
  text-align: center;
  font-size: 14px;
  font-family: Montserrat-Regular;
`;

export const GrayText = styled.Text`
  text-align: center;
  color: ${midGray};
  font-size: 18px;
  font-family: Montserrat-Regular;
`;

export const WhiteText = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
  font-family: Montserrat-Regular;
`;

export const RoundedView = styled.View`
  flex-direction: row;
  height: 35px;
  padding: 0 10px;
  border: 2px solid ${lightBlue};
  border-radius: 25px;
  align-items: center;
`;

export const Footer = styled.View`
  flex: 0.2;
  position: absolute;
  width: 100%;
  background-color: rgba(0,0,0,0.3);
`;