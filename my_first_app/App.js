import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.childView}>
          <Text style={styles.mainText}>Hello World</Text>
        </View>
        <View style={styles.childView}>
          <Text>Hello World</Text>
        </View>
        <View style={styles.subView}>
          <Text>Hello World</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  childView: {
    flex: 1,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '50%',
  },
  subView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red',
    padding: 10,
  },
});

export default App;
