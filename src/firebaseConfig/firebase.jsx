
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";
  
const firebaseConfig = {
  apiKey: "AIzaSyAu4Hu2EiX4_yRnnxfkqiQBAiNZelZTtrA",
  authDomain: "finanza-efaa2.firebaseapp.com",
  databaseURL: "https://finanza-efaa2-default-rtdb.firebaseio.com",
  projectId: "finanza-efaa2",
  storageBucket: "finanza-efaa2.appspot.com",
  messagingSenderId: "444547392198",
  appId: "1:444547392198:web:3d7b1f983759dbca246dc7",
  measurementId: "G-JHXJW0TEP0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);