import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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