import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {

    const usdaZones = [
        { name: '1a', fTemp: '-60 to -55', cTemp: '-51.1 to -48.3'},
        { name: '1b', fTemp: '-55 to -50', cTemp: '-48.3 to -45.6'},
        { name: '2a', fTemp: '-50 to -45', cTemp: '-45.6 to -42.8'},
        { name: '2b', fTemp: '-45 to -40', cTemp: '-42.8 to -40'},
        { name: '3a', fTemp: '-40 to -35', cTemp: '-40 to -37.2'},
        { name: '3b', fTemp: '-35 to -30', cTemp: '-37.2 to -34.4'},
        { name: '4a', fTemp: '-30 to -25', cTemp: '-34.4 to -31.7'},
        { name: '4b', fTemp: '-25 to -20', cTemp: '-31.7 to -28.9'},
        { name: '5a', fTemp: '-20 to -15', cTemp: '-28.9 to -26.1'},
        { name: '5b', fTemp: '-15 to -10', cTemp: '-26.1 to -23.3'},
        { name: '6a', fTemp: '-10 to -5', cTemp: '-23.3 to -20.6'},
        { name: '6b', fTemp: '-5 to 0', cTemp: '-20.6 to -17.8'},
        { name: '7a', fTemp: '0 to 5', cTemp: '-17.8 to -15'},
        { name: '7b', fTemp: '5 to 10', cTemp: '-15 to -12.2'},
        { name: '8a', fTemp: '10 to 15', cTemp: '-12.2 to -9.4'},
        { name: '8b', fTemp: '15 to 20', cTemp: '-9.4 to -6.7'},
        { name: '9a', fTemp: '20 to 25', cTemp: '-6.7 to -3.9'},
        { name: '9b', fTemp: '25 to 30', cTemp: '-3.9 to -1.1'},
        { name: '10a', fTemp: '30 to 35', cTemp: '-1.1 to 1.7'},
        { name: '10b', fTemp: '35 to 40', cTemp: '1.7 to 4.4'},
        { name: '11a', fTemp: '40 to 45', cTemp: '4.4 to 7.2'},
        { name: '11b', fTemp: '45 to 50', cTemp: '7.2 to 10'},
        { name: '12a', fTemp: '50 to 55', cTemp: '10 to 12.8'},
        { name: '12b', fTemp: '55 to 60', cTemp: '12.8 to 15.6'},
        { name: '13a', fTemp: '60 to 65', cTemp: '15.6 to 18.3'},
        { name: '13b', fTemp: '65 to 70', cTemp: '18.3 to 21.1'},
    ];

    return (<View><Text style={styles.textStyle}>Select USDA Hardiness Region:</Text>
            <FlatList data={usdaZones} renderItem={({item}) => {
                return <Text style={styles.listStyle}>{item.name}</Text>;
                }} 
            />
            </View>
        );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    },
    listStyle: {
        fontSize: 18
    }
});

export default ListScreen;