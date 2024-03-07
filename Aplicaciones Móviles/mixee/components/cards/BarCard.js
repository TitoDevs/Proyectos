import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BarCard = ({ barName, tableNumber, totalFood, isOpen }) => {
  const navigation = useNavigation();

  const handleDetailsPress = () => {
    // Navegar a la página de detalles (reemplaza 'DetailsScreen' con el nombre de tu pantalla de detalles)
    navigation.navigate('DetailsOrder', { barName, tableNumber, totalFood, isOpen });
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View
          style={[
            styles.statusContainer,
            {
              backgroundColor: isOpen ? "#d4edda" : "#eee",
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              {
                color: isOpen ? "#28a745" : "#6c757d",
              },
            ]}
          >
            {isOpen ? "Abierto" : "Cerrado"}
          </Text>
        </View>
      </View>
      <Text style={styles.barName}>{barName}</Text>
      <Text style={styles.tableNumber}>Mesa: {tableNumber}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.totalFood}>${totalFood}</Text>
      </View>
      <TouchableOpacity style={styles.detailsButton} onPress={handleDetailsPress}>
        <Text style={styles.detailsButtonText}>Ver Detalles</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  statusContainer: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginBottom: 10,
    marginTop: 5
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  barName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  tableNumber: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
    marginBottom: 10
  },
  priceContainer: {
    position: "absolute",
    top: 20,
    right: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  totalFood: {
    fontSize: 16,
    color: "#555",
    fontWeight: "bold",
  },
  detailsButton: {
    marginTop: 10,
    borderRadius: 5,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: "#ccc"
  },
  detailsButtonText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: 'center'
  },
});

export default BarCard;
