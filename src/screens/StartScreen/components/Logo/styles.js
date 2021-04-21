import { StyleSheet, Dimensions } from 'react-native';

const screenWidthByTwo = Math.round(Dimensions.get('window').width / 2);

const styles = StyleSheet.create({
  logo: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  logoImage: {
    width: screenWidthByTwo,
    height: screenWidthByTwo
  },
  logoText: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 24,
    fontFamily: 'Montserrat-Regular'
  }
})

export default styles;