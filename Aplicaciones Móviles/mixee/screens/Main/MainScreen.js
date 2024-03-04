import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import HomeScreen from "../Home/HomeScreen";
import QrScreen from "../Qr/QrScreen";
import MapScreen from "../Map/MapScreen";
import ReservationScreen from "../Reservation/ReservationScreen";
import MessageScreen from "../Message/MessageScreen";
import { Text, TouchableOpacity, View } from "react-native";

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

  const CustomHeader = () => {
    const navigation = useNavigation();

    const handleProfilePress = () => {
      navigation.navigate('Profile');
    };

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingTop: 52,
          height: 104,
          backgroundColor: "white",
          borderBottomWidth: 1,
          borderBottomColor: "#e0e0e0",
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Mixee</Text>
        <TouchableOpacity
          onPress={handleProfilePress}
        >
          <Icon
            name="person-outline"
            size={24}
            color="tomato"
          />
        </TouchableOpacity>
      </View>
    );
  };

  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
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
