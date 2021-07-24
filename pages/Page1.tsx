import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Page1 = () => {
  const {
    mainView,
    topSectionView,
    bottomSectionView,
    bottomFirstHalf,
    bottomSecondHalf,
    bottomSectionViewInner,
    strip,
    separatorMargin
  } = styles;
  return (
    <SafeAreaView style={mainView}>
      <View style={topSectionView}>

      </View>
      <View style={bottomSectionView}>
        <View style={bottomSectionViewInner}>
          <View style={bottomFirstHalf}>
            <View style={strip}></View>
          </View>
          <View style={bottomSecondHalf}>
            <View style={strip}></View>
            <View style={separatorMargin} />
            <View style={strip}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1
  },
  topSectionView: {
    flex: 0.4,
    backgroundColor: 'orange'
  },
  bottomSectionView: {
    flex: 0.6,
    backgroundColor: 'yellow',
  },
  bottomSectionViewInner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  bottomFirstHalf: {
    margin: 10
  },
  bottomSecondHalf: {
    margin: 10,
    marginBottom: 60
  },
  strip: {
    padding: 20,
    backgroundColor: '#147CE0',
    borderRadius: 5
  },
  separatorMargin: {
    marginBottom: 5,
    marginTop: 5
  }
});

export default Page1;