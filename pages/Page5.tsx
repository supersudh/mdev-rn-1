import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Page5 = () => {
  return (
    <SafeAreaView style = {styles.wrapper}>
            <View style = {styles.element1}/>
            <View style = {styles.element1}/>
            <View style = {styles.element1}/>
            <View style = {styles.element1}/>
            <View style = {styles.element2}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        flexWrap:'wrap',
        marginLeft:10
    },
    element1:{
        backgroundColor:'#07afd9',
        width:400,
        height:110,   
        margin:5
    },
    element2:{
        backgroundColor:'#7253e6',
        width:100,
        height:100,
        position:'absolute',
        bottom:0,
        right:15,
        marginBottom: 45
    },
});

export default Page5;
