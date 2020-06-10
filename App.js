import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {MainFeed, Login, Camera, Challenges, Market, SignUp, Loading} from "./components/screens";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AuthStack = createStackNavigator();


function AuthStackScreen() {
  return(
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login}/>
    <AuthStack.Screen name="SignUp" component={SignUp}/>
  </AuthStack.Navigator>
  )
}


function Home() {
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

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setUser({});
  //   }, 1000);
  // }, []);

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Home" component={Home} options={{title: 'Push'}}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>

        {isLoading ? (
          <Stack.Screen name="Loadin" component={Loading} />
        ) : user ? (
          <Stack.Screen name="Home" component={Home} options={{title: 'Push'}}/>
        ) : (
          <>
            <Stack.Screen name="AuthStackScreen" component={AuthStackScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{title: 'Push'}}/>
          </>
        )}

      </Stack.Navigator>
      



      

  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  
});
