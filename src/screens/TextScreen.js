import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

const[name,setValue] = useState('');

    return <View>
        <Text>
            Text Screen
        </Text>
        
        <TextInput 
          style={styles.input}
           onChangeText={(newValue)=>setValue(newValue)}  //its a callBack function
           value={name}
           //value="hioi"
           autoCapitalize="characters"
           autoCorrect={false}
        />
        <Text>text is: {name}</Text>
        { (name.length >= 5) ? <Text>password is okay</Text> : <Text>Password is smaller than 5 letters</Text>}
    </View>

}


const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
});

export default TextScreen ;