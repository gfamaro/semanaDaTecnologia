import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [imagem, setImagem] = useState(require('./src/biscoito.png'))
  const [textoMotivacional, setTextoMotivacional] = useState('')

  var frases = [
    'Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.',
    'A persistência realiza o impossível.',
    'Seus sonhos não precisam de plateia, eles só precisam de você.',
    'A persistência é o caminho do êxito.',
    'É parte da cura o desejo de ser curado.',
    'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
  ]

  const quebrarBiscoito = () => {
    setImagem(require('./src/biscoitoAberto.png'))
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoMotivacional(' " ' + frases[numeroAleatorio] + ' " ')
  }

  const reiniciarBiscoito = () => {
    setImagem(require('./src/biscoito.png'))
    setTextoMotivacional('')
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={imagem}
      />
      <Text style={styles.textoPrincipal}>{textoMotivacional}</Text>

      <View style={styles.viewBotao}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => quebrarBiscoito()
          }>
          <Text style={[styles.textoBotao, { color: 'orange' }]}>Quebrar biscoito</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { borderColor: 'black', marginVertical: 0 }]}
          onPress={() => reiniciarBiscoito()}>
          <Text style={styles.textoBotao}>Reiniciar biscoito</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imagem: {
    width: 200,
    height: 200
  },
  viewBotao: {
    width: '100%',
    alignItems: 'center'
  },
  botao: {
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderColor: 'orange'
  },
  textoBotao: {
    fontSize: 16,
    fontWeight: '600'
  },
  textoPrincipal: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginHorizontal: 20
  }
});
