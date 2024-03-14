import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import ChatCard from "../../components/cards/ChatCard/ChatCard";
import { styles } from "./chatscreen.styles";

const ChatScreen = () => {
  const route = useRoute();
  const { barName } = route.params;
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleSendMessage = () => {
    if (inputText.trim() !== "") {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: inputText, isUser: true },
      ]);
      setInputText("");
    }
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: barName,
      headerBackTitle: " ",
    });
  }, [navigation, barName]);

  const reversedMessages = [...messages].reverse();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 120 : -100}
      >
        <View style={styles.header}></View>
        <FlatList
          data={reversedMessages}
          keyExtractor={(item) => item.id.toString()}
          inverted={true}
          renderItem={({ item }) => (
            <ChatCard isUser={item.isUser} text={item.text}/>
          )}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Escribe un mensaje..."
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={handleSendMessage}
          >
            <Icon name="send" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
