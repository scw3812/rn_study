import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Header = ({title}) => {
  return (
    <TouchableOpacity
      style={styles.header}
      // onPress={() => alert('hello world')}
      onLongPress={() => alert('long pressed')}
      onPressIn={()=>alert('pressin')}
      onPressOut={()=>alert('pressout')}>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
