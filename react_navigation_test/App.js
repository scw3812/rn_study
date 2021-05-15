/* eslint-disable no-alert */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Linking, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
// import HomeScreen from './src/home';
// import UserScreen from './src/user';
import Logo from './src/logo';
import HomeDrawer from './src/home_drawer';
import UserDrawer from './src/user_drawer';
import MyDrawer from './src/my_drawer';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

class App extends Component {
  CustomDrawerContent = props => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => Linking.openURL('http://www.google.com')}
          icon={() => <Logo />}
        />
        <DrawerItem label="Info" onPress={() => alert('Info window')} />
      </DrawerContentScrollView>
    );
  };
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerType="slide"
          drawerPosition="right"
          // eslint-disable-next-line react-native/no-inline-styles
          drawerStyle={{
            backgroundColor: '#c6cbef',
            width: 200,
          }}
          drawerContentOptions={{
            activeTintColor: 'red',
            activeBackgroundColor: 'skyblue',
          }}
          drawerContent={props => <MyDrawer {...props} />}>
          <Drawer.Screen
            name="Home"
            component={HomeDrawer}
            options={{
              drawerIcon: () => (
                <Image
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{width: 15, height: 15}}
                  source={require('./src/assets/pics/home_icon.png')}
                />
              ),
            }}
          />
          <Drawer.Screen name="User" component={UserDrawer} />
        </Drawer.Navigator>
      </NavigationContainer>
      // <NavigationContainer>
      //   <Stack.Navigator
      //     initialRouteName="Home"
      //     screenOptions={{
      //       headerStyle: {backgroundColor: 'pink'},
      //       headerTintColor: 'red',
      //       headerTitleStyle: {
      //         fontWeight: 'bold',
      //         color: 'purple',
      //       },
      //     }}>
      //     <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //       options={{
      //         title: 'Home Screen',
      //         headerTitle: <Logo />,
      //         headerRight: () => (
      //           <Button
      //             title="Info"
      //             // eslint-disable-next-line no-alert
      //             onPress={() => alert('I am a button')}
      //             color="orange"
      //           />
      //         ),
      //       }}
      //     />
      //     <Stack.Screen
      //       name="User"
      //       component={UserScreen}
      //       initialParams={{userIdx: 30, userName: 'cw', userLastName: 's'}}
      //       // options={{
      //       //   title: 'User Screen',
      //       //   headerStyle: {backgroundColor: 'pink'},
      //       //   headerTintColor: 'red',
      //       //   headerTitleStyle: {
      //       //     fontWeight: 'bold',
      //       //     color: 'purple',
      //       //   },
      //       // }}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}

export default App;
