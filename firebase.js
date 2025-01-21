// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";   //yhn hame apne se kuch edition ki haa "app" ki place pa "auth" likh diya or initialization ki gagha auth




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAa6TuKQkzG8PuGICkeXBjAdXQEsl3574A",
  authDomain: "learning-projects-asha.firebaseapp.com",
  projectId: "learning-projects-asha",
  storageBucket: "learning-projects-asha.firebasestorage.app",
  messagingSenderId: "997581604816",
  appId: "1:997581604816:web:2e6c7a3b110a30f3a89bd5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);