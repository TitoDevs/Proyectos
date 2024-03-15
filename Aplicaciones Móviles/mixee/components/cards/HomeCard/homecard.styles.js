import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f9f9f9",
    elevation: 3,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  barName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  timestamp: {
    fontSize: 12,
    color: "#888",
  },
  cardImage: {
    height: 300,
    width: "100%",
    resizeMode: "cover",
    backgroundColor: "#ccc",
  },
  cardTitle: {
    fontSize: 16,
    paddingLeft: 10,
    color: "#666",
  },
  cardContent: {
    fontSize: 14,
    padding: 10,
    color: "#888",
  },
});
