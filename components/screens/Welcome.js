import React from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { AppStyles } from "../AppStyles";
// import { AsyncStorage, ActivityIndicator } from "react-native";
// import firebase from "react-native-firebase";

class Welcome extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    // this.state = {
    //   isLoading: true
    // };
  }

  render() {
    // if (this.state.isLoading == true) {
    //   return (
    //     <ActivityIndicator
    //       style={styles.spinner}
    //       size="large"
    //       color={AppStyles.color.tint}
    //     />
    //   );
    // }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Say hello to your new app</Text>
        <TouchableOpacity
          style={styles.loginContainer}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupContainer}
          onPress={() => this.props.navigation.navigate("SignUp")}   
        >
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 150
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: "bold",
    color: AppStyles.color.tint,
    marginTop: 20,
    textAlign: "center",
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
  },

  loginText: {
    color: AppStyles.color.white
  },

  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.tint,
    marginTop: 15,
    alignItems: 'center',
  },
  signupText: {
    color: AppStyles.color.tint
  },
  
  spinner: {
    marginTop: 200
  }
});

export default Welcome;