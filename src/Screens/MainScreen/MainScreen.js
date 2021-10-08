import React from 'react';
import { Text, TouchableHighlight, View, Linking, Alert} from 'react-native';
import { useState, useEffect } from "react";
import Styles from './Styles'
import { openDatabase } from "react-native-sqlite-storage";
import Geolocation from'@react-native-community/geolocation';
const db = openDatabase({
  name: "base_de_datos_correo",
});


const MainScreen = ({navigation}) =>{
  
  //Funcion toma todos los correos de la base de datos y los guarda en un arreglo
  const getCorreos = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM listaCorreos ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length; //len guarda la cantidad de elementos de la tabla
          if (len > 0) {
            let listEmails = [];
            for (let i = 0; i < len; i++) {
              listEmails.push(res.rows.item(i).name);//listEmails guarda solo los correos sin el id
            }
            sendEmail((listEmails));
          }
        },
        error => {
          console.log("error al tomar correos " + error.message);
        },
      );
    });
  }; 


  var resultado = [];
  const componentDidMount =()=> {
    Geolocation.getCurrentPosition(
      (position) => {
        resultado.push("\nFecha y Hora\n",new Date,"\nPosicion:\n",JSON.stringify(position),"\n");
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  Geolocation.getCurrentPosition(info =>(console.log(info.coords.latitude)))

  useEffect(async () => {
    await componentDidMount();
  }, []);

  //Funcion que envia el email a la lista de correos 
  const sendEmail = (to) =>{
    componentDidMount();
    const a = new Date()
   // Linking.openURL(`mailto:${to}?subject=AYUDA&body=Necesito ayuda, por favor, hora y fecha ${a}estoy en ${resultado}`)
    Linking.openURL(
      `mailto:${to}
      ?subject=APPPANIC(alerta de ayuda)
      &body=Se a recibido una señal de alerta:\ninformacion:\n${resultado}\n`)
  };

  


  return (
    //botones de la interfaz
    <View style={Styles.container}>
        <View style={Styles.barraDeBotones}>  
          <View style={Styles.perfilPicture}></View>
        </View>        
        <TouchableHighlight style={Styles.vinculateButton} onPress={() => navigation.navigate('Vincular')}>
            <Text style={Styles.vinculateTextButton}>VINCULAR</Text>  
        </TouchableHighlight>
        <TouchableHighlight style={Styles.desvinculateButton} onPress={() => navigation.navigate('Desvincular')}>
            <Text style={Styles.desvinculateTextButton}>DESVINCULAR</Text>  
        </TouchableHighlight>
        <TouchableHighlight style={Styles.panicButton} onPress={getCorreos}>
            <Text style={Styles.textPanicButton}>PANIC</Text>  
        </TouchableHighlight>
        <TouchableHighlight style={Styles.calmButton} onPress={() => navigation.navigate('Vincular')}>
            <Text style={Styles.textCalmButton}>CALM</Text>  
        </TouchableHighlight>
    </View>

  );
}

export default MainScreen;