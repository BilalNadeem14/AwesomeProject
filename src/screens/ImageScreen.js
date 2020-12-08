import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageDetails from '../components/ImageDetails'

export default () => {
    return (
        <View>
            <ImageDetails 
              imageName="Forest" 
              imageSource={require('../../assets/forest.jpg')}
              imageScore={5}
              />
            <ImageDetails 
              imageName="Beach" 
              imageSource={require('../../assets/beach.jpg')}
              imageScore={-7}
              />
            <ImageDetails 
              imageName="mountain" 
              imageSource={require('../../assets/mountain.jpg')}
              imageScore={-10}
              />
        </View>
    )
}  

const styles= StyleSheet.create({});
