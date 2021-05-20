/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

class App extends Component {
  state = {
    avatar: '',
  };

  addImage = () => {
    launchCamera({}, response => {
      this.setState({avatar: response.uri});
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.state.avatar}} style={styles.avatar} />
        <Button title="Add on Image" onPress={() => this.addImage()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4ab26',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default App;
