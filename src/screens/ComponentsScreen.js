import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Bear Paw';

    return (
        <View>
            <Text style={StyleSheet.textStyle}>Getting started with React Native!</Text>
            <Text style={StyleSheet.textStyle2}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    textStyle2: {
        fontSize: 20
    }
});

export default ComponentsScreen;