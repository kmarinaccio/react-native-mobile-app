import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {

    return <Text style={styles.textStyle}>My name is Kristy</Text>
   
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
});

export default ComponentsScreen;