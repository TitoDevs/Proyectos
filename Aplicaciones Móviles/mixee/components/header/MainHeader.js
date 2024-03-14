import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import { loadFonts } from "../../utils/utils";
import { styles } from "./mainheader.styles";

const MainHeader = () => {
  const navigation = useNavigation();
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFontsAsync = async () => {
      await loadFonts();
      setFontLoaded(true);
    };

    loadFontsAsync();
  }, []);

  if(!fontLoaded) {
    return null;
  }

  const handleProfilePress = () => {
    navigation.navigate("Profile");
  };

  return (
    <SafeAreaView style={styles.headerContainer}>
      <View style={styles.headerView}>
        <Text style={styles.headerTitle}>Mixee</Text>
        <TouchableOpacity onPress={handleProfilePress}>
          <Icon style={styles.headerIcon} name="person-outline" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default MainHeader;
