import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

    return <View>
        <ImageDetail title="Yard(s)" imgSource={require("../../assets/beach.jpg")} />
        <ImageDetail title="Weather Trends" imgSource={require("../../assets/forest.jpg")} />
        <ImageDetail title="Alerts" imgSource={require("../../assets/beach.jpg")}/>
        <ImageDetail title="Advice" imgSource={require("../../assets/forest.jpg")}/>
        <ImageDetail title="Visual Search BETA!" imgSource={require("../../assets/beach.jpg")} />
    </View>
   
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