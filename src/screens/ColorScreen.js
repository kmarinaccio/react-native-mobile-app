import React, { useState } from "react";
import { View, StyleSheet, Button } from "react-native";

const ColorScreen = () => {

    var [counter, setCounter] = useState(0);
    // setState

    return <View>
            <Button title="Add A Color" onPress={() => {setCounter(counter - 1)}} />
            </View>
   
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ColorScreen;