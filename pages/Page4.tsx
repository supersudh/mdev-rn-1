import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform } from "react-native";

const Page4 = () => {
    return (
        <SafeAreaView style = {styles.wrapper}>
            <View style = {styles.box1}/>
            <View style = {styles.box1}/>
            <View style = {styles.box1}/>
            <View style = {styles.box1}/>
            <View style = {styles.box1}/>
            <View style = {styles.box1}/>
            <View style = {styles.box1}/>
            <View style = {styles.box1}/>
            <View style = {styles.box1}/>
            <View style = {styles.box2}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'white',
        flexWrap:'wrap',
        marginLeft:25
    },
    box1:{
        backgroundColor:'blue',
        width:110,
        height:110,   
        margin:5
    },
    box2:{
        backgroundColor:'green',
        width:100,
        height:100,
        position:'absolute',
        bottom:0,
        right:15,
        marginBottom:20
    },
})

export default Page4;
