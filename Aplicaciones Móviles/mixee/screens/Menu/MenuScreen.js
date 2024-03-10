import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 

const MenuScreen = ({ route, navigation }) => {
  const { barName, tableNumber } = route.params;
  const menuItems = [
    {
      id: 1,
      category: "Carnes",
      name: "Hamburguesa",
      price: 10,
      image:
        "https://media.istockphoto.com/id/1206323282/es/foto/hamburguesa-jugosa-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=r2mLaVFZxtRk4MeKpdQLtwTkcctyOpGEP-OxPeyo4_c=",
    },
    {
      id: 2,
      category: "Pizzas",
      name: "Pizza",
      price: 12,
      image:
        "https://media.istockphoto.com/id/1377372234/es/foto/pizza-con-salami-pimiento-tomates-y-queso-encurtidos-tocino-y-salchichas-sobre-un-fondo-ligero.jpg?s=612x612&w=0&k=20&c=mEKMbrhjixwgGcdrq7Jm-E5wyhBfinRbGbCc8__y4Fs=",
    },
    {
      id: 3,
      category: "Ensaladas",
      name: "Ensalada",
      price: 8,
      image:
        "https://cdn0.recetasgratis.net/es/posts/3/2/6/ensalada_de_verduras_variadas_57623_orig.jpg",
    },
    {
      id: 4,
      category: "Bebidas",
      name: "Coca-cola",
      price: 2,
      image:
        "https://www.coca-cola.com/content/dam/onexp/gt/es/brands/coca-cola/es_coca-cola_prod_orginal-bottle-600mL_750x750_v1.jpg",
    },
    {
      id: 5,
      category: "Postres",
      name: "Pastel de Chocolate",
      price: 15,
      image: "https://i.ytimg.com/vi/H7uMpjzyaTU/maxresdefault.jpg",
    },
    {
      id: 6,
      category: "Postres",
      name: "Pastel de Chocolate",
      price: 15,
      image: "https://i.ytimg.com/vi/H7uMpjzyaTU/maxresdefault.jpg",
    },
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

  const uniqueCategories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.heading}>Menú</Text>
        <ScrollView>
          {uniqueCategories.map((category) => (
            <View key={category}>
              <Text style={styles.categoryHeading}>{category}</Text>
              {menuItems
                .filter((item) => item.category === category)
                .map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.menuItem}
                    activeOpacity={1.0}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={styles.itemImage}
                    />
                    <View style={styles.itemDetails}>
                      <Text style={styles.itemName}>{item.name}</Text>
                      <View style={styles.itemInfo}>
                        <Text style={styles.itemPrice}>${item.price}</Text>
                        <View style={styles.quantityButtons}>
                          <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => handleSelectItem(item, -1)}
                          >
                            <Icon name="minus" size={20} color="#007bff" />
                          </TouchableOpacity>
                          <Text style={styles.quantityText}>
                            {selectedItems.find(
                              (selected) => selected.id === item.id
                            )?.quantity || 0}
                          </Text>
                          <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => handleSelectItem(item, 1)}
                          >
                            <Icon name="plus" size={20} color="#007bff" />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          ))}
        </ScrollView>
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
