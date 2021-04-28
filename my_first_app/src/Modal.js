/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, Button, Modal} from 'react-native';

class ModalComponent extends Component {
  state = {
    modal: false,
  };

  handleModal = () => {
    this.setState({
      modal: this.state.modal ? false : true,
    });
  };

  render() {
    return (
      <View style={{width: '100%'}}>
        <Button title="open modal" onPress={this.handleModal} />
        <Modal visible={this.state.modal} animationType="slide">
          <View style={{marginTop: 60, backgroundColor: 'red'}}>
            <Text>this is modal</Text>
          </View>
          <Button title="close modal" onPress={this.handleModal} />
        </Modal>
      </View>
    );
  }
}

export default ModalComponent;
