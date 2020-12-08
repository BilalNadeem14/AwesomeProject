




import React from 'react';
import { Text, StyleSheet, View } from 'react-native'; 



const ComponentsScreen = () => {
    const name = 'Bilal'
    const print = <Text style={styles.printStyle}>printng name: {name}</Text>

    return (
    <View>
        <Text style={styles.textStyle}>Welcome to React native</Text>
        {print}
    </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    printStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;