import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AppStack = ({setIsLoggedIn}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home">
            {(props) => <Home {...props} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
    </Stack.Navigator>
  )
}

export default AppStack
