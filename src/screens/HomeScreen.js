import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";


const HomeScreen = ({ navigation }) => {

  const greeting = <Text style={styles.greet}>Welcome Home!</Text>; 
  const yourName = 'Friend'
  return <View>
      {greeting}
      <Text style={styles.text}>Welcome back {yourName}!</Text>
      <Text style={styles.text}>Your yard is currently empty.</Text>
      <Button onPress={() => navigation.navigate('List')} title="Establish Your Yard" />
      <Button onPress={() => navigation.navigate('WeatherAlerts')} title="Weather Alerts" />
      <Button onPress={() => navigation.navigate('Images')} title="Image Screen" />
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