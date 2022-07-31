import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

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
    
    const loginBtn = document.querySelector('#login_btn');
    loginBtn.addEventListener('click', e => {
    e.preventDefault();

    const loginEmail = document.querySelector('#login_email').value;
    const loginPassword = document.querySelector('#login_password').value;

    if(loginEmail == '' || loginPassword == ''){
        alert("Both Fields Should be Filled")
        return false;
    }
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then(userCredential => {
            console.log('Logged in user!');
            const user = userCredential.user;
            console.log(userCredential);
            console.log(user);
            window.location = '/'
        })
        .catch(error => {
            console.log(error.message);
            alert("User not Found or Registered")
        })
    });

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            console.log(user);
        } else {
            // User is signed out
            // ...
        }
    });