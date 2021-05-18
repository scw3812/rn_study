import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export class TabHomeScreen extends Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home</Text>
        <Button
          title="Go To Home"
          onPress={() => this.props.navigation.navigate('Home_Stack')}
        />
      </View>
    );
  }
}

export default TabHomeScreen;
