import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Pressable } from 'react-native';

export default function Item(props) {
  const [atividadeFeita, setAtividadeFeita] = useState(false)
  const [corDeFundo, setCorDeFundo] = useState('#fff')

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.botaoFeito, {backgroundColor: corDeFundo}]}
        onPress={() => {
          if(atividadeFeita === false){
            setAtividadeFeita(true)
            setCorDeFundo('#55BCF6')
          } else {
            setAtividadeFeita(false)
            setCorDeFundo('#fff')
          }
        }}
      />
      <Text style={styles.textoTarefa}>{props.nomeDoItem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 65,
    borderRadius: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  botaoFeito: {
    margin: 15,
    width: 35,
    height: 35,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#55BCF6',
  },
  textoTarefa: {
    fontSize: 18
  }
})