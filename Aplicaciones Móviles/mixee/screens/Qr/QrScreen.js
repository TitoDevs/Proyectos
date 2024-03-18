import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import QrCard from "../../components/cards/QrCard/QrCard";
import { styles } from "./qrscreen.styles";
import { handleScan, getMyQrCodes } from "../../services/databaseservice";

const QrScreen = () => {
  const navigation = useNavigation();
  const [qrCodes, setQrCodes] = useState([]);
  const [scanData, setScanData] = useState(null);

  useEffect(() => {
    getMyQrCodes(setQrCodes);
  }, []);

  const handleOpenCamera = () => {
    navigation.navigate("Camera", {
      onScan: (data) => {
        console.log(data);
        setScanData(data);
      },
      key: 'unique_key'
    });
  };

  useEffect(() => {
    if (scanData) {
      handleScan(scanData, setQrCodes);
      setScanData(null); // Reiniciar scanData después de ejecutar handleScan
    }
  }, [scanData]);

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