import React,{useState}from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Background from './Background';
import Button from './Button';
import { darkGreen } from './constants';
import Field from './Field';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {firebaseConfig} from '../firebaseConfig'
import {Logingscreen} from './Logingscreen';

export default function SignupScreen({navigation}) {
  const [values,setValues] = useState({
    firstName:"",
    lastName:"",
    email:"",
    contactNumber:"",
    password:"",
    confirmPassword:"",

  })

  function handleChange(text,eventName){
    setValues(prev=>{
      return{
        ...prev,
        [eventName]:text
      }
    })
  }

  function SignUp(){
    const {firstName,lastName,email,contactNumber,password,confirmPassword} = values
    const auth = getAuth();
    if(password==confirmPassword){
      createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
          alert("Successfully created account!");
          navigation.navigate("Logingscreen", { email, password });
        })
        .catch((error)=>{
          alert(error.message)
        });
    }else{
      alert("Passwords are different!");
    }

  }

  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
            paddingRight:60
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
            paddingRight:60
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
            
          <View style={{ alignItems: 'justify', width: '100%', marginBottom: 2, paddingLeft: 70 }}>
            <Field placeholder="First Name" onChangeText={text=>handleChange(text,"firstName")}/>
            <Field placeholder="Last Name" onChangeText={text=>handleChange(text,"lastName")}/>
            <Field placeholder="Email / Username" keyboardType={'email-address'} onChangeText={text=>handleChange(text,"email")}/>
            <Field placeholder="Contact Number" keyboardType={'numeric'} onChangeText={text=>handleChange(text,"contactNumber")} />
            <Field placeholder="Password" secureTextEntry={true} onChangeText={text=>handleChange(text,"password")} />
            <Field placeholder="Confirm Password" secureTextEntry={true} onChangeText={text=>handleChange(text,"confirmPassword")}/>
          </View>
          <View style={{alignItems:'center',width: '95%',paddingRight:60,display:'flex',flexDirection:'row'}}>
            <Text style={{ color: 'grey', fontSize: 16 }}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Terms & Conditions
            </Text>
          </View>

          <View style={{ alignItems:'center',display: 'flex', flexDirection: 'row', width: '90%', paddingLeft: 90, marginBottom: 50 }}>
            <Text style={{ color: 'grey', fontSize: 16 }}>
              and {" "}
            </Text>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
              Privacy Policy
            </Text>
          </View>
          <View style={{alignItems:'center',width:'60%',paddingRight:60}}>
            <Button
                textColor="white"
                bgColor={darkGreen}
                btnLabel="Signup"
                Press={() => SignUp()
                }
            />
          </View>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',paddingRight:60 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Logingscreen')}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};


