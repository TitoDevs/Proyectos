import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Importa el icono que desees

const ChatScreen = () => {
  const route = useRoute();
  const { barName } = route.params;
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const flatListRef = useRef(null);

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={Platform.OS === "ios" ? 120 : -100}
      >
        <View style={styles.header}></View>
        <FlatList
          style={styles.chat}
          data={messages}
          contentContainerStyle={{ justifyContent: 'flex-end' }}
          keyExtractor={(item) => item.id.toString()}
          inverted={true}
          renderItem={({ item }) => (
            <View
              style={item.isUser ? styles.userMessage : styles.otherMessage}
            >
              <Text>{item.text}</Text>
            </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  chat: {
    flex: 1,
    backgroundColor: 'black',
    alignContent: 'flex-end'
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C5",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  otherMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#E0E0E0",
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  sendButton: {
    marginLeft: 12,
    padding: 10,
    backgroundColor: "tomato",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ChatScreen;
