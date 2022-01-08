import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGElbVf2AXRNwaUsJ6wPEWoTIvYdeTRXA",
  authDomain: "hypr-development.firebaseapp.com",
  projectId: "hypr-development",
  storageBucket: "hypr-development.appspot.com",
  messagingSenderId: "374610008134",
  appId: "1:374610008134:web:13068ff5c3393002089247",
  measurementId: "G-G02F146GTY",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const logOut = async () => {
  console.log("logging out");
  const auth = getAuth();
  await signOut(auth);
};
