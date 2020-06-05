import React, {useState, useRef, Component} from 'react';
import {View, TextInput, Button, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import config from '../../config';

class Market extends Component  {
    constructor(){
        super();
    }
    
    
    render(){
    return(
        <View style={{flex:1, width:'100%', height:'100%'}}>
            <Text>Market</Text>
        </View>
    );

};
}

const styles = StyleSheet.create({
    tempNav: {
        height:40, 
        width:'100%', 
        marginTop: 30,
        backgroundColor: 'rgb(250,250,250)', 
        justifyContent: 'center',
        alignItems:'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgb(233,233,233)'
    },

})

export default Market;