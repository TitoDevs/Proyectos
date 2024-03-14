import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; 
import { menuItems } from "./data.test";
import { styles } from "./menuscreen.styles";
import PrimaryButton from "../../components/buttons/PrimaryButton/PrimaryButton";

const MenuScreen = ({ route, navigation }) => {
  const { barName, tableNumber } = route.params;
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
        <PrimaryButton style={styles.detailsButton} color={styles.detailsButtonText} text={"Pedir"} onPress={handleGoToDetails}/>
      </View>
    </SafeAreaView>
  );
};

export default MenuScreen;
