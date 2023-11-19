import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut, onAuthStateChanged
} from 'firebase/auth';
import { getDatabase, ref, set, child, get } from "firebase/database";
import { onSignIn, onLogOutUser } from './for-authorisation';
import { app } from './firebase';
import Swal from 'sweetalert2';

const auth = getAuth(app);

const openSignForm = document.querySelector('.js-open-signin');
const openSignFormBurger = document.querySelector('.sign-up-btn');
const closeSignForm = document.querySelector('.js-close-signin');
const signInForm = document.querySelector('.js-signin-form');
const signUpButtonLink = document.querySelector('.js-sign-up-btn-form');
const signInButtonLink = document.querySelector('.js-sign-in-btn-form');
const formSignUp = document.querySelector('.container-signup');
const formSignIn = document.querySelector('.container-signin');



openSignForm?.addEventListener('click', toggleForm);
openSignFormBurger?.addEventListener('click', toggleForm);
closeSignForm?.addEventListener('click', toggleForm);

function toggleForm() {
  signInForm?.classList.toggle('is-hidden');
}

// SWITCH BETWEEN SIGN UP AND SIGN IN FORMS

signUpButtonLink?.addEventListener('click', event => {
  event.preventDefault();
  formSignUp?.classList.remove('visually-hidden');
  formSignIn?.classList.add('visually-hidden');
  // @ts-ignore
  event.currentTarget.classList.add('active-btn');
  signInButtonLink?.classList.remove('active-btn');
});

signInButtonLink?.addEventListener('click', event => {
  event.preventDefault();
  formSignUp?.classList.add('visually-hidden');
  formSignIn?.classList.remove('visually-hidden');
  // @ts-ignore
  event.currentTarget.classList.add('active-btn');
  signUpButtonLink?.classList.remove('active-btn');
});
// ========================================================================================
// GET USERS DATA FOR SIGN UP ============================================================
const userProfile = document.querySelector('.user-profile');
const userNameText = document.querySelector('.header-user-name');
const burgerUserTextName = document.querySelector('.burger-us-name');
const navigationHeader = document.querySelector('.header-nav');
const logOutBtn = document.querySelector('.logout-button-overlay');
const logOutBurger = document.querySelector('.logout-btn');

formSignUp?.addEventListener('submit', signUpSubmit);
formSignIn?.addEventListener('submit', signInSumbit);
userProfile?.addEventListener('click', () => logOutBtn?.classList.add('show-logout'));
logOutBtn?.addEventListener('click', onLogOut);
logOutBurger?.addEventListener('click', onLogOut);

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
    updateProfile(auth.currentUser, { displayName: name });

    openSignForm?.classList.add('visually-hidden');
    userProfile?.classList.remove('visually-hidden');
    navigationHeader?.classList.remove('is-hidden');

    // @ts-ignore
    userNameText.textContent = `${name}`;
    // @ts-ignore
    burgerUserTextName.textContent = `${name}`;
    toggleForm();

    // Notification for User Sign Up
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: toast => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: `Welcome, ${name}!`,
    });
  });
}
// ========================================================================
// ========== FUNCTIONS FOR SIGN IN ========================================
function signInSumbit(event) {
  event.preventDefault();
  const formElements = event.target.elements;
  const data = {};
  for (let i = 0; i <= formElements.length - 2; i++) {
    let value = formElements[i].value;
    let key = formElements[i].name;
    data[key] = value;
  }
  whenUserSignIn(data.email, data.password);
}

function whenUserSignIn(email, password) {
  signInWithEmailAndPassword(auth, email, password).then(userCredentials => {
    const user = userCredentials.user;
    // @ts-ignore
    userNameText.textContent = `${user.displayName}`;
    // @ts-ignore
    burgerUserTextName.textContent = `${user.displayName}`;

    openSignForm?.classList.add('visually-hidden');
    userProfile?.classList.remove('visually-hidden');
    navigationHeader?.classList.remove('is-hidden');

    toggleForm();
    // Notification for User Sign Up
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: toast => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: `Welcome, ${user.displayName}!`,
    });
  }).catch (() => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: toast => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: 'error',
        title: `Email or password not found`,
      });
  })
}
// ==================================================================================
// FUNCTION WHEN USER LOG OUT ======================================================

function onLogOut() {
  signOut(auth).then(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: toast => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: `Log Out was successfull`,
    });
  }).catch(() => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'error',
      title: `Ooops, Something go wrong!`,
    });
  });
  location.href = './index.html';
};
// ======================================================================================
function getUserData() {
  const user = auth.currentUser;
  if (user !== null) {
    const userData = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
    }
    return userData;
  }
};
// ==========================================================================================
// Write users books from shopping list to firebase database
export function writeUserShoppingListToDatabase(booksArray) {
  if(!booksArray) {
       const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'error',
      title: `Unknown User!`,
    });
    return;
  }
  const userData = getUserData();
  if(!userData) {
         const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: toast => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'error',
      title: `Unknown User!`,
    });
    return;
  }
  const userId = userData.uid;
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    books: booksArray,
  })
}
// ========================================================================
export function getUsersShoppListFromDatabase() {
  const localStorageKey = 'shoppingList';
  const userData = getUserData();
   if(!userData) {
     return;
   }
   const userId = userData.uid;
   const dbRef = ref(getDatabase());
   get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      const { books: booksArr } = snapshot.val();
      localStorage.setItem(localStorageKey, JSON.stringify(booksArr));
} else {
  const booksArr = [];
  localStorage.setItem(localStorageKey, JSON.stringify(booksArr));
}
}).catch(() => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: toast => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: 'error',
    title: `Error, Error, server not answer!`,
  });
})
}

onAuthStateChanged(auth, user => {
  if (user) {
    const userData = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
    };
    // @ts-ignore
    userNameText.textContent = `${userData.name}`;
    // @ts-ignore
    burgerUserTextName.textContent = `${userData.name}`;
    onSignIn(userData);
  } else {
    onLogOutUser();
  }
})