import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './homescreen.styles';
import { posts } from './data.test';
import HomeCard from '../../components/cards/HomeCard/HomeCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <HomeCard image={item.image} barName={item.barName} timestamp={item.timestamp} title={item.title} content={item.content} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
