import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MainFeed, Login, Camera, Challenges, Market, SignUp, Loading, Welcome} from "./components/screens";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig'


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading:false,
      isAuthenticationReady: false,
      isAutheticated: false,
      user: false

    }
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    Tab = createBottomTabNavigator();
    Stack = createStackNavigator();
    AuthStack = createStackNavigator();


  };

AuthStackScreen() {
  return(
  <AuthStack.Navigator>
    <AuthStack.Screen name="Welcome" component={Welcome}/>
    <AuthStack.Screen name="Login" component={Login}/>
    <AuthStack.Screen name="SignUp" component={SignUp}/>
  </AuthStack.Navigator>
  )
}


Home() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Market') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Challenges') {
              iconName = focused ? 'ios-square' : 'ios-square';
            } else if (route.name === 'Ranking') {
              iconName = focused ? 'ios-square' : 'ios-square';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Main" component={MainFeed} />
        <Tab.Screen name="Market" component={Market} />
        <Tab.Screen name="Challenges" component={Challenges} />
        <Tab.Screen name="Ranking" component={Challenges} />



      </Tab.Navigator>
    </NavigationContainer>
  );
}


  

  
  render (){
    return(
      <NavigationContainer>
        <Stack.Navigator>
  
          {this.state.isLoading ? (
            <Stack.Screen name="Loading" component={Loading} />
          ) : this.state.isAutheticated ? (
            <Stack.Screen name="Home" component={Home} options={{title: 'Push'}}/>
          ) : (
            <>
              <Stack.Screen name="AuthStackScreen" component={this.AuthStackScreen} options={{headerShown: false}}/>
              <Stack.Screen name="Home" component={this.Home} options={{title: 'Push'}}/>
            </>
          )}
  
        </Stack.Navigator>
    </NavigationContainer>
  
    );


  }
    
}

const styles = StyleSheet.create({
  
});
