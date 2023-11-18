
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

// // import firebase from "firebase/compat/app"; 
// import 'firebase/database';
// import 'firebase/storage';
// import 'firebase/messaging';

// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// // Посилання на об'єкт клієнта
// var currentUser = "";
// // Посилання на унікальний id клієнта в базі
// var currentUserId = "";
const auth = getAuth();

const openSignForm = document.querySelector('.js-open-signin');
const closeSignForm = document.querySelector('.js-close-signin');
const signInForm = document.querySelector('.js-signin-form');
const signUpButtonLink = document.querySelector('.js-sign-up-btn-form');
const signInButtonLink = document.querySelector('.js-sign-in-btn-form');
const formSignUp = document.querySelector('.container-signup');
const formSignIn = document.querySelector('.container-signin');


openSignForm?.addEventListener('click', toggleForm);
closeSignForm?.addEventListener('click', toggleForm);

function toggleForm() {
    signInForm?.classList.toggle('is-hidden');
}

// SWITCH BETWEEN SIGN UP AND SIGN IN FORMS

signUpButtonLink?.addEventListener('click', (event) => {
    event.preventDefault();
    formSignUp?.classList.remove('visually-hidden');
    formSignIn?.classList.add('visually-hidden');
    // @ts-ignore
    event.currentTarget.classList.add('active-btn');
    signInButtonLink?.classList.remove('active-btn');

})

signInButtonLink?.addEventListener('click', (event) => {
    event.preventDefault();
    formSignUp?.classList.add('visually-hidden');
    formSignIn?.classList.remove('visually-hidden');
     // @ts-ignore
     event.currentTarget.classList.add('active-btn');
     signUpButtonLink?.classList.remove('active-btn');
})
// ========================================================================================
// GET USERS DATA FOR SIGN UP ============================================================
const userProfile = document.querySelector('.user-profile');
const userNameText = document.querySelector('.header-user-name');

formSignUp?.addEventListener('submit', signUpSubmit);

// get new user data from Sign Up form
function signUpSubmit(event) {
    event.preventDefault();
    const formElements = event.target.elements;
    const data = {};
    for (let i = 0; i <= formElements.length - 2; i++) {
        let value = formElements[i].value;
        let key = formElements[i].name;
        data[key] = value;
    }
    const makeName = data.name.trim();

    whenUserSignUp(makeName, data.email, data.password);
}

function whenUserSignUp(name, email, password) {
    createUserWithEmailAndPassword(auth, email, password).then(() => {
   // @ts-ignore
   updateProfile(auth.currentUser, {displayName: name});
   openSignForm?.classList.add('visually-hidden');
   userProfile?.classList.remove('visually-hidden');
   // @ts-ignore
   userNameText.textContent = `${name}`;
   toggleForm();

// Notification for User Sign Up
   const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: `Welcome, ${name}!`,
  });
})
}


// //  Отримання посилання на базу данних 
// const database = getDatabase(app);

// // Отримання посилання на відкриту сесію 
// const auth = getAuth();
// console.log(auth);
// // createUserWithEmailAndPassword(auth, email, password);
// // createUserWithEmailAndPassword(auth, "anton@ukr.net", "asdfghj");
// // GET Users info name
// const txtName = document.getElementById('user-name');
// // GET Users info e-mail
// const txtEmail = document.getElementById('user-email');
// // GET Users info password
// const txtPassword = document.getElementById('user-password');
// // Посилання на кнопку Login
// const btnLogin    = document.getElementById('btnLogin');
// // const btnSignUp   = document.getElementById('btnSignUp');
// // const btnLogout   = document.getElementById('btnLogout');

// //Add login event
// btnLogin.addEventListener('click', e =>{
//   "use strict";
//     const email = txtEmail.value;
//     const pass = txtPassword.value;
//      // Sign in
//     const promise = signInWithEmailAndPassword(auth, email, pass)
//         .then((userCredential) => {
//     // Signed in 
//             const user = userCredential.user;
//     //  Посилання на об'єкт клієнта       
//             currentUser = user;
//     //  Унікальний код клієнта в базі Firebase       
//             currentUserId = user.uid;
//             alert(`Успіх. Код клієнта ${currentUserId}`)
//             // console.log(user);
//             // console.log(user.uid);
//             // console.log(currentUserId);
//     // Функція відключення видимості модального вікна        
//          toggleModal();

//     // ...
//   });
      
//   promise.catch(e => alert(e.message));  //  console.log(e.message)

// });


// // Реєстрація нового користувача
// async function registration(auth, email, password) {
//     const data = await createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed up 
//                 const user = userCredential.user;
//                 // ...
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 alert(errorMessage);
            
//             })
//     };

// // // Вхід в свій аккаунт
// // async function login(auth, email, password) {
// //            try {
// //                const data = await signInWithEmailAndPassword(auth, email, password);
// //                console.log(data.user.uid);
// //            } catch (error) {
// //                console.log(error.message);
// //                throw error;
// //            }
// // };

// // // Запис інформації користувача в базу
// // async function newClient(newClinet) {
// //            try {
// //                const addClient = await firebase.database().ref('clients').push(newClinet);
// //                console.log(addClient);
// //            } catch (error) {
// //                console.log(error.message);
// //                throw error;
// //            }
// // };