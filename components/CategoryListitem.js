import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";
import CameraImage from '../assets/camera.png';

export default function CategoryListitem(props){
    return <View style={styles.container}>
        <Text style={styles.title}>Category</Text>
        <Image style={styles.categoryImage} source={CameraImage}/>
    </View>
}

const styles = StyleSheet.create({
    container: {
       alignItems: 'center',
       padding: 16,
       borderRadius: 4,
       backgroundColor: '#fff',
       shadowColor: '#000',
       shadowOpacity: 0.1,
       elevation: 10,
       shadowRadius: 10,
       shadowOffset: {width: 0, height: 0},
       marginBottom: 16
      },
    categoryImage: {
        width: 64,
        height: 64
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700'
      },
});