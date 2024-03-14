import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./homecard.styles";

function HomeCard(props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.image }} style={styles.cardImage} />
      <View style={styles.cardHeader}>
        <Text style={styles.barName}>{props.barName}</Text>
        <Text style={styles.timestamp}>{props.timestamp}</Text>
      </View>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Text style={styles.cardContent}>{props.content}</Text>
    </View>
  );
}

export default HomeCard;
