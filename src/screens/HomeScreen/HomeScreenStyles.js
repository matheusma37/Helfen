import { StyleSheet } from 'react-native';

import { Colors, Fonts, Sizes } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.softGray,
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  whiteMidText: {
    color: Colors.white,
    fontSize: Sizes.midText,
    fontFamily: Fonts.montserratReg
  },
  bottom: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  createAccount: {
    backgroundColor: Colors.darkGreen,
    marginBottom: Sizes.midMargin
  },
  moreInfo: {
    backgroundColor: Colors.white,
    borderColor: Colors.darkGreen,
    borderWidth: 2,
    marginBottom: Sizes.midMargin
  },
  greenMidText: {
    color: Colors.darkGreen,
    fontSize: Sizes.midText,
    fontFamily: Fonts.montserratReg
  },
  enterContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: Sizes.midMargin
  },
  enterText: {
    color: Colors.midGray,
    fontSize: Sizes.smallText
  },
  enterButton: {
    color: Colors.darkGreen,
    fontSize: Sizes.midText
  }
})

export default styles;