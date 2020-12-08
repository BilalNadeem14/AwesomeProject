/*
import React from "react";
import {NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import ComponentsScreen from './src/screens/ComponentsScreen';

//import { ComponentsScreen } from './src/screens';
//import { SignIn, CreateAccount } from './src/screens'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={ComponentsScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  )
}

export default App;
*/

//import {} from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, NavigationNativeContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const Stack = createStackNavigator();

const Tabs = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const ListStack = createStackNavigator();
const ComponentsStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Components" component={ComponentsScreen} />
      <HomeStack.Screen name="Image" component={ImageScreen} />
      <HomeStack.Screen name="Counter" component={CounterScreen} />
      {/* <HomeStack.Screen name="List" component={ListScreen} /> */}
      <HomeStack.Screen name="Color Screen" component={ColorScreen} />
      <HomeStack.Screen name="Square Screen" component={SquareScreen} />
      <HomeStack.Screen name="Text" component={TextScreen} />
      {/* <HomeStack.Screen name="Text" component={TextScreen} /> */}
      <HomeStack.Screen name="Box Screen" component={BoxScreen} />
    </HomeStack.Navigator>
)
const ListStackScreen = () => (
  //return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={ListScreen} />
      <ListStack.Screen name="Components" component={ComponentsScreen} />
    </ListStack.Navigator>
 // )
)

const ComponentsStackScreen = () => (
  <ComponentsStack.Navigator>
    <ComponentsStack.Screen name="Components2" component={ComponentsScreen}/>
  </ComponentsStack.Navigator>
)

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="List" component={ListStackScreen} />
  </Tabs.Navigator>
)

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabsScreen} />
        <Drawer.Screen name="Components2" component={ComponentsStackScreen} />
      </Drawer.Navigator>
      {/*<Stack.Navigator initialRouteName="Home" screenOptions={{ title: 'same for everyone'}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'title is Home'}}/>
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>*/}
    </NavigationContainer>
  );
};

//export default App;
