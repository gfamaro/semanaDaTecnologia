import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Platform, ScrollView, Pressable, Keyboard } from 'react-native';
import Item from './components/itens';

export default function App() {
  const [tarefa, setTarefa] = useState()
  const [listaTarefas, setListaTarefas] = useState([])

  const adicionarTarefas = () => {
    Keyboard.dismiss()
    setListaTarefas([...listaTarefas, tarefa])
    setTarefa(null)
  }

  const removerTarefa = (index) => {
    let listaSecundaria = [...listaTarefas]
    listaSecundaria.splice(index, 1),
    setListaTarefas(listaSecundaria)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>Lista de tarefas</Text>

      <ScrollView style={styles.viewItems}>
        {
          listaTarefas.map((item, index) => {
            return (
            <TouchableOpacity key={index} onPress={() => removerTarefa()}>
              <Item nomeDoItem={item} />
            </TouchableOpacity>)
          })
        }
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.escreverTarefa}
      >
        <TextInput
          style={styles.textInput}
          placeholder={'Escreva uma tarefa...'}
          value={tarefa}
          onChangeText={texto => setTarefa(texto)}
        />
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={() => adicionarTarefas()}
        >
          <Text style={styles.textBotaoAdicionar}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    alignItems: 'center',
  },
  textoTitulo: {
    marginTop: 50,
    marginBottom: 5,
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'flex-start',
    marginLeft: 20
  },
  viewItems: {
    flex: 1,
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  escreverTarefa: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    height: 55,
    width: 250,
    paddingHorizontal: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    borderRadius: 20
  },
  botaoAdicionar: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  textBotaoAdicionar: {
    fontSize: 25
  }
});
