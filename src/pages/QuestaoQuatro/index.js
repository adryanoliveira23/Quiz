import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Routes from '../Routes';

export default function QuestaoQuatro() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
        <ImageBackground
            source={require('../../assets/background.jpg')}
            style={styles.background}
        >
  
        <View style={styles.overlay}> 
  
        
            <Text style={styles.text}>O que é potencial de ação e qual é o seu papel nos neurônios?</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('QuestaoCinco')}}>
              <Text style={styles.buttonText}>O potencial de ação é uma mudança rápida no potencial elétrico da membrana de um neurônio que permite a transmissão de sinais ao longo das células nervosas</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('GameOver')}}>
              <Text style={styles.buttonText}>O potencial de ação é uma quantidade de energia potencial armazenada no núcleo do neurônio, usada apenas durante o sono</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('GameOver')}}>
              <Text style={styles.buttonText}>O potencial de ação é um tipo de corrente elétrica que se forma apenas nas plantas, ajudando na fotossíntese</Text>
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
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20, // Espaço entre o texto e os botões
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    button: {
      marginTop: '4%',
      backgroundColor: '#E040FB',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 7,
      marginVertical: 10, // Espaçamento entre os botões
      alignItems: 'center',
      width: '80%', // Ajuste para responsividade
    },
    buttonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    eremdasgImage: {
      width: 200,
      height: 200,
      marginTop: -37,
    },
  });
