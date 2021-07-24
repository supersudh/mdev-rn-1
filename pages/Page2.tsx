import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Page2 = () => {
  const {
    mainView,
    topSectionView,
    midSectionView,
    bottomSectionView,
    strip
  } = styles;
  return (
    <SafeAreaView style={mainView}>
      <View style={[topSectionView, strip]}>

      </View>
      <View style={[midSectionView, strip]}>

      </View>
      <View style={[bottomSectionView, strip]}>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  topSectionView: {
    flex: 0.1,
    backgroundColor: 'orange',
  },
  midSectionView: {
    flex: 0.8,
    backgroundColor: 'green'
  },
  bottomSectionView: {
    flex: 0.1,
    backgroundColor: 'yellow',
  },
  strip: {
    margin: 5,
    borderRadius: 3
  }
});

export default Page2;
