import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';

export default class HomeScreen extends React.Component {
  render(){
    return(
      <ImageBackground 
        style = {styles.backgroundContainer}
        source = {require('../images/dark-metal.jpg')} >
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
  },
});