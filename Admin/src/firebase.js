// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK2UehfKn-yOv4wLZs-Dc-dLDatMX-m64",
  authDomain: "eco-flex.firebaseapp.com",
  projectId: "eco-flex",
  storageBucket: "eco-flex.appspot.com",
  messagingSenderId: "816011409866",
  appId: "1:816011409866:web:3fdb5aaa5031ce6f137733",
//   measurementId: "G-L2P4XRY13T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;