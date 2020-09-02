import React from 'react';
import {Text, View, StyleSheet, Image, TextInput, Dimensions, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons';

const {width: WIDTH } = Dimensions.get('window')

export  default class App extends React.Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>  
        <View style={styles.topContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo}
              source ={require('../images/macohin-branca.png')}>
            </Image>
            </View>  
            <Text style = {styles.textContent}>
              Sistema Intranet
            </Text>
        </View>
            <View style={styles.loginContainer}>    
                <View>
                    <TextInput
                      style = {styles.input}
                      placeholder ={'Usuário'}
                      placeholderTextColor = {'#8d8d8d'}
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
                      placeholderTextColor = {'#8d8d8d'}
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
            </View>
          
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flex: 2
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
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
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 15,
    opacity: 0.5
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
    backgroundColor: 'transparent',
    marginTop: 23,
  },
  textButton: {
    alignSelf: 'center',
    color: 'white',
    
  }
});
