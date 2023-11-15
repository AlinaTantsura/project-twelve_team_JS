// @ts-nocheck
const currentPage = window.location.pathname;
const iconBag = document.querySelector('.icon-bag');
const burgerBagIcon = document.querySelector('.bag-burger-icon');
const linkHome = document.querySelector('.header-home');
const linkShopping = document.querySelector('.header-shoplist');
const burgerLinkHome = document.querySelector('.burger-home');
const burgerLinkShopping = document.querySelector('.burger-shoplist');

    const linkPathHome = new URL(linkHome?.href).pathname;
    const linkPathShopp = new URL(linkShopping?.href).pathname;

    if (currentPage === linkPathHome || currentPage.endsWith('/')) { 
        linkHome?.classList.add('active-header');
        burgerLinkHome?.classList.add('active-header');
        linkShopping?.classList.remove('active-header');
        burgerLinkShopping?.classList.remove('active-header');
        iconBag?.classList.remove('active-burger-icon');
        burgerBagIcon?.classList.remove('active-burger-icon');
        
        } else {
            linkHome?.classList.remove('active-header');
            burgerLinkHome?.classList.remove('active-header');
            linkShopping?.classList.add('active-header');
            burgerLinkShopping?.classList.add('active-header');
            iconBag?.classList.add('active-burger-icon');
            burgerBagIcon?.classList.add('active-burger-icon');
        }


