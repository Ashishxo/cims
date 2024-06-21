import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen';
import Reset from '../screens/Reset';

const Stack = createNativeStackNavigator();

const AuthStack = ({setIsLoggedIn}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
        </Stack.Screen>
        
        <Stack.Screen name='ResetScreen' component={Reset}/>
    </Stack.Navigator>
  )
}



export default AuthStack;
