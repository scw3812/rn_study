import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  // DrawerContentScrollView,
  // DrawerItem,
  // DrawerItemList,
} from '@react-navigation/drawer';
import HomeScreen from './src/home';
// import UserScreen from './src/user';
// import Logo from './src/logo';
// import HomeDrawer from './src/home_drawer';
// import UserDrawer from './src/user_drawer';
import MyDrawer from './src/my_drawer';
import TabHomeScreen from './src/home_tab';
import TabUserScreen from './src/user_tab';
import TabMessageScreen from './src/message_tab';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabComponent = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: 'skyblue',
        activeTintColor: 'blue',
        inactiveTintColor: 'white',
        style: {
          backgroundColor: '#c6cbef',
        },
        labelPosition: 'below-icon',
      }}
      screenOptions={({route}) => ({
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
      })}>
      <Tab.Screen name="Home" component={TabHomeScreen} />
      <Tab.Screen name="User" component={TabUserScreen} />
      <Tab.Screen name="Message" component={TabMessageScreen} />
    </Tab.Navigator>
  );
};

const TabBarIcon = (focused, name) => {
  // let iconImagePath;
  let iconName, iconSize, iconColor;

  if (name === 'Home') {
    iconName = 'home-outline';
    // iconImagePath = require('./src/assets/pics/home_icon.png');
  } else if (name === 'User') {
    iconName = 'people-outline';
    // iconImagePath = require('./src/assets/pics/home_icon.png');
  } else if (name === 'Message') {
    iconName = 'mail-outline';
    // iconImagePath = require('./src/assets/pics/home_icon.png');
  }

  iconSize = focused ? 30 : 20;
  iconColor = focused ? 'blue' : 'white';

  return (
    // <Image
    //   // eslint-disable-next-line react-native/no-inline-styles
    //   style={{width: focused ? 24 : 20, height: focused ? 24 : 20}}
    //   source={iconImagePath}
    // />
    <Ionicons name={iconName} size={iconSize} color={iconColor} />
  );
};

const DrawerComponent = () => {
  return (
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
      <Drawer.Screen name="Route" component={TabComponent} />
    </Drawer.Navigator>
  );
};

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flexDirection: 'row', paddingRight: 15}}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text>Open</Text>
      </TouchableOpacity>
    </View>
  );
};

class App extends Component {
  // CustomDrawerContent = props => {
  //   return (
  //     <DrawerContentScrollView {...props}>
  //       <DrawerItemList {...props} />
  //       <DrawerItem
  //         label="Help"
  //         onPress={() => Linking.openURL('http://www.google.com')}
  //         icon={() => <Logo />}
  //       />
  //       <DrawerItem label="Info" onPress={() => alert('Info window')} />
  //     </DrawerContentScrollView>
  //   );
  // };
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={DrawerComponent}
            options={{headerRight: ({}) => <HeaderRight />}}
          />
          <Stack.Screen name="Home_Stack" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      // <NavigationContainer>
      //   <Tab.Navigator
      //     initialRouteName="Home"
      //     tabBarOptions={{
      //       activeBackgroundColor: 'skyblue',
      //       activeTintColor: 'blue',
      //       inactiveTintColor: 'white',
      //       style: {
      //         backgroundColor: '#c6cbef',
      //       },
      //       labelPosition: 'below-icon',
      //     }}
      //     screenOptions={({route}) => ({
      //       tabBarLabel: route.name,
      //       tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
      //     })}>
      //     <Tab.Screen name="Home" component={TabHomeScreen} />
      //     <Tab.Screen name="User" component={TabUserScreen} />
      //     <Tab.Screen name="Message" component={TabMessageScreen} />
      //   </Tab.Navigator>
      // </NavigationContainer>
      // <NavigationContainer>
      //   <Drawer.Navigator
      //     initialRouteName="Home"
      //     drawerType="slide"
      //     drawerPosition="right"
      //     // eslint-disable-next-line react-native/no-inline-styles
      //     drawerStyle={{
      //       backgroundColor: '#c6cbef',
      //       width: 200,
      //     }}
      //     drawerContentOptions={{
      //       activeTintColor: 'red',
      //       activeBackgroundColor: 'skyblue',
      //     }}
      //     drawerContent={props => <MyDrawer {...props} />}>
      //     <Drawer.Screen
      //       name="Home"
      //       component={HomeDrawer}
      //       options={{
      //         drawerIcon: () => (
      //           <Image
      //             // eslint-disable-next-line react-native/no-inline-styles
      //             style={{width: 15, height: 15}}
      //             source={require('./src/assets/pics/home_icon.png')}
      //           />
      //         ),
      //       }}
      //     />
      //     <Drawer.Screen name="User" component={UserDrawer} />
      //   </Drawer.Navigator>
      // </NavigationContainer>
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
