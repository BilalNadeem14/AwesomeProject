import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function func() {
    console.log('heloo')
}

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
     return (
        <View>
            <Text>{color}</Text>
            <Button 
              onPress={() => onIncrease()} 
              title={`Increase ${color}`} />
            <Button 
              onPress={onDecrease}
              title={`Decrease ${color}`} />
        </View>    
     )
}

const styles = StyleSheet.create({})

export default ColorCounter
