import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

function Home({setIsLoggedIn}) {
  return (
    <View style={styles.main}>
      <Text style={styles.textStyle}>Home</Text>

      <Button style={styles.logoutBtn} title='Logout' onPress={()=> {
        setIsLoggedIn(false);
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: '',
    fontSize: 100,
  },

  main:{
    flex:1,
  }
})

export default Home