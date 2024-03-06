import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: " ",
    });
  }, [navigation]);
  
return (
  <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x", // Agrega la URL de la imagen de perfil
          }}
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Nombre de Usuario</Text>
        <Text style={styles.userEmail}>correo@ejemplo.com</Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log("Datos de la cuenta")}
        >
          <Text style={styles.menuButtonText}>Datos de la cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log("Añadir método de pago")}
        >
          <Text style={styles.menuButtonText}>Añadir método de pago</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log("Tu privacidad")}
        >
          <Text style={styles.menuButtonText}>Tu privacidad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log("Sobre Mixee")}
        >
          <Text style={styles.menuButtonText}>Sobre Mixee</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => console.log("Cerrar sesión")}
        >
          <Text style={styles.menuButtonText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);
} 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
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
    // Establece un borde para la imagen de perfil si lo deseas
    borderWidth: 2,
    borderColor: "#ddd",
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
  menuContainer: {
    height: "auto",
    marginTop: 20,
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  menuButton: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 15,
  },
  menuButtonText: {
    color: "black",
    textAlign: "left",
    fontSize: 16,
  },
});

export default ProfileScreen;
