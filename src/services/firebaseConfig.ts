// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUPhVK1A6OyFfZjegzH-AcjubeZS5WWKs",
  authDomain: "plantparadise-47ddd.firebaseapp.com",
  projectId: "plantparadise-47ddd",
  storageBucket: "plantparadise-47ddd.appspot.com",
  messagingSenderId: "1066687651303",
  appId: "1:1066687651303:web:c8cf7da2d4e0a3c8737142",
  measurementId: "G-YS0S7YW4CD",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
