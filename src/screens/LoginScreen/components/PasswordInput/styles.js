import styled from 'styled-components/native';

import { lightGray, midGray } from '../../../../assets/colors';

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 300px;
  height: 55px;
  background-color: white;
  border: 1px solid ${lightGray}26;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 18px;
  color: ${midGray};
  font-weight: 400;
  font-style: normal;
`