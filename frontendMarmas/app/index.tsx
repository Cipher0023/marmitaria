import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/restaurant.png')} // Caminho correto da sua imagem
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <Text style={styles.text}>Bem-vindo à Marmas!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'relative',
    top: 0,
    left: 0,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    marginTop: 40, // Ajuste conforme necessário
    alignSelf: 'center'
  }
});