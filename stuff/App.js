//hand written app.js
import React from 'react';
//import {} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen'

const Stack = createStackNavigator();

/*
function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
*/

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
/*
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ComponentsScreen} />
      </Stack.Navigator>

*/



export default App;
