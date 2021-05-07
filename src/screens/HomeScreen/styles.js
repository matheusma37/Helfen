import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import { lightBlue } from '../../assets/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: ${StatusBar.currentHeight}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  padding: 0 10px;
`;

export const FunctionCard = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-bottom: 5px;
  background-color: ${lightBlue};
  opacity: 0.9;
`;

export const CardIconContainer = styled.View`
  flex: 0.2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  border: 2px solid white;
  height: 70%;
  margin-left: 5px;
`;

export const CardTextContainer = styled.View`
  flex: 0.8;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-style:  solid;
  border-color: white;
  border-left-width: 2px;
  margin-left: 10px;
`;

export const WhiteText = styled.Text`
  font-size: 18px;
  font-family:  Montserrat-Regular;
  font-weight: normal;
  color: white;
`;

export const HeaderWhiteText = styled(WhiteText)`
  font-size: 14px;
`;