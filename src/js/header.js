const currentPage = window.location.pathname;
const iconBag = document.querySelector('.icon-bag');

function setActivePage(className, currentPage) {
    const navLinks = document.querySelectorAll(`.${className}`);

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        console.log(currentPage.endsWith('/'))
    if (currentPage.endsWith(linkPath) || currentPage.endsWith('/') && linkPath === '/index.html') { 
        link.classList.add('active-header');
            if (currentPage.endsWith('/shopping.html')) {
                iconBag?.classList.add('active-burger-icon');
            }
        } else {
            link.classList.remove('active-header');

        }
    })
}

setActivePage('js-nav-link', currentPage);

