import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import QrCard from "../../components/cards/QrCard/QrCard";
import { styles } from "./qrscreen.styles";
import { handleScan, getMyQrCodes } from "../../services/databaseservice"; // Importa la función handleScan

const QrScreen = () => {
  const navigation = useNavigation();
  const [qrCodes, setQrCodes] = useState([]);

  useEffect(() => {
    getMyQrCodes(setQrCodes);
  }, []);

  const handleScanQRCode = useCallback((data) => { // Renombra la función handleScan a handleScanQRCode
    if (data) {
      console.log(data);
      handleScan(data);
      //setQrCodes((prevResults) => [...prevResults, data]);
    }
  }, []);

  const handleOpenCamera = () => {
    navigation.navigate("Camera", { onScan: handleScanQRCode, key: 'unique_key' }); // Pasa la función handleScanQRCode como callback al escanear
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Códigos QR</Text>
      <FlatList
        data={qrCodes}
        keyExtractor={(item, index) => item.key || index.toString()}
        renderItem={({ item }) => <QrCard barName={item.barName} tableNumber={item.tableNumber} totalFood={item.totalFood} isOpen={item.isOpen} />}
      />
      <TouchableOpacity style={styles.qrButton} onPress={handleOpenCamera}>
        <MaterialIcons name="qr-code" size={34} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default QrScreen;
