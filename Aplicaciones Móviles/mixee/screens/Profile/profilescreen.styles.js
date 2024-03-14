import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 16,
    color: "gray",
  },
  menuContainer: {
    height: "auto",
    marginTop: 20,
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  menuButton: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 15,
  },
  menuButtonText: {
    color: "black",
    textAlign: "left",
    fontSize: 16,
  },
});
