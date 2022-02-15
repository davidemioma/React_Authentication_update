import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "@firebase/auth";

const AuthContext = React.createContext({
  currentUser: "",
  signUp: (email, password) => {},
  login: (email, password) => {},
  logout: () => {},
  resetPassword: (email) => {},
  updateEmail: (email) => {},
  updatePassword: (password) => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthContextprovider = (props) => {
  const [currentUser, setCurrentUser] = useState();

  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function updateEmailHandler(email) {
    return updateEmail(auth.currentUser, email);
  }

  function updatePasswordHandler(password) {
    return updatePassword(auth.currentUser, password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    login,
    logout,
    resetPassword,
    updateEmail: updateEmailHandler,
    updatePassword: updatePasswordHandler,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
};
