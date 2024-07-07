import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function GameOver() {
 return (
    <View style={styles.container}>
    <StatusBar style="light" />
    <ImageBackground source={require('../../assets/gameover.jpg')} style={styles.background}>
      <View style={styles.innerContainer}>

      </View>
    </ImageBackground>
    
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});