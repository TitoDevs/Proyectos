import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/Main/MainScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import ChatScreen from "./screens/Chat/ChatScreen";
import CameraScreen from "./screens/Camara/CameraScreen";
import DetailsOrderScreen from "./screens/DetailsOrderScreen/DetailsOrderScreen";
import MenuScreen from "./screens/Menu/MenuScreen";

const Stack = createStackNavigator();
// TODO Hay que mejorar la lógica.
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
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="DetailsOrder" component={DetailsOrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
