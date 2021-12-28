import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBz4E79dM4vWEGzCrmEmcCq7kdwnndHHfc",
  authDomain: "grocery-website-71de4.firebaseapp.com",
  projectId: "grocery-website-71de4",
  storageBucket: "grocery-website-71de4.appspot.com",
  messagingSenderId: "1038770796785",
  appId: "1:1038770796785:web:a1de6b67e211c6b8e15150",
  measurementId: "G-MK85G62PTJ"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

// Custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}