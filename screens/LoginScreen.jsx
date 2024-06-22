
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

const LoginScreen = ({navigation, setIsLoggedIn}) => {

  const[isSecureText, setIsSecureText] = useState(true)

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.logoView}>
        <Image 
          style={styles.logo}
          source={require('./images/logo.png')}
        />
        
        <Text style={styles.logoText}>KJ Somaiya College of{'\n'} Engineering</Text>
      </View>

      <View style={styles.main}>

        <Text style={styles.welcomeText}>Welcome to{'\n'}KJSCE's CIMS</Text>
        
        <TextInput placeholder="Email ID" style={styles.input} />

        <View style={styles.inputContainer}> 
          <TextInput placeholder="Password" secureTextEntry={isSecureText} style={styles.input} />

          <TouchableOpacity style={styles.eye} onPress={() => {setIsSecureText((x) => !x)}}>
            <Feather name={isSecureText ? 'eye' : 'eye-off'} size={22} />
          </TouchableOpacity>

        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => {
            setIsLoggedIn(true);
        }}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

      </View>      

      <Text style={styles.footerText}>
        By logging in, you agree to <Text style={styles.linkText}>Terms of Service</Text>. Be respectful to the community.
      </Text>
      
      
      <Text style={styles.resetText}>Forgot Password? <Text style={styles.resetLinkText} onPress={()=>{
        navigation.navigate('ResetScreen')}
      }>Reset</Text></Text>

    
    </SafeAreaView>
  );
};

const {width, height} = Dimensions.get('window')


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    height: height,
    width:width,
  },

  logoText: {
    color: '#B7202E',
    textAlign: 'center',
    fontSize: 11
  },

  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
 
  welcomeText: {
    fontSize: 42,
    color: 'black',
    fontWeight: '600',
    marginBottom: 56,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  input: {
    width: '85%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    marginVertical: 15,
    borderColor: '#dcdcdc',
    borderWidth: 1,
  },
  loginButton: {
    width: '85%',
    height: 50,
    backgroundColor: '#B7202E',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    marginBottom: 70
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  logoView:{
    display: 'flex',
    alignItems:'center',
    marginBottom: 52
  },

  footerText: {
    fontSize: 12,
    color: '#808080',
    textAlign: 'left',
    alignSelf: 'flex-start',
    left: '8%',
    width: '90%'
  },
  linkText: {
    color: '#B7202E',
  },
  resetText: {
    fontSize: 14,
    color: '#808080',
    textAlign: 'left',
    alignSelf: 'flex-start',
    left: '8%',
    marginTop: 50
    
  },
  resetLinkText: {
    color: '#B7202E',
  },


  main: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20
  },


  inputContainer:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    flexDirection:'row',
    alignItems:'center'

  },

  eye:{
    position:'absolute',
    right: '15%'
  }
});

export default LoginScreen;
