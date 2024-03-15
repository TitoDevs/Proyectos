import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './messagecard.styles';

const MessageCard = (props) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('Chat', { barName: props.barName });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        <Image source={{ uri: props.imageSource }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.barName}>{props.barName}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {props.lastMessage}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageCard;