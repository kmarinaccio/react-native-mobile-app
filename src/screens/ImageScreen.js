import React from "react";
import { Text, StyleSheet } from "react-native";

const ImageScreen = () => {

    return <Text style={styles.textStyle}>Enter your Zipcode:</Text>
   
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ImageScreen;