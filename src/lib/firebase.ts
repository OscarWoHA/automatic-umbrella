import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const app = initializeApp({
    apiKey: "AIzaSyDHurVs1YfOlOrl_5m68fj0aJqxviGaK9k",
    authDomain: "automatic-umbrella-f8be9.firebaseapp.com",
    projectId: "automatic-umbrella-f8be9",
    storageBucket: "automatic-umbrella-f8be9.appspot.com",
    messagingSenderId: "426129742941",
    appId: "1:426129742941:web:feae4d5e0899e7a73c41b4",
    measurementId: "G-JNXCNYH85V",
});

getAnalytics(app);
