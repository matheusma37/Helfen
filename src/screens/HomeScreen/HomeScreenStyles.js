import { StyleSheet, Dimensions } from 'react-native';

const screenWidthByTwo = Math.round(Dimensions.get('window').width / 2);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flex: 1,
    alignItems: 'center'
  },
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
    color: '#FFFFFF',
    marginTop: 10,
    fontSize: 24,
    fontFamily: 'Montserrat-Regular'
  },
  welcome: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  whiteMidText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular'
  },
  bottom: {
    flex: 0.4,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  button: {
    height: 55,
    width: 195,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  createAccount: {
    backgroundColor: '#19856B',
    marginBottom: 20
  },
  moreInfo: {
    backgroundColor: '#FFFFFF',
    borderColor: '#19856B',
    borderWidth: 2,
    marginBottom: 10
  },
  greenMidText: {
    color: '#19856B',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular'
  },
  enterContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 20
  },
  enterText: {
    color: '#A3A3A3',
    fontSize: 14
  },
  enterButton: {
    color: '#19856B',
    fontSize: 18
  }
})

export default styles;