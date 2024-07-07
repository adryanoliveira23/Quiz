import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import QuestaoUm from '../QuestaoUm';

  export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.background}>
        <View style={styles.innerContainer}>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('QuestaoUm')}}>
            <Text style={styles.buttonText}>INICIAR</Text>
          </TouchableOpacity>
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
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#E040FB',
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 90,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});