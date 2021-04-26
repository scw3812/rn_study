import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => (
  <View style={styles.header}>
    <Text>This is Header</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
