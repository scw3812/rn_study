/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Animated, Easing, Button, Text} from 'react-native';

class Anim02 extends Component {
  constructor() {
    super();
    this.state = {
      redSquare: new Animated.Value(0),
      greenSquare: new Animated.ValueXY(0, 0),
      blueSquare: new Animated.ValueXY(0, 0),
    };
  }

  runAnim = () => {
    Animated.sequence([
      Animated.timing(this.state.redSquare, {
        toValue: 1,
      }),
      Animated.parallel([
        Animated.spring(this.state.greenSquare, {
          toValue: {x: 200, y: 0},
        }),
        Animated.spring(this.state.blueSquare, {
          toValue: {x: 200, y: 400},
        }),
      ]),
    ]).start();
  };

  render() {
    return (
      <View>
        <Animated.View style={{opacity: this.state.redSquare}}>
          <View style={styles.redSquare} />
        </Animated.View>

        <Animated.View style={this.state.greenSquare.getLayout()}>
          <View style={styles.greenSquare} />
        </Animated.View>

        <Animated.View style={this.state.blueSquare.getLayout()}>
          <View style={styles.blueSquare} />
        </Animated.View>

        <Button title="Anim Start" onPress={this.runAnim} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  redSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
  greenSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
  },
  blueSquare: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default Anim02;
