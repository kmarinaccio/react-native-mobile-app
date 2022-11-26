import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {

    var [colors, setColors] = useState([]);

    return <View>
                <ColorCounter />
                <ColorCounter />
                <ColorCounter />
            </View>
   
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default SquareScreen;