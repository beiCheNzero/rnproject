import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/home'
import EditScreen from './src/edit'
import MineScreen from './src/mine'

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <View style={[styles.container]}>
        <Text style={[styles.text]}>Home Screen</Text>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
      {/* <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={EditScreen} />
        <Tab.Screen name="Mine" component={MineScreen} />
      </Tab.Navigator> */}
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
