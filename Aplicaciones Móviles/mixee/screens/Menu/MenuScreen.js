import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";

const MenuScreen = ({ route, navigation }) => {
  const { barName, tableNumber } = route.params;
  const menuItems = [
    { id: 1, category: "Carnes", name: "Hamburguesa", price: 10, image: 'require("")' },
    { id: 2, category: "Pizzas", name: "Pizza", price: 12, image: 'require("")' },
    { id: 3, category: "Ensaladas", name: "Ensalada", price: 8, image: '' },
    // Agrega más ejemplos según sea necesario
  ];
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item, quantity) => {
    const existingItemIndex = selectedItems.findIndex(
      (selected) => selected.id === item.id
    );
  
    if (existingItemIndex !== -1) {
      // Si el elemento ya está en la lista, actualiza la cantidad
      const updatedItems = [...selectedItems];
      const newQuantity = updatedItems[existingItemIndex].quantity + quantity;
  
      // Asegúrate de que la cantidad no sea menor que 0
      updatedItems[existingItemIndex] = {
        ...item,
        quantity: newQuantity >= 0 ? newQuantity : 0,
      };
  
      setSelectedItems(updatedItems);
    } else {
      // Si el elemento no está en la lista, agrégalo con cantidad 1
      setSelectedItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: quantity > 0 ? quantity : 1 },
      ]);
    }
  };

  const handleGoToDetails = () => {
    console.log("Selected Items:", selectedItems);
    navigation.navigate("DetailsOrder", {
      barName,
      tableNumber,
      selectedItems: selectedItems.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      })),
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Menú</Text>
        {menuItems.map((category) => (
          <View key={category.category}>
            <Text style={styles.categoryHeading}>{category.category}</Text>
            <FlatList
              data={menuItems.filter((item) => item.category === category.category)}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.menuItem}
                  activeOpacity={1.0}
                >
                  <Image source={item.image} style={styles.itemImage} />
                  <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <View style={styles.itemInfo}>
                      <Text style={styles.itemPrice}>${item.price}</Text>
                      <View style={styles.quantityButtons}>
                        <TouchableOpacity
                            activeOpacity={1.0}
                          onPress={() => handleSelectItem(item, -1)}
                        >
                          <Text style={styles.quantityButton}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>
                          {selectedItems.find(
                            (selected) => selected.id === item.id
                          )?.quantity || 0}
                        </Text>
                        <TouchableOpacity
                          onPress={() => handleSelectItem(item, 1)}
                        >
                          <Text style={styles.quantityButton}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ))}
        <TouchableOpacity
          style={styles.detailsButton}
          onPress={handleGoToDetails}
        >
          <Text style={styles.detailsButtonText}>Pedir</Text>
        </TouchableOpacity>
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
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  categoryHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  menuItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    justifyContent: "center",
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  itemInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemPrice: {
    fontSize: 16,
    color: "#333",
  },
  quantityButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    fontSize: 20,
    color: "#007bff",
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 5,
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
