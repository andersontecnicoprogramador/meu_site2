import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function Index() {
  let [fontsLoaded] = useFonts({
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Ou um carregamento ou mensagem
  }
  return (

    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#260F0D'
      }}
    >

      <Text
        style={{ fontFamily: 'Roboto-Light', marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}
      >
        Coffee With Programation
      </Text>

      <Image
        style={{
          width: 300,
          height: 300,
          borderRadius: 300
        }}
        source={require('../assets/images/dani.jpg')}
      />

      <Text

        style={{ marginBottom: 20, marginTop: 20, color: '#fff', fontSize: 20 }}>
        <Icon name="coffee" size={30} color="#fff" /> <Icon name="code" size={20} color="#fff" /> print, function
      </Text>

      <Link href="/products" style={styles.buttonOne} asChild>
        <TouchableOpacity>
          <Text style={styles.buttonOneText}>
            Ver menu
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     display: 'flex',
//   },
// });