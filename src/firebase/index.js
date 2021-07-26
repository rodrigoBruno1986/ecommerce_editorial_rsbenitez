import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBotttQTowuAPgHPP77zNvVaKfpOkrxvuA",
  authDomain: "ecommerce-editorial-rsbenitez.firebaseapp.com",
  projectId: "ecommerce-editorial-rsbenitez",
  storageBucket: "ecommerce-editorial-rsbenitez.appspot.com",
  messagingSenderId: "80156100932",
  appId: "1:80156100932:web:8599f3a042ea46e7deaf11",
  measurementId: "G-GNKYMCR51T",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
