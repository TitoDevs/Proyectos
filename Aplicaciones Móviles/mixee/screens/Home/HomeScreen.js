import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  // Ejemplo de publicaciones de comercios
  const posts = [
    { id: 1, barName: 'Bar La Fiesta', title: '¡Nueva promoción!', content: '2x1 en tragos hoy.', timestamp: 'Hace 2 horas', image: '' },
    { id: 2, barName: 'Club Nocturno Estelar', title: 'Evento especial', content: 'Noche de música en vivo este viernes.', timestamp: 'Ayer', image: '' },
    { id: 3, barName: 'Cafetería Delicioso Aroma', title: 'Descuento exclusivo', content: 'Presenta este código y obtén 10% de descuento.', timestamp: 'Hace 3 días', image: '' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.barName}>{item.barName}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
            <Image source={item.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardContent}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9', // Cambiado a un tono más claro
    elevation: 3,
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff', // Cambiado a un tono más claro
  },
  barName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
  },
  cardImage: {
    height: 300,
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: '#ccc'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10, // Cambiado a un tono más brillante
  },
  cardContent: {
    fontSize: 16,
    paddingLeft: 10,
    paddingBottom: 10,
    color: '#555', // Cambiado a un tono más oscuro
  },
});

export default HomeScreen;
