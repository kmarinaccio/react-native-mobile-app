import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

    return <View>
        <ImageDetail title="Yard(s)" imgSource={require("../../assets/beach.jpg")} desc="View your yard and inspection notes." />
        <ImageDetail title="Alerts" imgSource={require("../../assets/mountain.jpg")} desc="Scheduling inspections to winterizing." />
        <ImageDetail title="Advice" imgSource={require("../../assets/forest.jpg")} desc="Get advice for fellow hobbyist." />
        <ImageDetail title="Visual Detection BETA!" imgSource={require("../../assets/beach.jpg")} desc="Upload a picture of frames for detection."/>
        <ImageDetail title="Weather Trends BETA!" imgSource={require("../../assets/forest.jpg")} desc="view upcoming weather and info in micro-climates."/>
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