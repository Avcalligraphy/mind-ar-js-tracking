import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: 'AIzaSyAyXn3hYGZjTLVUrGa5fVX-XgifZkqXtpg',
  authDomain: 'webar-609e0.firebaseapp.com',
  databaseURL: 'https://webar-609e0-default-rtdb.firebaseio.com',
  projectId: 'webar-609e0',
  storageBucket: 'webar-609e0.appspot.com',
  messagingSenderId: '436573714098',
  appId: '1:436573714098:web:9bcfefacfb44967df53bab',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
