import React from 'react';
import { Text, TouchableHighlight, View, Linking,useState} from 'react-native';
import Styles from './Styles'
import { openDatabase } from "react-native-sqlite-storage";


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

  const getUbicacion =() =>{
    
  }

  //Funcion que envia el email a la lista de correos 
  const sendEmail = (to) =>{
    Linking.openURL(`mailto:${to}?subject=AYUDA&body=Necesito ayuda, por favor, estoy en {encontrarCoordenadas}`)
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