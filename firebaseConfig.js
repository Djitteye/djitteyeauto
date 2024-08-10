// firebaseConfig.js
import { initializeApp } from "firebase/app"; 
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyB7t6EtB3b19xVPVw1wg4OWs8FyFRxLkqw",
  authDomain: "das-back-end-10c10.firebaseapp.com",
  projectId: "das-back-end-10c10",
  storageBucket: "das-back-end-10c10.appspot.com",
  messagingSenderId: "959505755129",
  appId: "1:959505755129:web:3f923a996a659a518cab28",
  measurementId: "G-CMQFNJR1XY"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with persistent storage
initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
const firestore = getFirestore(app);

export { app, firestore }; // Make sure to export firestore
