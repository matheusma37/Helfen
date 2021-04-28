import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: rgba(0,0,0,0.3);
  align-items: center
`;

export const Welcome = styled.View`
  flex: 0.2;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 25px;
`;

export const WhiteMidText = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-family: Montserrat-Regular;
`;

export const Footer = styled.View`
  flex: 0.4;
  justify-content: flex-end;
  align-items: center;
`;

export const SquareButton = styled.TouchableOpacity`
  height: 55px;
  width: 195px;
  align-items: center;
  justify-content: center;
  border-radius: 5px
`;

export const GreenMidText = styled.Text`
  color: #19856B;
  font-size: 18px;
  font-family: Montserrat-Regular
`;

export const EnterContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 18px
`;

export const EnterText = styled.Text`
  color: #A3A3A3;
  font-size: 14px;
`;

export const styles = StyleSheet.create({
  moreInfo: {
    backgroundColor: '#FFF',
    borderColor: '#19856B',
    borderWidth: 2,
    marginBottom: 10
  },
  createAccount: {
    backgroundColor: '#19856B',
    marginBottom: 20
  }
})