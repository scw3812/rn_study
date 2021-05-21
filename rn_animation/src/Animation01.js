/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Animated, Easing, Button, Text} from 'react-native';

class Anim01 extends Component {
  constructor() {
    super();
    this.state = {
      mySquare: new Animated.Value(0),
    };
  }

  runAnim = () => {
    Animated.timing(this.state.mySquare, {
      toValue: 1,
      duration: 2000,
      delay: 1500,
    }).start();
  };

  render() {
    return (
      <View>
        <Animated.View
          style={{
            opacity: this.state.mySquare,
            transform: [
              {
                rotateX: this.state.mySquare.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '180deg', '360deg'],
                }),
              },
              {
                translateX: this.state.mySquare.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [305, 150, 0],
                }),
              },
            ],
          }}>
          <View style={styles.square} />
        </Animated.View>

        <Animated.Text
          style={{
            fontSize: this.state.mySquare.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [40, 30, 20],
            }),
            color: this.state.mySquare.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: ['blue', 'green', 'red'],
            }),
          }}>
          <Text>Anim text</Text>
        </Animated.Text>

        <Button title="Anim Start" onPress={this.runAnim} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'skyblue',
  },
});

export default Anim01;
