
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDpTBHzsP4J8i1BcZWYZrFHSF9_nm6c5fM",
    authDomain: "photographywebsite-68f4e.firebaseapp.com",
    projectId: "photographywebsite-68f4e",
    storageBucket: "photographywebsite-68f4e.appspot.com",
    messagingSenderId: "278658144895",
    appId: "1:278658144895:web:fb2cfb0ae63c7ba0723d4a",
    measurementId: "G-0NFN1QKT9P"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
