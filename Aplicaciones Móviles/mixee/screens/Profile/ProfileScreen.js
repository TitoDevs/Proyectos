import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from "react-native";

const ProfileScreen = () => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <Image
        source={{
          uri: "data:image/png;base64,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",
        }}
        style={styles.profileImage}
      />
      <Text style={styles.userName}>Nombre de Usuario</Text>
      <Text style={styles.userEmail}>correo@ejemplo.com</Text>
    </View>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Configuración')}>
        <Text style={styles.buttonText}>Configuración</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Cerrar Sesión')}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
      <Button style={styles.buttonText} title="Configuración"></Button>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: "gray",
  },
  buttonContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: "tomato",
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default ProfileScreen;
