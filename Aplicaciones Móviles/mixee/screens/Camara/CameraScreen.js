import React, { useState, useEffect, useCallback } from "react";
import { View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./camerascreen.styles";

const CameraScreen = ({ navigation, route }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const handleScan = useCallback(
    (event) => {
      if (!scanned) {
        setScanned(true);
        if (route.params && route.params.key === 'unique_key') {
          route.params.onScan(event.data);
        }
        navigation.goBack();
      }
    },
    [navigation, route.params, scanned]
  );

  const handleExit = () => {
    if (!scanned) {
      navigation.goBack();
    }
  };

  // Actualizar las opciones de navegación usando setOptions
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={handleExit} style={styles.exitButton}>
          <AntDesign name="close" size={30} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [handleExit, navigation]);

  return (
    <View style={styles.cameraContainer}>
      {hasCameraPermission === true && (
        <Camera style={styles.camera} onBarCodeScanned={handleScan} ratio="16:9" />
      )}
    </View>
  );
};

export default CameraScreen;
