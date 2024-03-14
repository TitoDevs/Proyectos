import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import { styles } from "./menubutton.styles";

function MenuButton(props) {
  return (
    <TouchableOpacity
      style={styles.menuButton}
      onPress={props.onPress}
    >
      <Text style={styles.menuButtonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default MenuButton;
