import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('./src/assets/logo.png')}
      />

      <Text style={styles.txtLogin}>Login</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu email...'
          placeholderTextColor={'#34898F'}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite sua senha...'
          placeholderTextColor={'#34898F'}
        />
        <Text style={styles.recSenha}>Esqueceu sua senha?</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  txtLogin: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  inputContainer: {
    width: 320,
    marginBottom: 20,
  },
  label: {
    color: '#49B3BA',
    fontWeight: '700'
  },
  input: {
    width: '100%',
    height: 53,
    borderColor: '#49B3BA',
    borderWidth: 2,
    borderRadius: 5,
    padding: 16,
    fontSize: 14,
    marginBottom: 5
  },
  img: {
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#496BBA',
    width: 320,
    height: 44,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60
  },
  textButton: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700'
  },
  recSenha: {
    color: '#8C8A97',
    textDecorationLine: 'underline'
  },
});
