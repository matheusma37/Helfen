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
  flex: 0.9;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px 0 20px;
`;

export const Paragraph = styled.View`
  text-align: left;
  margin-bottom: 20px;
`

export const ContentText = styled.Text`
  color: ${midGray};
  font-family: Montserrat-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
`;