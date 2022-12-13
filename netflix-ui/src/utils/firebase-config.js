import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_LhLA2L4x4Ig0NTJNvcoJ0I80fv_WOUI",
  authDomain: "moviesflix-3dd0f.firebaseapp.com",
  projectId: "moviesflix-3dd0f",
  storageBucket: "moviesflix-3dd0f.appspot.com",
  messagingSenderId: "426191093881",
  appId: "1:426191093881:web:b238654dc68439351654a8",
  measurementId: "G-12WQRFL3GE"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
