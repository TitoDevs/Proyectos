import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from "react-native";

const MenuScreen = ({ route, navigation }) => {
  const { barName, tableNumber } = route.params;
  const menuItems = [
    { id: 1, name: "Hamburguesa", price: 10 },
    { id: 2, name: "Pizza", price: 12 },
    { id: 3, name: "Ensalada", price: 8 },
    // Agrega más ejemplos según sea necesario
  ];
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item) => {
    const existingItemIndex = selectedItems.findIndex((selected) => selected.id === item.id);

    if (existingItemIndex !== -1) {
      // Si el elemento ya está en la lista, actualiza la cantidad
      const updatedItems = [...selectedItems];
      updatedItems[existingItemIndex] = { ...item, quantity: updatedItems[existingItemIndex].quantity + 1 };
      setSelectedItems(updatedItems);
    } else {
      // Si el elemento no está en la lista, agrégalo con cantidad 1
      setSelectedItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
  };

  const handleGoToDetails = () => {
    console.log("Selected Items:", selectedItems);
    navigation.navigate("DetailsOrder", {
      barName,
      tableNumber,
      selectedItems: selectedItems.map((item) => ({ ...item, quantity: item.quantity || 1 })),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Menú</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.menuItem, selectedItems.find((selected) => selected.id === item.id) && styles.selectedItem]}
            onPress={() => handleSelectItem(item)}
          >
            <Text>{item.name} - ${item.price} {selectedItems.find((selected) => selected.id === item.id)?.quantity > 1 ? `x${selectedItems.find((selected) => selected.id === item.id).quantity}` : ''}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.detailsButton} onPress={handleGoToDetails}>
        <Text style={styles.detailsButtonText}>Pedir</Text>
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
    marginBottom: 20,
    color: "#333",
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  selectedItem: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
  detailsButton: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  detailsButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MenuScreen;
