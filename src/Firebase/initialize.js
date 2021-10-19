import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.configure";

const initializeAuth = () => {
  return initializeApp(firebaseConfig);
};

export default initializeAuth;
