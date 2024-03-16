import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button, TextInput, TouchableOpacity, Alert } from 'react-native';
import { auth, onAuthStateChanged } from '../../services/firebase';
import { signInWithEmail } from '../../services/authservice';
import { styles } from './loginscreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate('Main');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = () => {
    signInWithEmail(email, password)
      .then(() => {
        navigation.navigate('Main');
      })
      .catch((error) => {
        Alert.alert('Error', 'No se pudo iniciar sesión. Por favor, verifica tu correo electrónico y contraseña.');
        console.log(error.message)
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
