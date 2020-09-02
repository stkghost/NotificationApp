import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

import HomeSceen from './src/components/HomeScreen.js';
//import bgImage from './src/images/dark-metal.jpg';

export default class App extends React.Component {
  render(){
    return(
      <ImageBackground 
        style = {styles.backgroundContainer}
        source = {require('./src/images/dark-metal.jpg')} >
          <HomeSceen />
      </ImageBackground>
    );
  }
} 
const styles = StyleSheet.create ({
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});