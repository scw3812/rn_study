import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from './src/Header';
import Generator from './src/Generator';
import NumList from './src/NumList';

class App extends Component {
  state = {
    appName: 'My first App',
    random: [36, 999],
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState((prevState) => {
      return {
        random: [...prevState.random, randomNum],
      };
    });
  };

  onNumDelete = (idx) => {
    const newArr = this.state.random;
    newArr.splice(idx, 1);

    this.setState({
      random: newArr,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Header title={this.state.appName} />
        <View style={styles.childView}>
          <Text style={styles.mainText} onPress={this.onAddRandomNum}>
            Hello World
          </Text>
        </View>
        <Generator add={this.onAddRandomNum} />
        <NumList num={this.state.random} delete={this.onNumDelete} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // justifyContent: 'center',
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
