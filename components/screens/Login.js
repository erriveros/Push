import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Button} from 'react-native';
import SignUp from './SignUp';


class Login extends Component {

    login(){
        this.props.navigation.navigate('Home');
    }

    signUp(){
        ;
    }
    render() {
        return (
            <View>
                <Button title="Sign In" onPress={() => this.props.navigation.replace('Home')}/>
                <Button title="Sign Up" onPress={() => this.props.navigation.push('SignUp')}/>
            </View>
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
