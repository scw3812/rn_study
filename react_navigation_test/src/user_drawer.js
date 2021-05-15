/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

class UserDrawer extends Component {
  drawerStyle = () => {
    this.props.navigation.setOptions({
      drawerIcon: () => (
        <Image
          style={{width: 15, height: 15}}
          source={require('./assets/pics/home_icon.png')}
        />
      ),
    });
  };
  render() {
    this.drawerStyle();
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>User Screen</Text>
        <Button
          title="To Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

export default UserDrawer;
