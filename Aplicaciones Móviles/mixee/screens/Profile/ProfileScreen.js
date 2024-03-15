import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Button,
  Alert, // Importa Alert desde react-native
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./profilescreen.styles";
import MenuButton from "../../components/buttons/MenuButton/MenuButton";
import { auth } from '../../services/firebase'; // Importa la función de Firebase para cerrar sesión

const ProfileScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: " ",
    });
  }, [navigation]);

  const handleLogout = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Estás seguro de que deseas cerrar sesión?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Cerrar sesión",
          onPress: () => {
            auth.signOut() // Llama a la función de Firebase para cerrar sesión
              .then(() => {
                // Código para redirigir al usuario a la pantalla de inicio de sesión o a otra pantalla de tu aplicación
                navigation.navigate('Login'); // Por ejemplo, si tienes una pantalla de inicio de sesión llamada 'Login'
              })
              .catch((error) => {
                console.log(error.message);
                // Manejo de errores si la desconexión falla
              });
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <MenuButton
            title={"Datos de la cuenta"}
            onPress={() => console.log("Datos de la cuenta")}
          />
          <MenuButton
            title={"Añadir método de pago"}
            onPress={() => console.log("Añadir método de pago")}
          />
          <MenuButton
            title={"Tu privacidad"}
            onPress={() => console.log("Tu privacidad")}
          />
          <MenuButton
            title={"Sobre Mixee"}
            onPress={() => console.log("Sobre Mixee")}
          />
          <MenuButton title="Cerrar sesión" onPress={handleLogout} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
