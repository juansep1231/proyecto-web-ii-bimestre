// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBq1swhH0X1eTDPv2daktW2HV9NVXUykKA',
  authDomain: 'proyectowebib.firebaseapp.com',
  databaseURL: 'https://proyectowebib-default-rtdb.firebaseio.com',
  projectId: 'proyectowebib',
  storageBucket: 'proyectowebib.appspot.com',
  messagingSenderId: '889748609643',
  appId: '1:889748609643:web:5f2125253a9579f11eaf2e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);
