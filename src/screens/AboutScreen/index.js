import React, { useState } from 'react';
import { StatusBar, ScrollView, Dimensions } from 'react-native';

import {
  Container,
  ViewCard,
  Footer,
  ScrollDot
} from './styles';

import AboutUs from './components/AboutUs';

import { darkGreen } from '../../assets/colors';

export default AboutScreen = () => {
  const [sliderState, setSliderState] = useState({ currentPage: 0 });
  const { width } = Dimensions.get('window');

  const setSliderPage = (event) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <Container>
      <StatusBar barStyle='light-content' backgroundColor={darkGreen} />
      <ViewCard>
        <ScrollView
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={(event) => {
            setSliderPage(event);
          }} >
          <AboutUs width={width} />
        </ScrollView>
      </ViewCard>
      <Footer>
        {
          Array.from(Array(2).keys()).map((_, index) => (
            <ScrollDot style={{ opacity: pageIndex === index ? 1 : 0.2 }} key={index} />
          ))
        }
      </Footer>
    </Container >
  );
}