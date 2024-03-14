import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "../../screens/Home/HomeScreen";
import QrScreen from "../../screens/Qr/QrScreen";
import MapScreen from "../../screens/Map/MapScreen";
import ReservationScreen from "../../screens/Reservation/ReservationScreen";
import MessageScreen from "../../screens/Message/MessageScreen";
import MainHeader from "../../components/header/MainHeader";

const BottomTab = createBottomTabNavigator();

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

  const BottomTabNavigator = () => {
    return (
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          style: { flex: 1 },
          header: () => <MainHeader />,
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
  
  export default BottomTabNavigator;