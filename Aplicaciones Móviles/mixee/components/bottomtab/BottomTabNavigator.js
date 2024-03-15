import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/Home/HomeScreen";
import QrScreen from "../../screens/Qr/QrScreen";
import MapScreen from "../../screens/Map/MapScreen";
import ReservationScreen from "../../screens/Reservation/ReservationScreen";
import MessageScreen from "../../screens/Message/MessageScreen";
import MainHeader from "../../components/header/MainHeader";
import { getTabBarIcon } from "../../menus/mainmenu";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
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
