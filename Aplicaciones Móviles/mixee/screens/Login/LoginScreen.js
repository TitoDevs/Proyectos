import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './loginscreen.styles';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyClnN4xdCsM7dHuanI-o-SZ3XLVfDkDg74",
  authDomain: "mixee-b086a.firebaseapp.com",
  databaseURL: "https://mixee-b086a-default-rtdb.firebaseio.com",
  projectId: "mixee-b086a",
  storageBucket: "mixee-b086a.appspot.com",
  messagingSenderId: "47599115603",
  appId: "1:47599115603:web:3418e639c4fbddac4fd5a6",
  measurementId: "G-8E76LPZDL0"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Main');
      })
      .catch(error => {
        // Manejo de errores
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    // Lógica para iniciar sesión con Google
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión con Correo Electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} />

      <Text style={styles.orText}>o</Text>

      <Text style={styles.title}>Inicio de Sesión con Google</Text>
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Text style={styles.googleButtonText}>Iniciar Sesión con Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
