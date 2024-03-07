import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";

const DetailsOrderScreen = ({ route }) => {
  const { barName, tableNumber, selectedItems } = route.params;

  const navigation = useNavigation();

  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (selectedItems && selectedItems.length > 0) {
      // Utiliza un conjunto temporal para filtrar elementos duplicados
      const tempSet = new Set(orderItems.map((item) => item.id));
      const updatedItems = [...orderItems];
  
      selectedItems.forEach((newItem) => {
        if (tempSet.has(newItem.id)) {
          // Si el elemento ya existe, actualiza la cantidad
          const existingIndex = updatedItems.findIndex((item) => item.id === newItem.id);
          updatedItems[existingIndex] = { ...updatedItems[existingIndex], quantity: updatedItems[existingIndex].quantity + newItem.quantity };
        } else {
          // Si el elemento no existe, agrégalo al completo
          updatedItems.push({ ...newItem });
        }
      });
  
      setOrderItems(updatedItems);
  
      // Calcula el nuevo precio total sumando solo los precios de los items existentes
      const newTotalPrice = updatedItems.reduce((total, item) => total + item.price * item.quantity, 0);
      setTotalPrice(newTotalPrice);
    }
  }, [selectedItems]);
  
  

  const handlePayment = () => {
    // Implementa la lógica para procesar el pago aquí
    // Puedes mostrar un mensaje de confirmación o redirigir a una pantalla de pago
    Alert.alert("¡Pedido realizado!", `Total a pagar: $${totalPrice}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Detalles del Pedido</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Bar: {barName}</Text>
        <Text style={styles.detailText}>Mesa: {tableNumber}</Text>

        <Text style={styles.subheading}>Pedido</Text>
        <FlatList
  data={orderItems}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <View style={styles.orderItem}>
      <Text>
        {item.name} - ${item.price} {item.quantity && item.quantity > 1 ? `x${item.quantity}` : ''}
      </Text>
    </View>
  )}
/>


        <Text style={styles.totalText}>Total: ${totalPrice}</Text>

        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Realizar Pago</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate("Menu", { barName, tableNumber, selectedItems })}
        >
          <Text style={styles.menuButtonText}>Ver Menú</Text>
        </TouchableOpacity>
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
    marginBottom: 20,
    color: "#333",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#333",
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "#333",
  },
  orderItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "#333",
  },
  payButton: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  menuButton: {
    backgroundColor: "#28a745",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  menuButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DetailsOrderScreen;
