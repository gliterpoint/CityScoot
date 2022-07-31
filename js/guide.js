import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";
    
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

    const preObject = document.getElementById('object');
    const dbRef = ref(getDatabase());
    get(child(dbRef, `guides/`)).then((snapshot) => {
    if (snapshot.exists()) {
        const keys = Object.values(snapshot.val())
        keys.sort((a, b) => {
            if (a.lastname < b.lastname) {
                return -1;
            }
            else if (a.lastname > b.lastname) {
                return 1;
            }
            return 0;
        });
        var html = ""
        keys.map(key => {
            if (key.bluebadge == 'Yes') {
               html += `
               <div class="col-md-5">
                    <div class="card">
                        <img class="card-img-top" src="../img/guide-placeholder-image.jpg" alt="Card image"
                            style="width: 100%" />
                        <div class="card-body">
                            <h4 class="card-title">Name: ${key.firstname} ${key.lastname}</h4>
                            <p class="card-text"><b> Age:</b> ${key.age}</p>
                            <p class="card-text">
                                <b> Tours: </b>${key.tours}
                            </p>
                            <p class="card-text">
                                <b> Occupation: </b>${key.occupation}
                            </p>
                            <p class="card-text"><b> Blue Badge:</b> ${key.bluebadge}.</p>
                        </div>
                    </div>
                </div>`  
            }
        })
        // console.log(keys);
        preObject.innerHTML = html
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });

console.dir(document);