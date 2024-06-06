
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";





 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

 
 const firebaseConfig = {
   apiKey: "AIzaSyBHk3SC7rMD5eOl13FDQxGZMNJNTfYScBs",
   authDomain: "loginnnn-a44e7.firebaseapp.com",
   projectId: "loginnnn-a44e7",
   storageBucket: "loginnnn-a44e7.appspot.com",
   messagingSenderId: "954893313961",
   appId: "1:954893313961:web:d42e6312c3d8994ed146b8"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 //inputs
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;

 //submit button

 const submit = document.getElementById('submit');
 submit.addEventListener("click", function (event) {
  event.preventDefault()
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
 }
)