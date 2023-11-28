import * as React from 'react';
import {Text, View, SafeAreaView, Image, StyleSheet, ImageBackground} from 'react-native';

export default function Home({Navigation}){
  return(
    <ImageBackground source={require('../assets/space.gif')} style={estilo.container}>
    
      <Text style={estilo.titulo}>Desenhos Retrô</Text>

      <View stlyle={estilo.fundo}>
        <Image source={require("../assets/tv.png")} style={estilo.img}/>
      </View>

    </ImageBackground>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 38,
    marginTop: 85,
    marginBottom: 20,
    backgroundColor: '#deadf0',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontWeight: 'bold',
    borderColor: '#fff',
    borderWidth: 3,
    textAlign: 'center'
  },
  fundo: {

  },
  img: {
    resizeMode: 'stretch',
    width: 350,
    height: 225,
    marginTop: 90
  },
})









