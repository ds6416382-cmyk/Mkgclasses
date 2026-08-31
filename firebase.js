import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDwC3Q2QmkEkx-0l3-YqizjrW7mEaEdAdc",
  authDomain: "mkg-coaching-classes.firebaseapp.com",
  projectId: "mkg-coaching-classes",
  storageBucket: "mkg-coaching-classes.firebasestorage.app",
  messagingSenderId: "257709307338",
  appId: "1:257709307338:web:5f81578963e92274350b33"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, db, storage, auth };
