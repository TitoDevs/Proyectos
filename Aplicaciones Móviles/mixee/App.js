import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/Main/MainScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';
import ChatScreen from "./screens/Chat/ChatScreen";
import CameraScreen from "./screens/Camara/CameraScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
