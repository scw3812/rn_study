/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, StyleSheet, Platform, Dimensions} from 'react-native';
import SuperText from './src/utils/supertext';
import DeviceInfo from 'react-native-device-info';

class App extends Component {
  checkSupport = () => {
    if (Platform.OS === 'ios') {
      if (Platform.Version < 13.4) {
        return false;
      }
    } else {
      if (Platform.Version < 27) {
        return false;
      }
    }
    return true;
  };
  render() {
    // console.warn(Dimensions.get('screen'));
    // console.warn(Dimensions.get('window'));
    console.warn(DeviceInfo.getBrand());
    console.warn(DeviceInfo.isTablet());
    return (
      <View style={styles.container}>
        {this.checkSupport() ? (
          <SuperText style={{backgroundColor: 'red'}}>
            {Platform.OS === 'ios' ? 'ios' : Platform.Version}
          </SuperText>
        ) : (
          <SuperText>no</SuperText>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        backgroundColor: '#bbb',
      },
      android: {
        backgroundColor: 'black',
      },
    }),
  },
});

export default App;
