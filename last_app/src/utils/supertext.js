/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

const SuperText = props => (
  <Text
    // {...props}
    // style={styles.supertext}
    style={[styles.supertext, props.style]}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  supertext: {
    backgroundColor: 'skyblue',
    width: 300,
    padding: 15,
    color: 'blue',
    fontSize: 25,
  },
});

export default SuperText;
