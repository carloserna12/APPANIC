import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/Screens/MainScreen/MainScreen';
import VincularScreen from './src/Screens/VincularScreen/VincularScreen';
import DesvincularScreen from './src/Screens/DesvincularScreen/DesvincularScreen'

const Stack = createNativeStackNavigator()

export default function App(){

  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen options={{
          headerShown: false,
        }} name="MainScreen" component={MainScreen}/>
        
        <Stack.Screen name="Vincular" component={VincularScreen}/>
        <Stack.Screen name="Desvincular" component={DesvincularScreen}/>
        <Stack.Screen name="Calm" component={VincularScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
