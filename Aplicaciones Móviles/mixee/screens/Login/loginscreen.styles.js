import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  orText: {
    marginVertical: 10,
    fontSize: 16,
  },
  googleButton: {
    backgroundColor: "#4285F4",
    padding: 10,
    borderRadius: 5,
  },
  googleButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
