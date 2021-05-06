import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Input, InputContainer } from './styles'
import { midGray } from '../../../../assets/colors';

export default EmailInput = ({ value, onChangeText, ...props }) => {
  return (
    <InputContainer {...props} >
      <Icon
        style={{ padding: 10 }}
        name={'person'}
        color={midGray}
        size={24} />
      <Input
        placeholder="E-mail"
        value={value}
        onChangeText={onChangeText}
        keyboardType={"email-address"} />
    </InputContainer>
  );
}