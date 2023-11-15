const openBurgerBtn = document.querySelector('.js-open-menu');
const closeBurgerBtn = document.querySelector('.js-close-menu');
const burgerMenu = document.querySelector('.burger-backdrop');
const cartBurgerIcon = document.querySelector('.bag-burger-icon');

const currentPageBurger = window.location.pathname;

// Function what open / close burger menu and blocked scroll
function openCloseBurger() {
    const isMenuClose = burgerMenu?.classList.contains('is-hidden');
    if(isMenuClose) {
        burgerMenu?.classList.remove('is-hidden');
        // document.body.style.position = 'fixed';
        // document.body.style.top = `-${window.scrollY}px`;

        // For burger menu if open page shopping.html icon in navigation menu should be black
        if(currentPageBurger.endsWith('/shopping.html')) {
            cartBurgerIcon?.classList.add('active-burger-icon');
        }
    } else {
        burgerMenu?.classList.add('is-hidden');
        // const scrollY = document.body.style.top;
        // document.body.style.position = '';
        // document.body.style.top = '';
        // window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
}

openBurgerBtn?.addEventListener('click', openCloseBurger);
closeBurgerBtn?.addEventListener('click', openCloseBurger);