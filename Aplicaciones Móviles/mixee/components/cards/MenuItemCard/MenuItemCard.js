import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
function MenuItemCard(props) {
  return (
    <TouchableOpacity key={props.id} style={styles.menuItem} activeOpacity={1.0}>
      <Image source={{ uri: props.image }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{props.name}</Text>
        <View style={styles.itemInfo}>
          <Text style={styles.itemPrice}>${props.price}</Text>
          <View style={styles.quantityButtons}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleSelectItem(props, -1)}
            >
              <Icon name="minus" size={20} color="#007bff" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>
              {selectedItems.find((selected) => selected.id === props.id)
                ?.quantity || 0}
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleSelectItem(props, 1)}
            >
              <Icon name="plus" size={20} color="#007bff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MenuItemCard;
