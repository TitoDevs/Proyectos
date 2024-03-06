import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MessageCard from './MessageCard';

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
});

export default MessageScreen;
