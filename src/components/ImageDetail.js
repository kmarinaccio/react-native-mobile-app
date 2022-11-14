import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ImageDetail = ({title, imgSource, desc}) => {

    return <View>
        <TouchableOpacity>
            <Image source={imgSource} />
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.descStyle}>{desc}</Text>
        </TouchableOpacity>
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

export default ImageDetail;