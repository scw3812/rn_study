import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

class Input extends Component {
  state = {
    myTextInput: '',
  };

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
          maxLength={10}
          autoCapitalize="sentences"
          editable={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    backgroundColor: '#cecece',
    width: '100%',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default Input;
