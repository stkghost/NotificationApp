import React from 'react';
import {Text, View, StyleSheet, ImageBackground, Image, TextInput, Dimensions, Alert, ActivityIndicator, TouchableOpacity, } from 'react-native';
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


const {width: WIDTH } = Dimensions.get('window')

export  default class LoginScreen extends React.Component {

  constructor(props){
    super(props);
    this.state={
      mail: '',
      password: '',
      isLoading: false,
      messege: '',

    }
  }

  componentDidMount(){
    const firebaseConfig = {
    apiKey: "AIzaSyAkPHDJG1Zib5ediNobarSVnpUn0lDmOdQ",
    authDomain: "pushnotification-66cac.firebaseapp.com",
    databaseURL: "https://pushnotification-66cac.firebaseio.com",
    projectId: "pushnotification-66cac",
    storageBucket: "pushnotification-66cac.appspot.com",
    messagingSenderId: "162463503291",
    appId: "1:162463503291:web:a5ec678e831658a39b2a9e",
    measurementId: "G-6CS81DJXVR"
    }
    firebase.initializeApp(firebaseConfig) 
  }
  onChangeHandler(field, value) {
    this.setState({ 
        [field]: value
     });
}
tryLogin(){
    this.setState({isLoading: true, messege: ''});
        const {mail, password} = this.state;

        const loginUserSucess = user => {
            this.setState({messege: <Text style={{color: 'white'}}>Sucesso!</Text>})
        } 
        const loginUserFaild = error => {
            this.setState({
                messege: this.getMesseByErrorCode(error.code)
            })
        }

        firebase.auth().signInWithEmailAndPassword(mail, password) 
        .then(loginUserSucess)
        .catch(error => {

            if(error.code === 'auth/user-not-found')
            {
                Alert.alert ('Usuário não encontrado',
                'Deseja cadastrar-se?',
                [{
                    text: 'Não',
                    // onPress: () => {},
                   },{
                    text: 'Sim',
                    onPress: () => {
                        firebase
                            .auth()
                            .createUserWithEmailAndPassword( mail, password)
                            .then(loginUserSucess)
                            .catch(loginUserFaild)
                        }
                   }],
                   {cancelable: false}
                )
            } else {
                loginUserFaild
            }
            
        })
        .then(() => this.setState({isLoading: false}) )
    }
    getMesseByErrorCode(errorCode){
        switch(errorCode){
            case 'auth/wrong-password':
                return <Text style={{color: 'white'}}>Senha Incorreta</Text>
            case 'auth/user-not-found':
                return <Text style={{color: 'white'}}>usuário não encontrado</Text>
            default: 
                return <Text style={{color: 'white'}}>Erro desconhecido</Text>
        }
    }

    renderMessege(){
        const {messege} = this.state;
        if (!messege)
            return null;
        return(
            <View>
                <Text>
                    {messege}
                </Text>
            </View>
        )
    }
    
renderButton(){
    if (this.state.isLoading)
        return<ActivityIndicator />
    return (
        <TouchableOpacity style={styles.buttonContainer}
        onPress={() => this.tryLogin()} 
    >
        <Text style={styles.textButton}>
            Entrar
        </Text>
    </TouchableOpacity>
    )
}
  render () {
    return (
       
        <ImageBackground 
            style = {styles.backgroundContainer}
            source = {require('../images/dark-metal.jpg')} >
            <View style={styles.topContainer}>
                <Image style={styles.logo}
                source ={require('../images/macohin-branca.png')}>
                </Image>
            </View>
                <View style={styles.loginContainer}>    
                    <View>
                        <TextInput
                        style = {styles.input}
                        placeholder ={'Usuário'}
                        placeholderTextColor = {'#e0e0e0'}
                        //underlineColorAndroid = 'white'
                        autoCapitalize = 'none'
                        value={this.state.mail}
                        onChangeText={value => this.onChangeHandler('mail', value)}
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
                        value={this.state.password}
                        onChangeText={value => this.onChangeHandler('password', value)}
                        >
                        </TextInput>
                    </View>    
                        {this.renderButton()}
                        {this.renderMessege()}
                        {/* <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.textButton}>
                            Entrar
                        </Text>
                        </TouchableOpacity> */}
                    
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
