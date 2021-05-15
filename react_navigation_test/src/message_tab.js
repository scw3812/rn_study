import React, {Component} from 'react';
import {View, Text} from 'react-native';

export class TabMessageScreen extends Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Message</Text>
      </View>
    );
  }
}

export default TabMessageScreen;
