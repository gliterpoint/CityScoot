import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyAWc-0zAHbaKnQmAAX03aB7DFICOzNlVEA",
        authDomain: "cityscoot-f7eb7.firebaseapp.com",
        databaseURL: "https://cityscoot-f7eb7-default-rtdb.firebaseio.com",
        projectId: "cityscoot-f7eb7",
        storageBucket: "cityscoot-f7eb7.appspot.com",
        messagingSenderId: "630663526304",
        appId: "1:630663526304:web:b15850f4bf32ef64c316c5",
        measurementId: "G-41LZZ6T8YP"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);   
    const auth = getAuth();
    
    const registerBtn = document.querySelector('#registerBtn');
    registerBtn.addEventListener('click', e => {
        e.preventDefault();

        const registerEmail = document.getElementById('registerEmail').value;
        const registerPassword = document.getElementById('registerPassword').value;

        if (registerPassword == '' || registerEmail == '') {
            alert("Both Fields Should be Filled")
            return false;
        }
        if (registerPassword.length < 6) {
            alert("Password should be at least 6 characters")
            return false;
        }
        createUserWithEmailAndPassword(auth, registerEmail, registerPassword).then(cred => {
            window.location = 'login.html'
        });
    });