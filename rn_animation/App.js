/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Anim01 from './src/Animation01';
import Anim02 from './src/Animation02';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Anim02 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
