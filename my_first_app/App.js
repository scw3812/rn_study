import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/Header';

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Header />
        <View style={styles.childView}>
          <Text style={styles.mainText}>Hello World</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  childView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 10,
  },
});

export default App;
