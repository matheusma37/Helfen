import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts, Sizes } from '../../utils/constants';

const screenWidthByTwo = Math.round(Dimensions.get('window').width / 2);

const styles = StyleSheet.create({
  logo: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    width: screenWidthByTwo,
    height: screenWidthByTwo
  },
  logoText: {
    color: Colors.white,
    marginTop: Sizes.smallMargin,
    fontSize: Sizes.bigText,
    fontFamily: Fonts.montserratReg
  }
})

export default styles;