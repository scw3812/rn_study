import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.screenStryle}>
        <Text>Home Screen</Text>
        <Button
          title="To User Screen"
          onPress={() => {
            this.props.navigation.navigate('User', {
              userIdx: 100,
              userName: 'cw',
              userLastName: 's',
            });
          }}
        />
        <Button
          title="Change the title"
          onPress={() =>
            this.props.navigation.setOptions({
              title: 'Changed!!',
              headerStyle: {backgroundColor: 'pink'},
              headerTintColor: 'red',
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenStryle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
