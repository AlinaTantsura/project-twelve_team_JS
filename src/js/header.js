// Nav-links styles
const currentPage = window.location.pathname;

function setActivePage(className, currentPage) {
    const navLinks = document.querySelectorAll(`.${className}`);

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPage) {
            link.classList.add('active-header');
        } else {
            link.classList.remove('active-header');

        }
    })
}

setActivePage('js-nav-link', currentPage);

