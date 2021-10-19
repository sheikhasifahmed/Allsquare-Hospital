import initializeAuth from "./initialize";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuth();

function useFirebase() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();

  const signWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  function registerWithEmail(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function loginWithEmail(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);

  return {
    user,
    signWithGoogle,
    registerWithEmail,
    loginWithEmail,
    logOut,
    isLoading,
  };
}

export default useFirebase;
