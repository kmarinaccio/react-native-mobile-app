import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const greeting = <Text style={styles.greet}>Welcome to the Home Screen!</Text>; 
  const yourName = 'Kristy'
  return <View>
      {greeting}
      <Text style={styles.text}>Welcome back {yourName}!</Text>
      
  </View>
};

const styles = StyleSheet.create({
  greet: {
    fontSize: 45,
  },
  text: {
    fontSize: 20,
  },
});

export default HomeScreen;