import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: "#f8f8f8",
      flex: 1,
    },
    heading: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#333",
    },
    card: {
      marginBottom: 20,
      borderRadius: 10,
      backgroundColor: "#fff",
      overflow: "hidden",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      padding: 15,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    statusContainer: {
      paddingVertical: 2,
      paddingHorizontal: 5,
      borderRadius: 12,
      alignSelf: 'flex-start',
    },
    statusText: {
      fontSize: 12,
      fontWeight: "600",
    },
    infoContainer: {
      flex: 1,
      marginTop: 10,
      marginLeft: 3,
      gap: 4,
    },
    barName: {
      fontSize: 16,
      fontWeight: "bold",
    },
    customerName: {
      fontSize: 14,
      color: "#555",
    },
    iconContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 6,
    },
    personCount: {
      fontSize: 12,
      marginLeft: 5,
    },
    detailsButton: {
      marginTop: 10,
      padding: 8,
      borderRadius: 5,
      backgroundColor: "#ccc",
      alignSelf: 'flex-start',
      width: 'auto',
    },
    detailsButtonText: {
      color: "#fff",
      fontWeight: "bold",
    },
    dateContainer: {
      alignItems: "center",
      justifyContent: "center",
      gap: 3,
      borderLeftWidth: 1,
      borderColor: '#ddd',
      paddingLeft: 14,
    },
    dateMonth: {
      fontSize: 14,
      color: "#333",
    },
    dateDay: {
      fontSize: 28,
      fontWeight: "500",
      color: "#333",
    },
    dateTime: {
      fontSize: 14,
      color: "#333",
    },
  });