import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const Generator = (props) => {
  return (
    <View style={styles.generator}>
      <Button title="add number" onPress={props.add} />
    </View>
  );
};

const styles = StyleSheet.create({
  generator: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Generator;
