import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Modal,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const DetailsOrderScreen = ({ route }) => {
  const { barName, tableNumber, selectedItems } = route.params;

  const [members, setMembers] = useState([
    { id: 1, name: "Usuario 1", isAdmin: true },
    { id: 2, name: "Usuario 2", isAdmin: false },
    { id: 3, name: "Usuario 3", isAdmin: false },
  ]);

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: " ",
      title: barName,
    });
  }, [navigation]);

  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [newMemberName, setNewMemberName] = useState("");

  useEffect(() => {
    if (selectedItems && selectedItems.length > 0) {
      const tempSet = new Set(orderItems.map((item) => item.id));
      const updatedItems = [...orderItems];

      selectedItems.forEach((newItem) => {
        if (tempSet.has(newItem.id)) {
          const existingIndex = updatedItems.findIndex(
            (item) => item.id === newItem.id
          );
          updatedItems[existingIndex] = {
            ...updatedItems[existingIndex],
            quantity: updatedItems[existingIndex].quantity + newItem.quantity,
          };
        } else {
          updatedItems.push({ ...newItem });
        }
      });

      setOrderItems(updatedItems);

      const newTotalPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalPrice(newTotalPrice);
    }
  }, [selectedItems]);

  const handlePayment = () => {
    Alert.alert("¡Pedido realizado!", `Total a pagar: $${totalPrice}`);
  };

  const handleShowMembers = () => {
    setShowMembersModal(true);
  };

  const handleCloseMembersModal = () => {
    setShowMembersModal(false);
  };

  const handleAddMember = () => {
    if (newMemberName.trim() !== "") {
      const newMember = {
        id: members.length + 1,
        name: newMemberName,
        isAdmin: false, // Por defecto, el nuevo miembro no es admin
      };

      setMembers((prevMembers) => [...prevMembers, newMember]);
      setNewMemberName("");
    }
  };

  const renderMembersList = () => (
    <ScrollView style={styles.modalScrollView}>
      {members.map((member) => (
        <Text key={member.id} style={styles.modalText}>
          {member.name} {member.isAdmin ? "(Admin)" : ""}
        </Text>
      ))}
    </ScrollView>
  );

  const renderAddMemberForm = () => (
    <>
      <TextInput
        style={styles.modalInput}
        placeholder="Nombre del nuevo miembro"
        value={newMemberName}
        onChangeText={(text) => setNewMemberName(text)}
      />
      <TouchableOpacity
        style={styles.modalAddButton}
        onPress={handleAddMember}
      >
        <Text style={styles.modalAddButtonText}>Agregar</Text>
      </TouchableOpacity>
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <View style={styles.header}>
            <View style={styles.detailsHeader}>
              <Text style={styles.detailText}>Mesa: {tableNumber}</Text>
            </View>
            <View style={styles.partyHeader}>
              <TouchableOpacity onPress={handleShowMembers}>
                <Icon name="users" size={24} color="#007bff" />
              </TouchableOpacity>
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
                    <Text style={[styles.headerText, styles.endText]}>
                      Cantidad
                    </Text>
                    <Text style={[styles.headerText, styles.endText]}>
                      Precio
                    </Text>
                  </View>
                )}
                renderItem={({ item }) => (
                  <View style={styles.orderItem}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={[styles.itemText, styles.endText]}>
                      {item.quantity}
                    </Text>
                    <Text style={[styles.itemText, styles.endText]}>
                      ${item.price.toFixed(2)}
                    </Text>
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

      <Modal
        visible={showMembersModal}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {newMemberName !== ""
                ? "Agregar Miembro"
                : "Integrantes de la mesa"}
            </Text>

            {newMemberName === "" ? renderMembersList() : renderAddMemberForm()}

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={handleCloseMembersModal}
            >
              <Text style={styles.modalCloseButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  showMembersText: {
    color: "#007bff",
    fontSize: 16,
    marginLeft: 8,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 15,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    width: "33%",
  },
  centeredText: {
    textAlign: "center",
  },
  endText: {
    textAlign: "right",
  },
  orderItem: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 8,
  },
  itemText: {
    fontSize: 16,
    width: "33%",
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 5,
  },
  modalCloseButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  modalCloseButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalScrollView: {
    maxHeight: 150,
    marginBottom: 10,
  },
  modalInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalAddButton: {
    backgroundColor: "#28a745",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignItems: "center",
  },
  modalAddButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DetailsOrderScreen;
