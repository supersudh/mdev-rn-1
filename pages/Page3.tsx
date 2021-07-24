import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Page3 = () => {
  const {
    mainView,
    topView,
    bottomView,
    cube,
    topCard,
    bottomCard1,
    bottomCard2
  } = styles;
  return (
    <SafeAreaView style={mainView}>
      <View style={topView}>
        <View style={cube}></View>
        <View style={topCard}></View>
      </View>
      <View style={bottomView}>
        <View style={bottomCard1}></View>
        <View style={bottomCard2}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
  },
  topView: {
    flex: 0.5,
    flexDirection: 'column',
    margin: 5
  },
  bottomView: {
    flex: 0.5,
    justifyContent: 'flex-end',
    margin: 5
  },
  cube: {
    width: 25,
    height: 25,
    backgroundColor: '#147CE0',
    alignSelf: 'flex-end',
    borderRadius: 4
  },
  topCard: {
    backgroundColor: 'green',
    width: '100%',
    height: 75,
    borderRadius: 4,
    marginTop: 10
  },
  bottomCard1: {
    height: 50,
    backgroundColor: 'red',
    borderRadius: 4
  },
  bottomCard2: {
    height: 40,
    backgroundColor: 'pink',
    marginTop: 10,
    marginBottom: 15,
    borderRadius: 4
  }
});

export default Page3;