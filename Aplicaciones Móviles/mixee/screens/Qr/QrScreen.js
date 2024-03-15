import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import QrCard from "../../components/cards/QrCard/QrCard";
import { styles } from "./qrscreen.styles";

const QrScreen = () => {
  const navigation = useNavigation();
  const [qrResults, setQrResults] = useState([]);

  const handleScan = useCallback((data) => {
    if (data) {
      setQrResults((prevResults) => [...prevResults, data]);
    }
  }, []);

  const handleOpenCamera = () => {
    navigation.navigate("Camera", { onScan: handleScan, key: 'unique_key' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Códigos QR</Text>
      <FlatList
        data={qrResults}
        keyExtractor={(item, index) => item + index.toString()}
        renderItem={({ item }) => <QrCard barName={item} tableNumber={1} totalFood={25} isOpen={true} />}
      />
      <TouchableOpacity style={styles.qrButton} onPress={handleOpenCamera}>
        <MaterialIcons name="qr-code" size={34} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default QrScreen;