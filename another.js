// Placeholder for Firebase authentication
// import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// import { auth } from "./firebase.js";     //es line ma import kia ha hamane firebaseconfig.js ki file se


const loginForm = document.getElementById('login-form');
// const email = document.getElementById('login-email');
// const password = document.getElementById('login-password');
// const p = document.querySelector('.err-msg')


loginForm.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent form from submitting

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    console.log('Email:', email.value);
    console.log('Password:', password.value);

}); 



function showLogin() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('register-form').classList.remove('active');
}

function showRegister() {
    document.getElementById('register-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
}





