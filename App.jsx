import React, {useState} from "react";
import AppStack from './stacks/AppStack';
import AuthStack from "./stacks/AuthStack";

import { NavigationContainer } from "@react-navigation/native";

 function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false)


   return(
    
    <NavigationContainer>
      {isLoggedIn ? <AppStack setIsLoggedIn={setIsLoggedIn}/> : <AuthStack setIsLoggedIn={setIsLoggedIn} />}
    </NavigationContainer>
    
   )
 }



 export default App;