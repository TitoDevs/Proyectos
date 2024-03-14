import React from "react";
import { View, Text } from "react-native";
import { styles } from "./chatcard.styles";

function ChatCard(props) {
  return (
    <View style={props.isUser ? styles.userMessage : styles.otherMessage}>
      <Text>{props.text}</Text>
    </View>
  );
}

export default ChatCard;
