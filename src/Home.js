import React from "react";
import { View, StyleSheet, Text } from 'react-native';
import Background from "./Background";
import Button from "./Button";
import { darkGreen, green } from "./constants";
import SignupScreen from "./SignupScreen"
import Logingscreen from "./Logingscreen";


const Home = (props) => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Tea Care</Text>
        <Text style={styles.subtitle}>"Explore the World of Tea Leaves Disease Prediction!"</Text>
        <Text style={styles.description}>
          Tea Care brings you advanced tools to predict and prevent diseases in tea leaves. 
          Join us on a journey to revolutionize tea farming through technology.
        </Text>
        <Button bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Logingscreen")} />
        <Button bgColor='white' textColor={darkGreen} btnLabel="Sign Up" Press={() => props.navigation.navigate("SignupScreen")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginVertical: 100,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  description: {
    color: 'white',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 30,
  },
});

export default Home;
