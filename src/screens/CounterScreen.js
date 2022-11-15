import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {

    return <View>
            <Text style={styles.descStyle}>Counter Screen</Text>
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

export default CounterScreen;