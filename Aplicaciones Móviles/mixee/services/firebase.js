import { initializeApp } from 'firebase/app';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage

const firebaseConfig = {
    apiKey: "AIzaSyClnN4xdCsM7dHuanI-o-SZ3XLVfDkDg74",
    authDomain: "mixee-b086a.firebaseapp.com",
    databaseURL: "https://mixee-b086a-default-rtdb.firebaseio.com",
    projectId: "mixee-b086a",
    storageBucket: "mixee-b086a.appspot.com",
    messagingSenderId: "47599115603",
    appId: "1:47599115603:web:3418e639c4fbddac4fd5a6",
    measurementId: "G-8E76LPZDL0"
  };

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { auth, signInWithEmailAndPassword, onAuthStateChanged };
