import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Input, InputContainer } from './styles'
import { midGray } from '../../../../assets/colors';

export default PasswordInput = ({ value, onChangeText, ...props }) => {
  return (
    <InputContainer {...props} >
      <Icon
        style={{ padding: 10 }}
        name={'lock'}
        color={midGray}
        size={24} />
      <Input
        placeholder="Senha"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={true}
        style={{ borderTopWidth: 0 }} />
    </InputContainer>
  );
}