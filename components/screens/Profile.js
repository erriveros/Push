import React, {useState, useRef, Component} from 'react';
import {View, TextInput, Button, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import config from '../../config';

class Profile extends Component  {
    constructor(){
        super();
    }
    
    
    render(){
    return(
        <View style={{flex:1, width:'100%', height:'100%'}}>
            <View>
                <Image
                    style = {{width:'100%', height:200}}
                    source={{uri: 'https://i.ytimg.com/vi/GHdua0i4Ghk/maxresdefault.jpg'}}
                />
            <View>
                </View>
                    <Text>The Rock</Text>
                    <Text>#noLimits</Text>
                <View>
              <View row space="between" style={{ flexWrap: 'wrap' }} >
                {[
            'https://images.unsplash.com/photo-1508264443919-15a31e1d9c1a?fit=crop&w=240&q=80',
            'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?fit=crop&w=240&q=80',
            'https://images.unsplash.com/photo-1487376480913-24046456a727?fit=crop&w=240&q=80',
            'https://images.unsplash.com/photo-1494894194458-0174142560c0?fit=crop&w=240&q=80',
            'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?fit=crop&w=240&q=80',
            'https://images.unsplash.com/photo-1542068829-1115f7259450?fit=crop&w=240&q=80',
          ].map((img, imgIndex) => (
                  <Image
                    source={{ uri: img }}
                    key={`k-${img}`}  
                    resizeMode="cover"
                    style={{height: 200, width: 200}}
                  />
                ))}
              </View>
                <View>

                </View>
            </View>
            </View>
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

export default Profile;