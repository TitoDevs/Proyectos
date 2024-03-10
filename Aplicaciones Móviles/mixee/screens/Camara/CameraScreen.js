import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { AntDesign } from "@expo/vector-icons";

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
        if (route.params && route.params.onScan) {
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

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  exitButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 50,
  },
});

export default CameraScreen;
