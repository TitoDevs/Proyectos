import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/Main/MainScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from 'expo-media-library';

const Stack = createStackNavigator();

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [user, setUser] = useState(null);

  // Ejemplo de cómo verificar la autenticación al inicio de la aplicación
  useEffect(() => {
    const checkAuthentication = async () => {
      setUser(false);
    };

    checkAuthentication();
  }, []);

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
