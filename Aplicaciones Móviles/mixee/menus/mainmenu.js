import Icon from "react-native-vector-icons/Ionicons";

export const getTabBarIcon = (route, focused, color, size) => {
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
