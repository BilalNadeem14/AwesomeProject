import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'friend1', age: 20 },    //, key: '1'  key must be a string amd unique in all array objects
        { name: 'friend2', age: 20 },
        { name: 'friend3', age: 20 },
        { name: 'friend4', age: 20 },
        { name: 'friend5', age: 20 },
        { name: 'friend7', age: 20 },
        { name: 'friend8', age: 20 },
        { name: 'friend9', age: 20 },
        { name: 'friend10', age: 20 },
        { name: 'friend11', age: 20 },
        { name: 'friend12', age: 20 },
        { name: 'friend13', age: 20 },

    ]
    return (
        <FlatList 
//          horizontal
//          showsHorizontalScrollIndicator={false}
          keyExtractor={friend => friend.name}
          data={friends} 
          renderItem={({ item }) => {   //accessing item of element, which has a direct reference of each object of friends array one by one
          return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
        }}

          
        /*  renderItem={(element) => {

          }} */
          // element === { item: { name: 'Friend1'}, index: 0 } *********
        />

    )
}
// 2 props:
//1)Data prop
//2)renderItem and its a function and will be called with every element of our array
//The concept is similar to mapping


const styles = StyleSheet.create({
    textStyle: {
        marginVertical:  10
    }
});

export default ListScreen;