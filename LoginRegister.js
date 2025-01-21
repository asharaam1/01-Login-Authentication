// Placeholder for Firebase authentication
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

import { auth } from "./firebase.js";     //es line ma import kia ha hamane firebase.js ki file se



//! Register Form
const registerForm = document.getElementById('register-form');
const name = document.querySelector('#register-name')
const email = document.getElementById('register-email');
const password = document.getElementById('register-password');
const p = document.querySelector('.reg-msg');

registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting
    p.innerHTML = ''
    // console.log('Email:', email.value);
    // console.log('Password:', password.value);

    createUserWithEmailAndPassword(auth, email.value, password.value, name.value)
        .then((userCredential) => {
            const user = userCredential.user;
            // console.log(user);
            alert('Register Success')
            email.value = ''
            password.value = ''
            name.value = ''

        })
        .catch((error) => {
            const errorMessage = error.message;
            // console.log(errorMessage);
            p.innerHTML = errorMessage
            email.value = ''
            password.value = ''
            name.value = ''
            alert('There is an error')

        });
});



//! Login Form
const loginForm = document.querySelector("#login-form");
const loginEmail = document.querySelector("#login-email");
const loginPassword = document.querySelector("#login-password");
const logP = document.querySelector('.log-msg');

loginForm.addEventListener("submit", event => {
    event.preventDefault();
    // console.log(loginEmail.value);
    // console.log(loginPassword.value);
    logP.innerHTML = ''

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('Login Success')
            window.location = "index.html"
        })
        .catch((error) => {
            const errorMessage = error.message;
            logP.innerHTML = errorMessage
            alert('There is an error')

        });

})



//! Register By Google
const provider = new GoogleAuthProvider();
const googleBtn = document.querySelector("#googleBtn");

googleBtn.addEventListener("click", () => {
    console.log('google called');
    p.innerHTML = ''

    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            // console.log(user);
            alert('Register Success')
        }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            alert('There is an error')
        });

})