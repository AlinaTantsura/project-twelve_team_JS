const currentPage = window.location.pathname;
const iconBag = document.querySelector('.icon-bag');

function setActivePage(className, currentPage) {
    const navLinks = document.querySelectorAll(`.${className}`);

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        // if (linkPath === currentPage || currentPage === '/' && linkPath === '/index.html') {
        if (currentPage.endsWith(linkPath) || currentPage.endsWith('/') && linkPath === '/index.html') {
            link.classList.add('active-header');
            // if (currentPage === '/shopping.html') {
            if (currentPage.endsWith('/shopping.html')) {
                iconBag?.classList.add('active-burger-icon');
            }
        } else {
            link.classList.remove('active-header');

        }
    })
}

setActivePage('js-nav-link', currentPage);

