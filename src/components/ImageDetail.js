import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const ImageDetail = props => {

    console.log(props);

    return <View>
            <TouchableOpacity>
                <Image source={props.imgSource} />
                <Text style={styles.textStyle}>{props.title}</Text>
            </TouchableOpacity>
    </View>
   
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ImageDetail;