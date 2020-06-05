import React, {useState, useRef, Component} from 'react';
import {View, TextInput, Button, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import config from '../../config';

class Camera extends Component  {
    constructor(){
        super();
    }
    
    
    render(){
    return(
        <View style={{flex:1, width:'100%', height:'100%'}}>
            <Text>Camera</Text>
        </View>
    );

};
}

export default Camera;