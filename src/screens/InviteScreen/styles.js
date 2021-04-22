import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { darkGreen, lightOrange } from '../../assets/colors';

export const Container = styled.SafeAreaView`
  background-color: ${lightOrange};
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.View`
  margin-top: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center
`
export const TextGroup = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center
`

export const RoundedButton = styled.TouchableOpacity`
  height: 55px;
  width: 125px;
  margin-top: 10px;
  border-radius: 10px;
`
export const Gradient = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const InviteInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: white;
  border-style: solid;
  border-width: 2px;
  border-color: ${darkGreen};
  border-radius: 35px;
`

export const WhiteText = styled.Text`
  text-align: center;
  color: white;
  font-size: 18px;
  text-align: center;
  font-family: Montserrat-Regular;
`

export const styles = StyleSheet.create({
  shadowedButton: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10.0,
    elevation: 9
  }
})