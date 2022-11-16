import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const BoxScreen = () => {

    var [counter, setCounter] = useState(0);
    // setState

    return <View>
            <Button title="Increase" onPress={() => {setCounter(counter + 1)}} />
            <Text style={styles.descStyle}>Number of Boxes: {counter}</Text>
            <Button title="Decrease" onPress={() => {setCounter(counter - 1)}} />

    </View>
   
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    descStyle: {
        fontSize: 15
    }
});

export default BoxScreen;