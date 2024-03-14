import React from "react";
import {
  View,
  Text,
  FlatList,
  Alert,
} from "react-native";
import { reservations } from "./data.test";
import ReservationCard from "../../components/cards/ReservationCard/ReservationCard";
import { styles } from "./reservationscreen.styles";

const ReservationScreen = () => {

  const handleDetailsPress = (reservation) => {
    Alert.alert(
      'Detalles de la Reserva',
      `Cliente: ${reservation.customerName}\nFecha: ${reservation.date}\nHora: ${reservation.time}\nTamaño de la fiesta: ${reservation.partySize}\nEstado: ${reservation.status ? "Confirmada": "Cancelada"}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reservas</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ReservationCard status={item.status} barName={item.barName} partySize={item.partySize} date={item.date} handle={() => handleDetailsPress(item)}/>
        )}
      />
    </View>
  );
};

export default ReservationScreen;
