import { SafeAreaView, StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

function Reset(){
  return (
    <SafeAreaView style={styles.main}>

      <Text style={styles.heading}>Enter Your Email</Text>


      <TextInput placeholder="Email" style={styles.input} />


      <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>


    </SafeAreaView>

    
  )
}

export default Reset;

const styles = StyleSheet.create({
    main: {
        flex:1,
        alignItems: 'center',
        backgroundColor:'#f7f7f7'
    },

    heading : {
        marginVertical: 50,
        fontSize: 36,
        fontWeight:'bold',
        color:'#454545',
    },

    input: {
        width: '85%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        borderColor: '#dcdcdc',
        borderWidth: 1,
      },

      resetButton:{
        width: '85%',
        height: 50,
        backgroundColor: '#B7202E',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 30,
        marginBottom: 60
      },

      resetButtonText:{
        color:'white',
        fontSize: 14
      }

})