import styled from 'styled-components/native';

import { lightOrange, darkGreen, midGray } from '../../../../assets/colors'

export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
`;

export const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background-color: ${darkGreen};
`;

export const HeaderText = styled.Text`
  color: ${lightOrange};
  font-family: Montserrat-Regular;
  font-size: 24px;
  font-style: normal;
  font-weight: normal;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 67px;
  width: 100%;
  border: 0 solid ${midGray};
  border-bottom-width: 1px;
`

export const ContentText = styled.Text`
  color: ${midGray};
  font-family: Montserrat-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
`;

export const Dot = styled.View`
  height: 5px;
  width: 5px;
  border-radius: 5px;
  background-color: ${darkGreen};
  margin-right: 10px;
`