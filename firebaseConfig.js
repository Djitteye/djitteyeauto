// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBMxvASVBSopo3kVzQ3EG_mpwI1XX4K9xs",
  authDomain: "back-das.firebaseapp.com",
  projectId: "back-das",
  storageBucket: "back-das.appspot.com",
  messagingSenderId: "41639094673",
  appId: "YOUR_APP_ID",  // Remplace "YOUR_APP_ID" par l'ID de ton application si disponible
  measurementId: "YOUR_MEASUREMENT_ID"  // Remplace "YOUR_MEASUREMENT_ID" par l'ID de mesure si disponible
};

const app = initializeApp(firebaseConfig);
// Initialiser Firebase Auth avec persistance
const auth = initializeAuth(app, {
  
  
    persistence: getReactNativePersistence(AsyncStorage)
    });

const firestore = getFirestore(app);

export { auth, firestore };
