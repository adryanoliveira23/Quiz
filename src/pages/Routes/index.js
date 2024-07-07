import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import QuestaoUm from '../QuestaoUm';
import QuestaoDois from '../QuestaoDois';
import QuestaoTres from '../QuestaoTres';
import GameOver from '../GameOver';
import QuestaoQuatro from '../QuestaoQuatro';
import QuestaoCinco from '../QuestaoCinco';
import Congratulations from '../Congratulation';

export default function Routes() {
    const stackNavigation = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <stackNavigation.Navigator>
          <stackNavigation.Screen name="Home" component={Home} options={{ headerShown: false }} initialRouteName="Home" />
          <stackNavigation.Screen name="QuestaoUm" component={QuestaoUm} options={{ headerShown: false }}  />  
          <stackNavigation.Screen name="QuestaoDois" component={QuestaoDois} options={{ headerShown: false }}  />  
          <stackNavigation.Screen name="QuestaoTres" component={QuestaoTres} options={{ headerShown: false }}  /> 
          <stackNavigation.Screen name="GameOver" component={GameOver} options={{ headerShown: false }}  />
          <stackNavigation.Screen name="QuestaoQuatro" component={QuestaoQuatro} options={{ headerShown: false }}  />
          <stackNavigation.Screen name="QuestaoCinco" component={QuestaoCinco} options={{ headerShown: false }}  />
          <stackNavigation.Screen name="Congratulations" component={Congratulations} options={{ headerShown: false }}  />
        </stackNavigation.Navigator>
      </NavigationContainer>
  );
}