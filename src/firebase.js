import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyANHqvJ4aDXVJBOjIGI2WeUJsdNVngTTrM",
  authDomain: "auth-development-824f1.firebaseapp.com",
  projectId: "auth-development-824f1",
  storageBucket: "auth-development-824f1.appspot.com",
  messagingSenderId: "391290395225",
  appId: "1:391290395225:web:5d5da733f800f7d362af48",
});

export const auth = getAuth(app);

export default app;
