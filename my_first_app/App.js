/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Picker from './src/Picker';
// import Header from './src/Header';
// import Generator from './src/Generator';
// import NumList from './src/NumList';
// import Input from './src/Input';

class App extends Component {
  state = {
    // appName: 'My first App',
    // random: [36, 999],
    myTextInput: '',
    alphabet: [],
  };

  // onAddRandomNum = () => {
  //   const randomNum = Math.floor(Math.random() * 100) + 1;
  //   this.setState((prevState) => {
  //     return {
  //       random: [...prevState.random, randomNum],
  //     };
  //   });
  // };

  // onNumDelete = (idx) => {
  //   const newArr = this.state.random;
  //   newArr.splice(idx, 1);

  //   this.setState({
  //     random: newArr,
  //   });
  // };

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event,
    });
  };

  onAddTextInput = () => {
    this.setState((prevState) => {
      return {
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput],
      };
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Picker />
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
          maxLength={10}
          autoCapitalize="sentences"
          editable={true}
        />
        <Button title="Add text Input" onPress={this.onAddTextInput} />
        <ScrollView style={{width: '100%'}}>
          {this.state.alphabet.map((value, index) => (
            <Text style={styles.mainText} key={index}>
              {value}
            </Text>
          ))}
        </ScrollView>
        {/* <Header title={this.state.appName} />
        <View style={styles.childView}>
          <Text style={styles.mainText} onPress={this.onAddRandomNum}>
            Hello World
          </Text>
        </View>
        <Generator add={this.onAddRandomNum} />
        <ScrollView style={{width: '100%'}} bounces={false}>
          <NumList num={this.state.random} delete={this.onNumDelete} />
        </ScrollView> */}
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
  // childView: {
  //   backgroundColor: 'yellow',
  //   marginBottom: 10,
  // },
  mainText: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 10,
    margin: 20,
    backgroundColor: 'pink',
  },
  input: {
    backgroundColor: '#cecece',
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default App;
