import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./reservationcard.styles";
import { months } from "../../../utils/utils";

function ReservationCard(props) {
  const [month, day] = props.date ? props.date.split("-") : ["", ""];

  return (
    <View style={styles.card}>
      <View>
        <View
          style={[
            styles.statusContainer,
            {
              backgroundColor: props.status ? "#d4edda" : "#eee",
            },
          ]}
        >
          <Text
            style={[
              styles.statusText,
              {
                color: props.status ? "#28a745" : "#6c757d",
              },
            ]}
          >
            {props.status ? "Confirmada" : "Cancelada"}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.barName}>{props.barName}</Text>
          <View style={styles.iconContainer}>
            <Ionicons name="person" size={14} color="#333" />
            <Text style={styles.personCount}>{props.partySize}</Text>
          </View>
          <TouchableOpacity
            style={[styles.detailsButton]}
            onPress={props.handle}
          >
            <Text style={styles.detailsButtonText}>Ver Detalles</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateMonth}>
          {props.date ? months[parseInt(month, 10) - 1] : ""}
        </Text>
        <Text style={styles.dateDay}>{day}</Text>
        <Text style={styles.dateTime}>{props.time}</Text>
      </View>
    </View>
  );
}

export default ReservationCard;