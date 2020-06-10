import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Button} from 'react-native';

class Login extends Component {


    login(){
        this.props.navigation.navigate('Home');
    }
    render() {
        return (
            <TouchableOpacity 
            style= {styles.loginButton}
            onPress={() => this.login()}>
                <View>
                     <Text>Login</Text>
                </View>
            </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
     loginButton: {
        height: '100%',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
        
     }

}) 
export default Login