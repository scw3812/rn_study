/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import HomeLogo from './assets/pics/home_icon.png';
import {CommonActions} from '@react-navigation/native';

class MyDrawer extends Component {
  navigateToScreen = route => () => {
    this.props.navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      }),
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              <Image style={{width: 40, height: 40}} source={HomeLogo} />
            </View>
            <Text style={styles.sectionHeaderStyle}>Section 1</Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={() => this.props.navigation.navigate('Home')}>
                Home
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('User')}>
                User
              </Text>
              <Text style={styles.navItemStyle}>Help</Text>
              <Text style={styles.navItemStyle}>Info</Text>
            </View>
          </View>
        </ScrollView>
        <View style={{paddingLeft: 10, paddingBottom: 30}}>
          <Text>Copyright @ scw, 2021</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50,
  },
  sectionHeaderStyle: {
    color: '#fff',
    backgroundColor: '#ef9de4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  navSectionStyle: {
    backgroundColor: '#04b6ff',
  },
  navItemStyle: {
    padding: 10,
    color: '#fff',
  },
});

export default MyDrawer;
