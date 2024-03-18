import React, { useState, useEffect } from "react";
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

  const handleScan = (event) => {
    if (!scanned) {
      setScanned(true);
      if (route.params && route.params.onScan) {
        route.params.onScan(event.data);
      }
      navigation.goBack(); // Usar navigation.goBack() en lugar de navigation.navigate()
    }
  };

  const handleExit = () => {
    if (!scanned) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.cameraContainer}>
      {hasCameraPermission === true && (
        <Camera
          style={styles.camera}
          onBarCodeScanned={handleScan}
          ratio="16:9"
        />
      )}
      <TouchableOpacity onPress={handleExit} style={styles.exitButton}>
          <AntDesign name="close" size={30} color="#ccc" />
        </TouchableOpacity>
    </View>
  );
};

export default CameraScreen;