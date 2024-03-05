import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MessageCard = ({ barName, lastMessage, imageSource }) => (
  <View style={styles.card}>
    <Image source={{ uri: imageSource }} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.barName}>{barName}</Text>
      <Text style={styles.lastMessage} numberOfLines={1}>
        {lastMessage}
      </Text>
    </View>
  </View>
);


const MessageScreen = () => (
  <View style={styles.container}>
  <Text style={styles.heading}>Mensajes</Text>
    <MessageCard
      barName="Bar La Fiesta"
      lastMessage="¡Hola! ¿Cómo estás?"
      imageSource="https://www.sillasmesas.es/blog/wp-content/uploads/2023/09/como-limpiar-barra-bar-1024x682.jpg"
    />
    <MessageCard
      barName="Cafetería Acogedora"
      lastMessage="Listo para recibirte. ¿A qué hora pasarás?"
      imageSource="https://colineal.com/cdn/shop/articles/destacado-como-decorar-bar-pequeno-casa-colineal.jpg?v=1696223463"
    />
    <MessageCard
      barName="Pub Nocturno"
      lastMessage="¡Te esperamos esta noche para la fiesta!"
      imageSource="https://www.sillasmesas.es/blog/wp-content/uploads/2019/08/bar-2209813_640.jpg"
    />
  </View>
);


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
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginLeft: 15,
    gap: 10,
  },
  barName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  lastMessage: {
    fontSize: 14,
    color: "#555",
  },
});

export default MessageScreen;
