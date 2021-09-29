import React  from "react";
import { Button, StyleSheet } from "react-native";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
        alignItems:'center',
        
    },   
    perfilPicture:{
        backgroundColor:'white',
        width:90,
        height:90,
        marginTop:2,
        left:'74%',  
    },
    
    //Barra donde se encuentra los botones vincular y desvincular
    barraDeBotones:{
        backgroundColor:'#75c7ff',
        width:360,
        height:95,
        marginTop:2,
        
    },


    //Estilo del boton vincular
    vinculateButton:{
        position: 'absolute',
        left: '0%',
        borderWidth:1,
        borderColor:'white',
        marginTop:6,
        marginLeft:3,
        backgroundColor:'#75c7ff',
        paddingVertical:10,
        paddingHorizontal:64,
    },
    vinculateTextButton:{
        color:'white',
        fontSize:15,
        textAlign:'center',   
        fontWeight:'bold',   
    },
    //Estilo del boton desvincular
    desvinculateButton:{
        position: 'absolute',
        left: '0%',
        borderWidth:1,
        borderColor:'white',
        marginTop:50,
        marginLeft:3,
        backgroundColor:'#75c7ff',
        paddingVertical:10,
        paddingHorizontal:50,
    },
    desvinculateTextButton:{
        color:'white',
        fontSize:15,
        textAlign:'center',   
        fontWeight:'bold',   
    },
    //Estilo del boton panico
    panicButton:{
        position:'absolute',
        bottom:'25%',
        backgroundColor:'red',
        width:250,
        height: 250,
        borderRadius: 300,
        justifyContent:'center'
 
    },
    textPanicButton:{
        color:'white',
        fontSize:40,
        fontWeight:'bold',
        textAlign: 'center',
    },
    //Estilo del boton Calm
    calmButton:{
        position:'absolute',
        bottom:'1%',
        backgroundColor:'#75c7ff',
        width:350,
        height: 100,
        justifyContent:'center'
    },
    textCalmButton:{
        color:'white',
        fontSize:40,
        textAlign:'center',   
        fontWeight:'bold',   
    },



})
export default styles;