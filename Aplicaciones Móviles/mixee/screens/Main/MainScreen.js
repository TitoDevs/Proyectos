import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../Home/HomeScreen";
import QrScreen from "../Qr/QrScreen";
import MapScreen from "../Map/MapScreen";
import ReservationScreen from "../Reservation/ReservationScreen";
import MessageScreen from "../Message/MessageScreen";
import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import * as Font from 'expo-font';

const fetchFonts = async () => {
  await Font.loadAsync({
    'custom-font': require('../../assets/fonts/TextLogo.ttf'),
  });
};

const getTabBarIcon = (route, focused, color, size) => {
  let iconName;
  switch (route.name) {
    case "Home":
      iconName = focused ? "home" : "home-outline";
      break;
    case "QR":
      iconName = focused ? "qr-code" : "qr-code-outline";
      break;
    case "Map":
      iconName = focused ? "map" : "map-outline";
      break;
    case "Reservations":
      iconName = focused ? "calendar" : "calendar-outline";
      break;
    case "Messages":
      iconName = focused ? "chatbubbles" : "chatbubbles-outline";
      break;
    default:
      iconName = "";
  }

  return <Icon name={iconName} size={size} color={color} />;
};

const MainScreen = () => {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await fetchFonts();
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  if(!fontLoaded) {
    return null;
  }

  const CustomHeader = () => {
    const navigation = useNavigation();
    const defaultHeaderHeight = Platform.OS === "ios" ? 44 : 56;

    const handleProfilePress = () => {
      navigation.navigate("Profile");
    };

    return (
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
            height: defaultHeaderHeight,
            borderBottomWidth: 0.4,
            borderBottomColor: "#e0e0e0",
          }}
        >
          <Text style={{ fontSize: 26, fontWeight: "100", fontFamily: 'custom-font' }}>Mixee</Text>
          <TouchableOpacity onPress={handleProfilePress}>
            <Icon name="person-outline" size={24} color="tomato" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
        screenOptions={({ route }) => ({
          style: {flex: 1},
          header: () => <CustomHeader />,
          tabBarIcon: ({ focused, color, size }) =>
            getTabBarIcon(route, focused, color, size),
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="QR" component={QrScreen} />
        <BottomTab.Screen name="Map" component={MapScreen} />
        <BottomTab.Screen name="Reservations" component={ReservationScreen} />
        <BottomTab.Screen name="Messages" component={MessageScreen} />
      </BottomTab.Navigator>
  );
};

export default MainScreen;
