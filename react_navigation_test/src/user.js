/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class UserScreen extends Component {
  headerStyle = () => {
    this.props.navigation.setOptions({
      title: 'Customizing',
      headerStyle: {backgroundColor: 'blue'},
      headerTintColor: 'yellow',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: 'green',
      },
      headerBackTitle: 'BACK',
      headerRight: () => (
        <Button
          title="Go Back"
          onPress={() => this.props.navigation.navigate('Home')}
          color="orange"
        />
      ),
    });
  };

  render() {
    this.headerStyle();
    const {params} = this.props.route;
    const {userIdx, userName, userLastName} = params ? params : {};

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>User Screen</Text>
        <Button
          title="To Home Screen"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
        <Text>User Idx: {JSON.stringify(userIdx)}</Text>
        <Text>User Idx: {JSON.stringify(userName)}</Text>
        <Text>User Idx: {JSON.stringify(userLastName)}</Text>
      </View>
    );
  }
}

export default UserScreen;
