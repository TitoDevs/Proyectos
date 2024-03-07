import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import BarCard from "../../components/cards/BarCard";

const QrScreen = () => {
  const navigation = useNavigation();
  const [qrResults, setQrResults] = useState([]);

  const handleScan = useCallback((data) => {
    if (data) {
      setQrResults((prevResults) => [...prevResults, data]);
    }
  }, []);

  const handleOpenCamera = () => {
    navigation.navigate("Camera", { onScan: handleScan });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Códigos QR</Text>
      <FlatList
        data={qrResults}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item }) => <BarCard barName={item} tableNumber={1} totalFood={25} isOpen={true} />} 
      />
      <TouchableOpacity style={styles.qrButton} onPress={handleOpenCamera}>
        <MaterialIcons name="qr-code" size={34} color="white" />
      </TouchableOpacity>
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
