import React, { useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Logingscreen from './src/Logingscreen.js';
import Dashboard from './src/Dashboard';
import CameraScreen from './src/CameraScreen.js';
import {firebaseConfig} from './firebaseConfig.js'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignupScreen from './src/SignupScreen.js';

const Stack = createNativeStackNavigator();

function App() {

  const[isLoggedIn,setIsLoggedIn] = useState(false)
  const auth = getAuth();
  onAuthStateChanged(auth,(user)=>{
    if(user!=null){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  });
  
  

  
  return (
    <NavigationContainer>
      {isLoggedIn ? <Stack.Navigator>
        <Stack.Screen name="Logingscreen" component={Logingscreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
        
      </Stack.Navigator> :
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Logingscreen" component={Logingscreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
        </Stack.Navigator>}
    </NavigationContainer>
  );
}

export default App;

