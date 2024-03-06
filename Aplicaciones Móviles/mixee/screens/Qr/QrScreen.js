import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { MaterialIcons } from "@expo/vector-icons";

const QrScreen = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [qrResults, setQrResults] = useState([]);

  useEffect(() => {
    (async () => {
      await MediaLibrary.requestPermissionsAsync();
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const handleScan = (event) => {
    console.log("QR Code Scanned:", event.data);
    setQrResults((prevResults) => [...prevResults, event.data]);
    setIsCameraOpen(false);
  };

  const handleOpenCamera = () => {
    setIsCameraOpen(true);
  };

  return (
    <View style={isCameraOpen ? styles.camera : styles.container}>
      <View style={styles.contentContainer}>
        {hasCameraPermission === null ? (
          <Text>Solicitando permisos de cámara...</Text>
        ) : hasCameraPermission === false ? (
          <Text>Permiso de cámara denegado</Text>
        ) : isCameraOpen ? (
          <Camera
            style={styles.camera}
            onBarCodeScanned={handleScan}
            ratio="16:9"
          />
        ) : (
          <>
            <View style={styles.resultContainer}>
              <Text style={styles.heading}>Códigos QR</Text>
              <FlatList
                data={qrResults}
                keyExtractor={(index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={styles.qrItem}>
                    <Text>{item}</Text>
                  </View>
                )}
              />
            </View>

            <TouchableOpacity
              style={styles.qrButton}
              onPress={handleOpenCamera}
            >
              <MaterialIcons name="qr-code" size={34} color="white" />
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  contentContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "tomato",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    bottom: 0,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  resultContainer: {
    alignItems: "center",
    height: "100%",
  },
  qrItem: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  qrButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "tomato",
    borderRadius: 50,
    padding: 15,
  },
});

export default QrScreen;
