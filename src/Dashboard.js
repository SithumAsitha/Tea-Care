import React, { useState, useRef } from 'react';
import Background from './Background';
import Button from './Button';
import { darkGreen } from './constants';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Modal,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import CameraScreen from './CameraScreen';


const Dashboard = ({ navigation }) => {
  const steps = [
    'Step 1: Click on the "Take a Photo" button to navigate to the camera screen.',
    '',
    'Step 2: Capture the image of the tea leaf.',
    '',
    'Step 3: Submit the image to get the disease prediction.',
  ];



  return (
    <Background>
      <View style={{ alignItems: 'center', width: 460 }}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop: 20,
            paddingRight: 60,
          }}>
          Welcome to Tea Care!
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
          <Text
            style={{
              color: 'white',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
              paddingRight: 60,
            }}>
            Welcome to Tea Care..
          </Text>

          {/* Display Steps */}
          <View style={{ alignItems: 'justify', width: '78%', marginBottom: 20, paddingLeft: 0, paddingRight: 20 }}>
            {steps.map((step, index) => (
              <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                
                <Text style={{ color: 'grey', fontSize: 16, fontWeight: 'bold' }}>{step}</Text>
              </View>
            ))}
          </View>

          
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', paddingLeft: 30 }}>
            <ImageBackground
              source={require('./assets/tealeaf.jpg')}
              style={{
                width: 80,
                height: 80,
                marginBottom: 10,
                marginHorizontal: -18, // Adjusted margin for spacing
              }}
            />
            <ImageBackground
              source={require('./assets/boytakephoto.jpg')}
              style={{
                width: 230,
                height: 230,
                marginBottom: 10,
                marginHorizontal: 1, // Adjusted margin for spacing
              }}
            />
          </View>
          {/* Buttons for Navigating */}
          <View style={{ alignItems: 'center', width: '60%', paddingRight: 60 }}>
            <Button textColor="white" bgColor={darkGreen} btnLabel="Take a Photo" Press={() => navigation.navigate('CameraScreen') } />
          </View>
        </View>
      </View>

    </Background>
  );
};

export default Dashboard;
