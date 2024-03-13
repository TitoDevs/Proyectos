import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const MainHeader = () => {
  const navigation = useNavigation();
  const defaultHeaderHeight = Platform.OS === "ios" ? 44 : 56;

  const handleProfilePress = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>Mixee</Text>
        <TouchableOpacity onPress={handleProfilePress}>
          <Icon name="person-outline" size={24} color="tomato" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "white",
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: Platform.OS === "ios" ? 44 : 56,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "100",
    fontFamily: "custom-font",
  },
});

export default MainHeader;
