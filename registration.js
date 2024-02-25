import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJWpmzwkmmOTZPYWSLOKnbDk-zxC05BW8",
    authDomain: "bqfp-86e51.firebaseapp.com",
    databaseURL: "https://bqfp-86e51-default-rtdb.firebaseio.com",
    projectId: "bqfp-86e51",
    storageBucket: "bqfp-86e51.appspot.com",
    messagingSenderId: "635206542764",
    appId: "1:635206542764:web:2d4b2328e2e1d5ec8e0609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//signUp button
const signUp = document.getElementById("signUp");
signUp.addEventListener("click", function(event) {
    event.preventDefault();

    //input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Creating Account...");
            window.location.href = "dashboard.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
    });
})

// Log In Button
const logIn = document.getElementById("logIn");
logIn.addEventListener("click", function(event) {
    event.preventDefault();

    //input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("Loging In...");
            window.location.href = "dashboard.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
    });
})