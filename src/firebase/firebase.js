// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyAst0tK9ItiDjEXC8JupSnUMslrXrEH_Gs",
//   authDomain: "dragonfly-42.firebaseapp.com",
//   projectId: "dragonfly-42",
//   storageBucket: "dragonfly-42.appspot.com",
//   messagingSenderId: "196881587271",
//   appId: "1:196881587271:web:a4b72742a4d66fb4a42562",
//   measurementId: "G-4K8CHX8XWJ",
// };


const firebaseConfig = {

  apiKey: "AIzaSyAQZOG8fgDUARu4k10zAuO6pKOzX2bjaJo",

  authDomain: "not-today-mf.firebaseapp.com",

  projectId: "not-today-mf",

  storageBucket: "not-today-mf.appspot.com",

  messagingSenderId: "325899613029",

  appId: "1:325899613029:web:d1221a95863a6f8fbd678c",

  measurementId: "G-2P9WGMXCV0"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth, analytics };
