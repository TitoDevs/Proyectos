import React from 'react';
import { View, Text, FlatList } from 'react-native';
import MessageCard from '../../components/cards/MessageCard/MessageCard';
import { styles } from './messagescreen.styles';
import { chats } from './data.test';

const MessageScreen = () => (
  <View style={styles.container}>
  <Text style={styles.heading}>Mensajes</Text>
  <FlatList
      data={chats}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <MessageCard
          barName={item.barName}
          lastMessage={item.lastMessage}
          imageSource={item.imageSource}
        />
      )}
    />
  </View>
);

export default MessageScreen;
