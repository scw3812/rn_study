import React, {Component} from 'react';
import {Image} from 'react-native';
import HomeIcon from './assets/pics/home_icon.png';

export default class Logo extends Component {
  render() {
    // eslint-disable-next-line react-native/no-inline-styles
    return <Image style={{width: 25, height: 25}} source={HomeIcon} />;
  }
}
