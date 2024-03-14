import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    header: {
      alignItems: "center",
      marginBottom: 16,
    },
    chat: {
      justifyContent: 'flex-end', 
      flex: 1
    },
    userMessage: {
      alignSelf: "flex-end",
      backgroundColor: "#DCF8C5",
      padding: 8,
      borderRadius: 8,
      marginBottom: 8,
    },
    otherMessage: {
      alignSelf: "flex-start",
      backgroundColor: "#E0E0E0",
      padding: 8,
      borderRadius: 8,
      marginBottom: 8,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 16,
    },
    input: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      paddingHorizontal: 12,
    },
    sendButton: {
      marginLeft: 12,
      padding: 10,
      backgroundColor: "tomato",
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  