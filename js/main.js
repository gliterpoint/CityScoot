import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js";

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

    const logoutUsername = document.getElementById('logout-username')
    const authHeader = document.getElementById('auth-header')
    const unAuthheader = document.getElementById('unauth-header')
    const loggedUser = document.getElementById('logged-user')
    const notloggedUser = document.getElementById('not-logged-user')

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed In
            unAuthheader.style.display = 'none'
            loggedUser.innerHTML = "You are currently logged in"
            // Show User Object
            // console.log(user);
        } else {
            // User is signed out
            unAuthheader.style.display = 'block'
            authHeader.style.display = 'none'
            logoutUsername.style.display = 'none'
            notloggedUser.innerHTML = "You are not currently logged in"
        }
    });

    const logoutBtn = document.querySelector('#logout');
    logoutBtn.addEventListener('click', e => {
        e.preventDefault();
        console.log('hello');
        signOut(auth).then(() => {
            alert("User Logged out Successfully")
            window.location = '/'
        }).catch((error) => {
        // An error happened.
        });
    })