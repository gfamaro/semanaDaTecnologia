import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* VIEW DA FOTO E NOME */}
      <View style={styles.viewFotoNome}>
        <Image
          style={styles.foto}
          source={{ uri: 'https://github.com/gfamaro.png' }}
        />
        <Text style={styles.textoNome}>GABRIEL FONSECA AMARO</Text>
        <View style={styles.linha}></View>
      </View>

      {/* VIEW INFORMAÇÕES */}
      <View style={styles.viewInformacoes}>
        <View style={styles.viewSubtitulo}>
          <Text style={styles.textoPrincipal}>Idade: </Text>
          <Text style={styles.textoSecundario}>18</Text>
        </View>

        <View style={styles.viewSubtitulo}>
          <Text style={styles.textoPrincipal}>Curso: </Text>
          <Text style={styles.textoSecundario}>Automação Industrial</Text>
        </View>

        <View style={styles.viewSubtitulo}>
          <Text style={styles.textoPrincipal}>Turma: </Text>
          <Text style={styles.textoSecundario}>3D2</Text>
        </View>

        <View style={styles.viewSubtitulo}>
          <Text style={styles.textoPrincipal}>Altura: </Text>
          <Text style={styles.textoSecundario}>1.80</Text>
        </View>

        <View style={styles.viewSubtitulo}>
          <Text style={styles.textoPrincipal}>Cidade: </Text>
          <Text style={styles.textoSecundario}>Santa-Bárbara</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  foto: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2
  },
  linha: {
    height: 1,
    width: '80%',
    backgroundColor: 'black'
  },
  viewFotoNome: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  textoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  viewInformacoes: {
    flex: 1,
    width: '100%'
  },
  viewSubtitulo: {
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 40,
  },
  textoPrincipal: {
    fontWeight: 'bold',
    fontSize: 18
  },
  textoSecundario: {
    fontSize: 18,
    marginLeft: 20
  }

});
