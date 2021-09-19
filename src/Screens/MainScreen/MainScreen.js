import React from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import Styles from './Styles'

const MainScreen = ({navigation}) =>{
  return (
    
    <View style={Styles.container}>
        <View style={Styles.barraDeBotones}>  
          <View style={Styles.perfilPicture}>  
          </View>
        </View>

        <TouchableHighlight style={Styles.vinculateButton} onPress={() => navigation.navigate('Vincular')}>
            <Text style={Styles.vinculateTextButton}>VINCULAR</Text>  
        </TouchableHighlight>
        <TouchableHighlight style={Styles.desvinculateButton} onPress={() => navigation.navigate('Desvincular')}>
            <Text style={Styles.desvinculateTextButton}>DESVINCULAR</Text>  
        </TouchableHighlight>
        <TouchableHighlight style={Styles.panicButton} onPress={() => navigation.navigate('Vincular')}>
            <Text style={Styles.textPanicButton}>PANIC</Text>  
        </TouchableHighlight>
        <TouchableHighlight style={Styles.calmButton} onPress={() => navigation.navigate('Vincular')}>
            <Text style={Styles.textCalmButton}>CALM</Text>  
        </TouchableHighlight>
    </View>

  );
}

export default MainScreen;