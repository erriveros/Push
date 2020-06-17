import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Button, TextComponent} from 'react-native';
import SignUp from './SignUp';
import { AppStyles } from '../AppStyles'



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          email: "",
          password: ""
        };
      }

    onPressLogin(){
        this.props.navigation.replace('Home');
    }

    onPressSignUp(){
        this.props.navigation.push('SignUp');
    }
    onPressFacebook(){
        this.props.navigation.replace('Home');
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.title, styles.leftTitle]}>Sign In</Text>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        placeholder="E-mail or phone number"
                        onChangeText={text => this.setState({ email: text })}
                        value={this.state.email}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.InputContainer}>
                    <TextInput
                        style={styles.body}
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
                        placeholderTextColor={AppStyles.color.grey}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <TouchableOpacity
                    containerStyle={styles.loginContainer}
                    style={styles.loginText}
                    onPress={() => this.onPressLogin()}
                    >
                        <Text>Log in</Text>
                    
                </TouchableOpacity>
                <Text style={styles.or}>OR</Text>
                <TouchableOpacity
                containerStyle={styles.facebookContainer}
                style={styles.facebookText}
                onPress={() => this.onPressFacebook()}
                >
                    <Text>Login with Facebook</Text>
                
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center"
    },
    or: {
      //fontFamily: AppStyles.fontName.main,
      color: "black",
      marginTop: 40,
      marginBottom: 10
    },
    title: {
      fontSize: AppStyles.fontSize.title,
      fontWeight: "bold",
      color: AppStyles.color.tint,
      marginTop: 20,
      marginBottom: 20
    },
    leftTitle: {
      alignSelf: "stretch",
      textAlign: "left",
      marginLeft: 20
    },
    content: {
      paddingLeft: 50,
      paddingRight: 50,
      textAlign: "center",
      fontSize: AppStyles.fontSize.content,
      color: AppStyles.color.text
    },
    loginContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.tint,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30
    },
    loginText: {
      color: AppStyles.color.white
    },
    placeholder: {
      //fontFamily: AppStyles.fontName.text,
      color: "red"
    },
    InputContainer: {
      width: AppStyles.textInputWidth.main,
      marginTop: 30,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: AppStyles.color.grey,
      borderRadius: AppStyles.borderRadius.main
    },
    body: {
      height: 42,
      paddingLeft: 20,
      paddingRight: 20,
      color: AppStyles.color.text
    },
    facebookContainer: {
      width: AppStyles.buttonWidth.main,
      backgroundColor: AppStyles.color.facebook,
      borderRadius: AppStyles.borderRadius.main,
      padding: 10,
      marginTop: 30
    },
    facebookText: {
      color: AppStyles.color.white
    }
  });

export default Login
