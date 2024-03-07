import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const ReservationScreen = () => {
  // Ejemplo de reservas
  const reservations = [
    {
      id: 1,
      status: true,
      barName: "Bar La Fiesta",
      date: "2024-03-10",
      time: "19:30",
      partySize: 4,
    },
    {
      id: 2,
      status: false,
      barName: "Club Nocturno Estelar",
      date: "2024-04-15",
      time: "20:00",
      partySize: 2,
    },
    {
      id: 3,
      status: true,
      barName: "Cafetería Delicioso Aroma",
      date: "2024-03-20",
      time: "18:45",
      partySize: 6,
    },
  ];

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

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
          <View style={[styles.card]}>
            <View>
              <View
                style={[
                  styles.statusContainer,
                  {
                    backgroundColor:
                      item.status ? "#d4edda" : "#eee",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.statusText,
                    {
                      color:
                        item.status ? "#28a745" : "#6c757d",
                    },
                  ]}
                >
                  {item.status ? "Confirmada" : "Cancelada"}
                </Text>
              </View>
              <View style={styles.infoContainer}>
                <Text style={styles.barName}>{item.barName}</Text>
                <View style={styles.iconContainer}>
                  <Ionicons name="person" size={14} color="#333" />
                  <Text style={styles.personCount}>{item.partySize}</Text>
                </View>
                <TouchableOpacity
                  style={[styles.detailsButton]}
                  onPress={() => handleDetailsPress(item)}
                >
                  <Text style={styles.detailsButtonText}>Ver Detalles</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.dateContainer}>
              <Text style={styles.dateMonth}>
                {months[parseInt(item.date.split("-")[1], 10) - 1]}
              </Text>
              <Text style={styles.dateDay}>{item.date.split("-")[2]}</Text>
              <Text style={styles.dateTime}>{item.time}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f8f8f8",
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statusContainer: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },
  infoContainer: {
    flex: 1,
    marginTop: 10,
    marginLeft: 3,
    gap: 4,
  },
  barName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  customerName: {
    fontSize: 14,
    color: "#555",
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  personCount: {
    fontSize: 12,
    marginLeft: 5,
  },
  detailsButton: {
    marginTop: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#ccc",
    alignSelf: 'flex-start',
    width: 'auto',
  },
  detailsButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  dateContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    borderLeftWidth: 1,
    borderColor: '#ddd',
    paddingLeft: 14,
  },
  dateMonth: {
    fontSize: 14,
    color: "#333",
  },
  dateDay: {
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
  },
  dateTime: {
    fontSize: 14,
    color: "#333",
  },
});

export default ReservationScreen;
