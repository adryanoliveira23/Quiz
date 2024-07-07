import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/pages/Routes';

export default function App() {
    const stackNavigation = createNativeStackNavigator();
    return (
      
      <Routes />
    
  );
}