import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Routes from '../Routes';

export default function QuestaoCinco() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
        <ImageBackground
            source={require('../../assets/background.jpg')}
            style={styles.background}
        >
  
        <View style={styles.overlay}> 
  
        
            <Text style={styles.text}>Qual é a relação entre a entropia e os processos biológicos?</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('GameOver')}}>
              <Text style={styles.buttonText}>A entropia em processos biológicos é sempre constante, independentemente de qualquer transformação ou reação que ocorra no organismo</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('GameOver')}}>
              <Text style={styles.buttonText}>A entropia nos processos biológicos sempre diminui com o tempo, levando a um aumento contínuo na ordem e na organização dos sistemas vivos</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Congratulations')}}>
              <Text style={styles.buttonText}>A entropia é uma medida da desordem em um sistema. Nos processos biológicos, a entropia tende a aumentar, mas os organismos vivos mantêm a ordem interna através do consumo de energia</Text>
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
