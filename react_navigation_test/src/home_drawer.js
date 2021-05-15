import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class HomeDrawer extends Component {
  render() {
    return (
      <View style={styles.screenStryle}>
        <Text>Home Screen</Text>
        <Button
          title="To User Screen"
          onPress={() => {
            this.props.navigation.navigate('User');
          }}
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

export default HomeDrawer;
