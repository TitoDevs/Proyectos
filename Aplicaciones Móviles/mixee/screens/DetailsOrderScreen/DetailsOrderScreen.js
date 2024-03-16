import React, { useState, useEffect } from "react";
import {
  View,
  Text,
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
import { styles } from "./detailsorderscreen.styles";
import PrimaryButton from "../../components/buttons/PrimaryButton/PrimaryButton";

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

          <Text style={styles.totalText}>Total Mesa: ${totalPrice}</Text>

          <View style={styles.bottomButtons}>
              <PrimaryButton style={styles.menuButton} text={"Ver Menú"} color={styles.menuButtonText} onPress={() =>
                navigation.navigate("Menu", {
                  barName,
                  tableNumber,
                  selectedItems,
                })}/>
              <PrimaryButton style={styles.payButton} text={"Realizar Pago"} color={styles.payButtonText} onPress={handlePayment}/>
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

export default DetailsOrderScreen;
