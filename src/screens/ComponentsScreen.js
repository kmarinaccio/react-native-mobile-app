import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Bear Paw';

    return <Text style={styles.textStyle}>My name is {name}</Text>;
   
};

const styles = StyleSheet.create({
    
    textStyle: {
        fontSize: 45
    }

});

export default ComponentsScreen;