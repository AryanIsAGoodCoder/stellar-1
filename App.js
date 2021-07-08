import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StarMap from './screens/StarMap';
import DailyPic from './screens/DailyPic';
import SpaceCrafts from './screens/SpaceCrafts'

export default function App() {
  return (
    <NavigationContainer>
      <StackView.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}> 
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="SpaceCrafts" component={SpaceCrafts}/>
        <Stack.Screen name="DailyPic" component={DailyPic}/>
        <Stack.Screen name="StarMap" component={StarMap}/>
      </StackView.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
