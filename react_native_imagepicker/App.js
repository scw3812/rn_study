/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Platform,
  PermissionsAndroid,
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Contacts from 'react-native-contacts';

class App extends Component {
  // state = {
  //   avatar: '',
  // };

  // addImage = () => {
  //   launchCamera({}, response => {
  //     this.setState({avatar: response.uri});
  //   });
  // };

  state = {
    myContacts: [],
  };

  async requestContactPermission() {
    if (Platform.OS === 'ios') {
      console.warn('iOS');
      return true;
    } else {
      console.warn('Android');

      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      ]);
      if (
        granted['android.permission.READ_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.WRITE_CONTACTS'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  getContacts = () => {
    this.requestContactPermission().then(didGetPermission => {
      if (didGetPermission) {
        Contacts.getAll()
          .then(contacts => {
            this.setState({
              myContacts: contacts,
            });
          })
          .catch(err => {
            console.error(err);
            throw err;
          });
      } else {
        // eslint-disable-next-line no-alert
        alert('no permission');
      }
    });
  };

  addContacts = () => {
    this.requestContactPermission().then(didGetPermission => {
      if (didGetPermission) {
        const newContact = {
          emailAddress: [
            {
              label: 'work',
              email: 'wefsadf@naver.com',
            },
          ],
          familyName: 'Go',
          givenName: 'Gildong',
          phoneNumber: [
            {
              label: 'mobile',
              number: '(010) 1111-1111',
            },
          ],
        };
        Contacts.addContact(newContact)
          .then(() => {
            this.getContacts();
          })
          .catch(err => {
            console.error(err);
            throw err;
          });
      } else {
        // eslint-disable-next-line no-alert
        alert('no permission');
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Image source={{uri: this.state.avatar}} style={styles.avatar} />
        <Button title="Add on Image" onPress={() => this.addImage()} /> */}
        {this.state.myContacts.map((item, index) => (
          <Text key={index}>
            {item.givenName} {item.familyName}
          </Text>
        ))}
        <Button title="Load Contacts" onPress={() => this.getContacts()} />
        <Button title="Add Contacts" onPress={() => this.addContacts()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c4ab26',
  },
  avatar: {
    width: '100%',
    height: 400,
  },
});

export default App;
