import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Image, TextInput, Dimensions, SafeAreaView, TouchableOpacity, } from 'react-native';

const {width: WIDTH } = Dimensions.get('window')

export  default class LoginScreen extends React.Component {
  render () {
    return (
       
        <ImageBackground 
            style = {styles.backgroundContainer}
            source = {require('../images/dark-metal.jpg')} >
            <View style={styles.topContainer}>
                <Image style={styles.logo}
                source ={require('../images/macohin-branca.png')}>
                </Image>
                <Text style = {styles.textContent}> Sistema Intranet </Text>
            </View>
                <View style={styles.loginContainer}>    
                    <View>
                        <TextInput
                        style = {styles.input}
                        placeholder ={'Usuário'}
                        placeholderTextColor = {'#e0e0e0'}
                        //underlineColorAndroid = 'white'
                        autoCapitalize = 'none'
                        >
                        </TextInput>
                    </View>
                    <View>
                        <TextInput
                        style = {styles.input}
                        placeholder ={'Senha'}
                        secureTextEntry = {true}
                        placeholderTextColor = {'#e0e0e0'}
                        //underlineColorAndroid = 'white'
                        autoCapitalize = 'none'
                        >
                        </TextInput>
                    </View>    
                        <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.textButton}>
                            Entrar
                        </Text>
                        </TouchableOpacity>
                    
                        <TouchableOpacity style={styles.forgotContainer}>
                        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                </View>
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
  topContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
  },
  
  loginContainer: {
    backgroundColor: 'transparent',
    flex: 3,    
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#8d8d8d',
    padding: 25,
    marginBottom: 25
  },
  logo: {
    width: 120,
    height: 120
  },
  textContent: {
    color: '#e0e0e0',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 15,
  },
  input: {
    width: WIDTH - 75,
    height: 45,
    borderRadius: 9,
    backgroundColor: 'transparent',
    marginTop: 23,
    paddingLeft: 10,
    color: '#efefef',
    borderWidth: 1,
    borderColor: '#8d8d8d'
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTH - 75,
    height: 45,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#707070',
    backgroundColor: 'rgba(100, 100, 100, 0.4)',
    marginTop: 23,
  },
  textButton: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  forgotContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    // borderWidth: 0.5,
    // borderColor: 'white',
    // borderRadius: 9,
    marginTop: 25
  },
  forgotText: {
    color: 'white',
    // alignSelf: 'center'
  }
});
