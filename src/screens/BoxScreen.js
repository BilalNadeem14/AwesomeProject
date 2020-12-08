import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>child 1</Text>
            <Text style={styles.textTwoStyle}>child 2</Text>
            <Text style={styles.textThreeStyle}>child 3</Text>
        
        </View>
    ) 
};

const styles = StyleSheet.create({
    viewStyle : {
        borderWidth: 1,
        borderColor: 'black',
        //margin:10,
        //justifyContent: 'center', //flex-start, center, flex-end, space-between, space-around
        alignItems: 'flex-start', //flex-start, flex-end, flex-start, center, stretch
        flexDirection: 'row',   //by default => column
        height:51,
        //flex: 1,
        justifyContent: 'space-between'
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
        width: 60,
        height: 25,
        // marginVertical: 20,
        // marginHorizontal: 50,
        //margin: 30,  //applies on both horizontal and vertical
        textAlign: 'center', 
        //textAlignVertical: 'center',
        //alignItems: 'center',
        //flex: 4
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        width: 60,
        height: 25,
        //flex: 4
        //alignSelf: 'stretch', //flex-start, flex-end, center, stretch
        textAlign: 'center',
        //fontSize: 18,
        /* ...StyleSheet.absoluteFillObject // will do the same work of 5 styles defined below
        // position: 'absolute', //by default => relative 
        // top: 0,
        // right: 0,
        // bottom: 0, 
        // left: 0,
        */
       //left: 90,
       //top: 30,
       alignSelf: 'flex-end'
       //justifyContent: 'flex-end' //this will only work if i wrap this text element inside the 
                                    //view component and give this style to the parent(<View>)
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        width: 60,
        height: 25,
        textAlign: 'center',
        //flex: 2,
        //left: 210,
        //alignSelf: 'flex-end', //flex-start, flex-end, center, stretch
    },

})

export default BoxScreen;