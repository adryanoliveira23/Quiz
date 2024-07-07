import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

export default function QuestaoDois() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
        <ImageBackground
            source={require('../../assets/background.jpg')}
            style={styles.background}
        >
  
        <View style={styles.overlay}> 
  
        
            <Text style={styles.text}>O que são proteínas e qual a sua importância no corpo humano?</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('GameOver')}}>
              <Text style={styles.buttonText}>Proteínas são hormônios responsáveis por todas as funções cerebrais, e não têm relação com músculos ou enzimas</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('GameOver')}}>
              <Text style={styles.buttonText}>Proteínas são pequenos fragmentos de DNA que só servem para armazenar energia no corpo</Text>
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('QuestaoTres')}}>
              <Text style={styles.buttonText}>Proteínas são moléculas grandes e complexas que desempenham muitas funções críticas no corpo. Elas são essenciais para a estrutura, função e regulação dos tecidos e órgãos do corpo</Text>
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
      marginTop: -34,
    },
  });
