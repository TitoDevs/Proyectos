import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "white",
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: Platform.OS === "ios" ? 44 : 56,
    borderBottomWidth: 0.4,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "100",
    fontFamily: "custom-font",
  },
  headerIcon: {
    color: "tomato"
  }
});
