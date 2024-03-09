import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";

const DetailsOrderScreen = ({ route }) => {
  const { barName, tableNumber, selectedItems } = route.params;

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: " ",
      title: "Detalles",
    });
  }, [navigation]);

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
          const existingIndex = updatedItems.findIndex(
            (item) => item.id === newItem.id
          );
          updatedItems[existingIndex] = {
            ...updatedItems[existingIndex],
            quantity: updatedItems[existingIndex].quantity + newItem.quantity,
          };
        } else {
          // Si el elemento no existe, agrégalo al completo
          updatedItems.push({ ...newItem });
        }
      });

      setOrderItems(updatedItems);

      // Calcula el nuevo precio total sumando solo los precios de los items existentes
      const newTotalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalPrice(newTotalPrice);
    }
  }, [selectedItems]);

  const handlePayment = () => {
    // Implementa la lógica para procesar el pago aquí
    // Puedes mostrar un mensaje de confirmación o redirigir a una pantalla de pago
    Alert.alert("¡Pedido realizado!", `Total a pagar: $${totalPrice}`);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.detailText}>{barName}</Text>
          <Text style={styles.detailText}>Mesa: {tableNumber}</Text>
          <View style={styles.header}>
            <View style={styles.detailsHeader}>

            </View>
            <View style={styles.partyHeader}>

            </View>
          </View>

          <Text style={styles.subheading}>Pedido</Text>
          <View style={styles.detailOrder}>
            {orderItems.length > 0 ? (
              <FlatList
                data={orderItems}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => (
                  <View style={styles.orderHeader}>
                    <Text style={styles.headerText}>Producto</Text>
                    <Text style={[styles.headerText, styles.endText]}>Cantidad</Text>
                    <Text style={[styles.headerText, styles.endText]}>Precio</Text>
                  </View>
                )}
                renderItem={({ item }) => (
                  <View style={styles.orderItem}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={[styles.itemText, styles.endText]}>{item.quantity}</Text>
                    <Text style={[styles.itemText, styles.endText]}>${item.price.toFixed(2)}</Text>
                  </View>
                )}
              />
            ) : (
              <Text style={styles.noItemsText}>Aún no has pedido nada.</Text>
            )}
          </View>

          <Text style={styles.totalText}>Total: ${totalPrice}</Text>

          <View style={styles.bottomButtons}>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() =>
                navigation.navigate("Menu", {
                  barName,
                  tableNumber,
                  selectedItems,
                })
              }
            >
              <Text style={styles.menuButtonText}>Ver Menú</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
              <Text style={styles.payButtonText}>Realizar Pago</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f8f8",
  },
  noItemsText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  detailOrder: {
    flex: 1,
    justifyContent: "center",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 15,
    flex: 1,
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
  orderHeader: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  headerText: {
    fontWeight: "600",
    fontSize: 16,
    width: "33%"
  },
  centeredText: {
    textAlign: "center",
  },
  endText: {
    textAlign: "right"
  },
  orderItem: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 8,
  },
  itemText: {
    fontSize: 16,
    width: "33%"
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "#333",
  },
  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderTopWidth: 2,
    borderTopColor: "#ccc",
    backgroundColor: "#fff",
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
