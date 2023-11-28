import * as React from 'react';
import {Text, View, SafeAreaView, Image, ScrollView, StyleSheet} from 'react-native';

export default function Ben({Navigation}){
  return(
    <SafeAreaView style={estilo.container}>
    
    <View style={estilo.titulodiv}>
        <Text style={estilo.titulo}>
          Ben 10
        </Text>
    </View>

    <View style={estilo.hr}></View>
    <View style={estilo.hr2}></View>

      <ScrollView style={estilo.scroll}>

      <View style={estilo.bunda}>
        <Image source={require("../assets/tvben10.png")} style={estilo.img}/>
      </View>
        
      <View style={estilo.subtitulodiv}>
        <Text style={estilo.subtitulo}>
          Ben Tenisson
        </Text>
      </View>


      <View style={estilo.bunda}>
        <Image source={require("../assets/ben10medo.jpg")} style={estilo.img}/>
      </View>

      <View style={estilo.subtitulodiv}>
        <Text style={estilo.p}>Um garoto que acha um relógio alienigena nas férias de verão</Text>
      </View>

      <View style={estilo.bunda}>
        <Image source={require("../assets/4braco.jpg")} style={estilo.img}/>
      </View>

      <View style={estilo.subtitulodiv}>
        <Text style={estilo.p}>Com esse relógio, Ben ganha o poder de se transformar em alienígenas</Text>
      </View>

      </ScrollView>
    
    </SafeAreaView>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    alignItems: 'center',
    width: '100%'
  },
  titulo: {
    fontSize: 40,
    marginTop: 30
  },
  hr: {
    width: '100%',
    borderWidth: 3,
    borderColor: '#000',
  },
  hr2: {
    width: '100%',
    borderWidth: 3,
    borderColor: '#367d28'
  },
  img: {
    resizeMode: 'stretch',
    marginTop: 20,
    width: 300,
    height: 200,
    borderRadius: 10
  },
  scroll: {
    alignItems: 'center',
    backgroundColor: '#696969',
    width: '100%',
  },
  subtitulodiv: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    padding: 2,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 30,
    padding: 8,
  },
  p: {
    textAlign: 'center',
    fontSize: 20,
    maxWidth: 300,
    padding: 8
  },
  bunda: {
    alignItems: 'center'
  }
})