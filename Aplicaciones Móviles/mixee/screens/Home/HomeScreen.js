import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { styles } from "./homescreen.styles";
import { getPosts } from "../../services/databaseservice";
import HomeCard from "../../components/cards/HomeCard/HomeCard";

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatlist}
        data={posts}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <HomeCard
              image={item.image}
              barName={item.barName}
              timestamp={item.timestamp}
              title={item.title}
              content={item.content}
            />
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default HomeScreen;