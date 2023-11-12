const mobileMenu = document.querySelector('.burger-backdrop');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');
const cartBurgerIcon = document.querySelector('.bag-burger-icon');

const currentPageBurger = window.location.pathname;

// Function to open/close the mobile menu and handle scrolling
const toggleMenu = () => {
    mobileMenu.classList.toggle('is-hidden');
    const isMenuOpen = mobileMenu.classList.contains('is-hidden');

    if (isMenuOpen) {
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;

        // For the mobile menu, if the open page is shopping.html, make the icon in the navigation menu black
        if (currentPageBurger === '/shopping.html') {
            cartBurgerIcon?.classList.add('active-burger-icon');
        }
    } else {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
};

openMenuBtn?.addEventListener('click', toggleMenu);
closeMenuBtn?.addEventListener('click', toggleMenu);
