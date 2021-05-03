import styled from 'styled-components/native';

import { darkGreen } from '../../assets/colors'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
  align-items: center
`;

export const ViewCard = styled.View`
  flex: 0.8;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  flex: 0.2;
  width: 100%;
  background-color: ${darkGreen};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ScrollDot = styled.View`
  height: 10px;
  width: 10px;
  border-radius: 25px;
  background-color: white;
  margin-left: 10px;
`