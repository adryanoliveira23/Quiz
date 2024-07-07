import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export default function QuestaoTres() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
        <ImageBackground
            source={require('../../assets/background.jpg')}
            style={styles.background}
        >
  
        <View style={styles.overlay}> 
  
        
            <Text style={styles.text}>Qual é a lei de Fick e como ela se aplica à difusão em sistemas biológicos?</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('GameOver')}}>
              <Text style={styles.buttonText}>A lei de Fick afirma que a difusão é mais rápida em sólidos do que em líquidos e gases, o que não é aplicável a sistemas biológicos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('QuestaoQuatro')}}>
              <Text style={styles.buttonText}>A lei de Fick descreve a difusão, afirmando que a taxa de transferência de partículas de uma área de alta concentração para uma área de baixa concentração é proporcional à diferença de concentração. Em sistemas biológicos, isso se aplica, por exemplo, à troca de gases nos pulmões</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('GameOver')}}>
              <Text style={styles.buttonText}>A lei de Fick afirma que a difusão ocorre apenas em líquidos e nunca em gases ou sólidos, não tendo relevância para sistemas biológicos</Text>
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
