
import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app"; 
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";
// Посилання на об'єкт клієнта
var currentUser = "";
// Посилання на унікальний id клієнта в базі
var currentUserId = "";

const refs = {
      // кнопка відкриття модального вікна
    openModalBtn: document.querySelector("[data-modal-open]"), 
    // Кнопка закриття модального вікна (хрестик)
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
// Прослуховувач на відкриття модалки
refs.openModalBtn.addEventListener("click", toggleModal);
  // Прослуховувач на закриття модалки
  refs.closeModalBtn.addEventListener("click", toggleModal);
    // Функція переключення режимів видимості/невидимості модального вікна  
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

// Об'єкт параметрів для ініціалізації Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCIWoWX3xYdjXi4GE7U7N6BsSjhJuVC8VQ",
    authDomain: "project-twelve-team-js.firebaseapp.com",
    databaseURL: "https://project-twelve-team-js-default-rtdb.firebaseio.com",
    projectId: "project-twelve-team-js",
    storageBucket: "project-twelve-team-js.appspot.com",
    messagingSenderId: "971706024036",
    appId: "1:971706024036:web:abe28a9d8a8aa3aac65f71",
    measurementId: "G-KM0428PPE7"
  };

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
//  Отримання посилання на базу данних 
const database = getDatabase(app);

// Отримання посилання на відкриту сесію 
const auth = getAuth();
console.log(auth);
// createUserWithEmailAndPassword(auth, email, password);
// createUserWithEmailAndPassword(auth, "anton@ukr.net", "asdfghj");
// GET Users info name
const txtName = document.getElementById('user-name');
// GET Users info e-mail
const txtEmail = document.getElementById('user-email');
// GET Users info password
const txtPassword = document.getElementById('user-password');
// Посилання на кнопку Login
const btnLogin    = document.getElementById('btnLogin');
// const btnSignUp   = document.getElementById('btnSignUp');
// const btnLogout   = document.getElementById('btnLogout');

//Add login event
btnLogin.addEventListener('click', e =>{
  "use strict";
    const email = txtEmail.value;
    const pass = txtPassword.value;
     // Sign in
    const promise = signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
    // Signed in 
            const user = userCredential.user;
    //  Посилання на об'єкт клієнта       
            currentUser = user;
    //  Унікальний код клієнта в базі Firebase       
            currentUserId = user.uid;
            alert(`Успіх. Код клієнта ${currentUserId}`)
            // console.log(user);
            // console.log(user.uid);
            // console.log(currentUserId);
    // Функція відключення видимості модального вікна        
         toggleModal();

    // ...
  });
      
  promise.catch(e => alert(e.message));  //  console.log(e.message)

});


// Реєстрація нового користувача
async function registration(auth, email, password) {
    const data = await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            
            })
    };

// // Вхід в свій аккаунт
// async function login(auth, email, password) {
//            try {
//                const data = await signInWithEmailAndPassword(auth, email, password);
//                console.log(data.user.uid);
//            } catch (error) {
//                console.log(error.message);
//                throw error;
//            }
// };

// // Запис інформації користувача в базу
// async function newClient(newClinet) {
//            try {
//                const addClient = await firebase.database().ref('clients').push(newClinet);
//                console.log(addClient);
//            } catch (error) {
//                console.log(error.message);
//                throw error;
//            }
// };