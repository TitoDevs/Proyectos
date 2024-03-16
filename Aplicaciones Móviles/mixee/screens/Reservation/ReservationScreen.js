import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import ReservationCard from "../../components/cards/ReservationCard/ReservationCard";
import { styles } from "./reservationscreen.styles";
import { getMyReservations } from "../../services/databaseservice";

const ReservationScreen = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    getMyReservations(setReservations);
  }, []);

  const handleDetailsPress = (reservation) => {
    Alert.alert(
      'Detalles de la Reserva',
      `Fecha: ${reservation.date}\nHora: ${reservation.time}\nTamaño de la fiesta: ${reservation.partySize}\nEstado: ${reservation.status ? "Confirmada" : "Cancelada"}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reservas</Text>
      <FlatList
        data={reservations}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <ReservationCard
            status={item.status}
            barName={item.barName}
            partySize={item.partySize}
            date={item.date}
            time={item.time}
            handle={() => handleDetailsPress(item)}
          />
        )}
      />
    </View>
  );
};

export default ReservationScreen;