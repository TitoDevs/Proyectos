import React from "react";
import {
    Text,
    TouchableOpacity,
  } from "react-native";

function PrimaryButton(props) {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <Text style={props.color}>{props.text}</Text>
    </TouchableOpacity>
  );
}

export default PrimaryButton;
