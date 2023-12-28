import React, { useState } from 'react';
import { View, Text, TouchableOpacity,ImageBackground } from 'react-native';
import Background from './Background';
import Button from './Button';
import { darkGreen } from './constants';
import Field from './Field';
import SignupScreen from './SignupScreen';
import { useNavigation} from '@react-navigation/native';
import Dashboard from './Dashboard';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig} from '../firebaseConfig'

export default function Logingscreen({navigation})  {

  
  const [values,setValues] = useState({
    email:"",
    password:""
  })

  function handleChange(text,eventName){
    setValues(prev=>{
      return{
        ...prev,
        [eventName]:text
      }
    })
  }

  function Login(){
    const {email,password} = values
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
      .then(()=>{
        alert("Successfully logged in!");
        navigation.navigate("Dashboard")
      })
      .catch((error)=>{
        alert(error.message)
      });

  }

  
  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 20,
            paddingRight:60
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 40, color: darkGreen, fontWeight: 'bold', paddingRight: 50 }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
              paddingRight: 50,
            }}>
            Login to your account
          </Text>
          <View style={{ alignItems: 'justify', width: '100%', marginBottom: 2,paddingLeft:70 }}>
            <Field
              placeholder="Email / Username"
              keyboardType={'email-address'}
              style={{ marginBottom: 16,width:'100%'}}
              onChangeText = {text=>handleChange(text,"email")}
              autoCapitalize = "none"
            />
            <Field placeholder="Password" secureTextEntry={true} style={{ width: '100%' }} onChangeText = {text=>handleChange(text,"password")} />
          </View>
          <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 65, marginBottom: 10 }}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Forgot Password ?
            </Text>
          </View>
          <View style={{alignItems:'justify',width:'100%',paddingLeft:30}}>
            <ImageBackground
                source={require('./assets/teaplant.jpg')}
                style={{
                width: 230,
                height: 230,
                marginBottom: 10,
                marginHorizontal:50
                }}>
            </ImageBackground>
          </View>
          <View style={{alignItems:'center',width:'60%',paddingRight:60}}>
          <Button textColor="white" bgColor={darkGreen} btnLabel="Login" Press={() => Login()} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 5,paddingRight:60 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};



