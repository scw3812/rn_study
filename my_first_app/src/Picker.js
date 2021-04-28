/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class PickerComponent extends Component {
  state = {
    country: 'korea',
    value: 50,
  };

  onChangeInput = (event) => {
    this.setState({
      myTextInput: event,
    });
  };

  sliderValueChange = (value) => {
    this.setState({
      value,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Slider
          style={{height: 40, width: 300}}
          value={this.state.value}
          minimumValue={0}
          maximumValue={100}
          onValueChange={this.sliderValueChange}
          maximumTrackTintColor="red"
          minimumTrackTintColor="blue"
          step={1}
        />
        <Text style={styles.input}>{this.state.value}</Text>
        <Picker
          style={{height: 50, width: 250}}
          selectedValue={this.state.country}
          onValueChange={(val, idx) => {
            this.setState({country: val});
            console.log(val);
          }}>
          <Picker.Item label="korea" value="korea" />
          <Picker.Item label="canada" value="canada" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
  },
});

export default PickerComponent;
