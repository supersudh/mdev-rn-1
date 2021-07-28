import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Page6 = () => {
  const {
        mainView,
        midSectionView,
        bottomSectionView,
        strip
      } = styles;
      return (
        <SafeAreaView style={mainView}>
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
      midSectionView: {
        flex: 1,
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

export default Page6;
