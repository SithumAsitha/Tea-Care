import React, { useRef, useEffect } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import tw from 'twrnc';

export default function Image() {
  return (
    <View style={tw`w-[100] h-[100] flex-1 justify-center items-center`}>
      <LottieView
        source={require('./assets/Animation - 1703780397909.json')}
        autoPlay
        loop
        style={tw`w-[100] h-[100] z-10`}
      />
    </View>
  );
}

const styles = StyleSheet.create({});