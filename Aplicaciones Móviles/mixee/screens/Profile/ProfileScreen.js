import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./profilescreen.styles";
import MenuButton from "../../components/buttons/MenuButton/MenuButton";

const ProfileScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: " ",
    });
  }, [navigation]);

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
          <MenuButton
            title={"Cerrar sesión"}
            onPress={() => console.log("Cerrar sesión")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
