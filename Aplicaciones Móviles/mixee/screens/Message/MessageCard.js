import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MessageCard = ({ barName, lastMessage, imageSource }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('Chat', { barName });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        <Image source={{ uri: imageSource }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.barName}>{barName}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {lastMessage}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default MessageCard;