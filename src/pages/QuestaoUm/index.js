import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Routes from '../Routes';

export default function QuestaoUm() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
        <ImageBackground
            source={require('../../assets/background.jpg')}
            style={styles.background}
        >
  
        <View style={styles.overlay}> 
  
        
            <Text style={styles.text}>O que é a biofísica?</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('GameOver')}}>
              <Text style={styles.buttonText}>A biofísica é a ciência que estuda a influência dos astros no comportamento dos seres vivos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('QuestaoDois')}}>
              <Text style={styles.buttonText}>A biofísica é uma ciência interdisciplinar que aplica as teorias e métodos da física para compreender como os sistemas biológicos funcionam</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('GameOver')}}>
              <Text style={styles.buttonText}>A biofísica é o estudo das estrelas e dos planetas, focando na influência dos corpos celestes na biologia terrestre</Text>
            </TouchableOpacity>
  
            <Image
          source={require('../../assets/LOGO (1).png')}  
          style={styles.eremdasgImage}
        />
  
          </View> 
  
        </ImageBackground> 
      </View> 
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      marginTop: '34%',
      width: '100%',
      height: '76%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    tela: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 29,
      fontWeight: 'bold',
      marginBottom: 20, // Espaço entre o texto e os botões
    },
    button: {
      marginTop: '4%',
      backgroundColor: '#E040FB',
      paddingStart: 5,
      paddingLeft: 5,
      paddingVertical: 10,
      paddingHorizontal: 40,
      borderRadius: 7,
      marginVertical: 10, // Espaçamento entre os botões
      alignItems: 'center',
      width: '80%', // Ajuste para responsividade
    },
    buttonText: {
      color: 'white',
      fontSize: 11,
      fontWeight: 'bold',
    },
    eremdasgImage: {
      width: 250,
      height: 250,
      marginBottom: "-29%",
    },
  });
