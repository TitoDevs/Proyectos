import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image, SafeAreaView, Button, Alert } from "react-native";
import { styles } from "./profilescreen.styles";
import MenuButton from "../../components/buttons/MenuButton/MenuButton";
import { auth } from "../../services/firebase";
import { signOut } from "../../services/authservice";
import { getDatabase, ref, onValue } from "firebase/database";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: " ",
    });
  }, [navigation]);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserName(currentUser.displayName);
      setUserEmail(currentUser.email);
      setUserImage(currentUser.photoURL);
    }

    const db = getDatabase();
    const userRef = ref(
      db,
      `users/${currentUser ? currentUser.uid : ""}/personalData`
    );
    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData) {
        setUserImage(userData.photoURL);
        if (!userName) {
          setUserName(userData.displayName);
        }
      }
    });
  }, []);

  const handleLogout = () => {
    Alert.alert("Cerrar sesión", "¿Estás seguro de que deseas cerrar sesión?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Cerrar sesión",
        onPress: () => {
          signOut()
            .then(() => {
              navigation.navigate("Login");
            })
            .catch((error) => {
              console.log(error.message);
            });
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={
              userImage
                ? { uri: userImage }
                : require("../../assets/favicon.png")
            }
            style={styles.profileImage}
          />

          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
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
