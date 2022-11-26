import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

const SquareScreen = () => {

    var [colors, setColors] = useState([]);

    return <View>
                <Text style={styles.textStyle}>Square Screen</Text>
            </View>
   
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default SquareScreen;