import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/home'
import VideoScreen from './src/edit'
import MineScreen from './src/mine'

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = ''
            if(route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            }else if(route.name === 'Video') {
              iconName = focused ? 'videocam' : 'videocam-outline'
            }else if(route.name === 'Mine') {
              iconName = focused ? 'person' : 'person-outline'
            }
            return (
              <Ionicons name={iconName} size={size} color={color}></Ionicons>
            )
          },
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Video" component={VideoScreen} />
        <Tab.Screen name="Mine" component={MineScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 40,
  }
});

export default App;
