




import React from 'react';
import { Text, StyleSheet, View, Button} from 'react-native'; 



const ComponentsScreen = ({ route, navigation }) => {
    const name = 'Bilal'
    const print = <Text style={styles.printStyle}>printing name: {name}</Text>

    return (
    <View>
        <Text style={styles.textStyle}>Welcome to React native</Text>
        {print}
        {route.params?.names && <Text>{route.params.names}</Text>}
        <Button title="Go to List" onPress={() =>{
            //Navigation.navigate('Home', {
            //screen: 'Components',  
            //})
            navigation.navigate('List')
        }}  />
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