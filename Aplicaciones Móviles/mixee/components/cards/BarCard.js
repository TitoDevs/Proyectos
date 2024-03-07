import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BarCard = ({ barName, tableNumber, totalFood, isOpen }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.barName}>{barName}</Text>
      <Text style={styles.tableNumber}>Mesa: {tableNumber}</Text>
      <Text style={styles.totalFood}>Total: ${totalFood}</Text>
      <Text style={isOpen ? styles.openStatus : styles.closedStatus}>
        Estado: {isOpen ? "Abierto" : "Cerrado"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  barName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  tableNumber: {
    fontSize: 16,
    color: "#555",
  },
  totalFood: {
    fontSize: 16,
    color: "#555",
  },
  openStatus: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
    marginTop: 5,
  },
  closedStatus: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default BarCard;
