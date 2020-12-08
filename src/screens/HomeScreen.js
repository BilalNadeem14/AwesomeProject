import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
//console.log('Button pressed')


const HomeScreen = (props) => {   //intead of props we can also write {navigation}    as navigation is an object of props
  //console.log(props)
  
  return (
    <View>
      <Text style={styles.text}>HomeScreen...</Text>
      <Button 
        title="Go  to Components Demo"
        onPress={() => props.navigation.push('Components', { names: 'Bilal Nadeem' })}
      />
      <TouchableOpacity onPress={() => props.navigation.push('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <Button
        title="Drawer"
        onPress={() => props.navigation.toggleDrawer()}
        />
        <Button
          title="Image Screen"
          onPress={() =>props.navigation.navigate('Image') }
        />
        <Button
          title="Counter Screen"
          onPress={() => props.navigation.navigate('Counter')}
        />
        <Button
          title="Color Screen"
          onPress={() => props.navigation.navigate('Color Screen')}
        />
        <Button
          title="Go to Square Screen"
          onPress={() => props.navigation.navigate('Square Screen')}
        />
        <Button
          title="Go to Text Screen"
          onPress={() => props.navigation.navigate('Text')}
        />
        <Button
          title="Go to box Screen"
          onPress={() => props.navigation.navigate('Box Screen')}
        />
    </View>
  )
};
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    flex: 1,
  }
});

export default HomeScreen;
