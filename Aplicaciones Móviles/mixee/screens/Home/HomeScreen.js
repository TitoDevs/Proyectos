import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  // Ejemplo de publicaciones de comercios
  const posts = [
    { id: 1, barName: 'Bar La Fiesta', title: '¡Nueva promoción!', content: '2x1 en tragos hoy.', timestamp: 'Hace 2 horas', image: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' },
    { id: 2, barName: 'Club Nocturno Estelar', title: 'Evento especial', content: 'Noche de música en vivo este viernes.', timestamp: 'Ayer', image: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' },
    { id: 3, barName: 'Cafetería Delicioso Aroma', title: 'Descuento exclusivo', content: 'Presenta este código y obtén 10% de descuento.', timestamp: 'Hace 3 días', image: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardHeader}>
              <Text style={styles.barName}>{item.barName}</Text>
              <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
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
    flex: 1
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
    backgroundColor: '#f9f9f9',
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
    fontSize: 16,
    paddingLeft: 10,
    color: '#666',
  },
  cardContent: {
    fontSize: 14,
    padding: 10,
    color: '#888',
  },
});

export default HomeScreen;
