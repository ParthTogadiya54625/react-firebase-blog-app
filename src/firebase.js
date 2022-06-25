import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: "AIzaSyBuHrDFzdk5r4e0SsuBwNTFFSjoqXzZrPY",
  // authDomain: "react-blogs-app-edcc9.firebaseapp.com",
  // projectId: "react-blogs-app-edcc9",
  // storageBucket: "react-blogs-app-edcc9.appspot.com",
  // messagingSenderId: "493290048885",
  // appId: "1:493290048885:web:3648c4d97e69e95dec573c",
  apiKey: "AIzaSyBHgcZVV2sqc2pRv2u1MnW3jckXlogFl4A",
  authDomain: "blog-react-app-35d96.firebaseapp.com",
  projectId: "blog-react-app-35d96",
  storageBucket: "blog-react-app-35d96.appspot.com",
  messagingSenderId: "193277501301",
  appId: "1:193277501301:web:d6dd020de37f5499197d3c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };