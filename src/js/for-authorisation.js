import { getUsersShoppListFromDatabase } from "./sign-in";

// html elements for mobile
const logoutBurger = document.querySelector('.logout-btn-container');
const signUpBurger = document.querySelector('.sign-up-container');
const userProfileBurger = document.querySelector('.burger-user');
const userNameBurger = document.querySelector('.header-user-name');
const burgerNavigation = document.querySelector('.burger-nav');

// html elements for header
const userProfile = document.querySelector('.user-profile');
const userNameText = document.querySelector('.header-user-name');
const navigationHeader = document.querySelector('.header-nav');
const openSignForm = document.querySelector('.js-open-signin');

export function onSignIn(userData) {
    signUpBurger?.classList.add('visually-hidden');
    userProfileBurger?.classList.remove('visually-hidden');
    logoutBurger?.classList.remove('visually-hidden');
    burgerNavigation?.classList.remove('is-hidden');
    // @ts-ignore
    userNameBurger.textContent = `${userData.name}`;

    openSignForm?.classList.add('visually-hidden');
    userProfile?.classList.remove('visually-hidden');
    navigationHeader?.classList.remove('is-hidden');

    // @ts-ignore
    userNameText.textContent = `${userData.name}`;
    getUsersShoppListFromDatabase();
}

export function onLogOutUser() {
    signUpBurger?.classList.remove('visually-hidden');
    userProfileBurger?.classList.add('visually-hidden');
    burgerNavigation?.classList.add('is-hidden');
    logoutBurger?.classList.add('visually-hidden');

    userProfile?.classList.add('visually-hidden');
    navigationHeader?.classList.add('is-hidden');
    openSignForm?.classList.remove('visually-hidden');

}

