let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkModeBurger = document.querySelector('#dark-mode-toggle-burger');
const logoLight = document.querySelector('.logo-light');
const logoDark = document.querySelector('.logo-dark');

//check if dark mode is enabled:
// if it's enabled - turn it off;
// if it's disabled - turn it on

const enabledDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', "enabled");
    // @ts-ignore
    darkModeToggle.checked = true;

    // change logo
    logoLight?.classList.add('visually-hidden');
    logoDark?.classList.remove('visually-hidden');
};

const disabledDarkMode = () => {
    document.body.classList.remove('darkmode');
    // @ts-ignore
    localStorage.setItem('darkMode', null);
    // @ts-ignore
    darkModeToggle.checked = false;

    // change logo
    logoLight?.classList.remove('visually-hidden');
    logoDark?.classList.add('visually-hidden');
};

if (darkMode === 'enabled') {
    enabledDarkMode();
}

// Add Event Listener for toggle in Header
darkModeToggle?.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
   
    if(darkMode !== 'enabled') {
        enabledDarkMode();
        // @ts-ignore
        darkModeBurger.checked = true;
    } else {
        disabledDarkMode();
        // @ts-ignore
        darkModeBurger.checked = false;
    }
})

// Add Event Listenet for toggle in Burger menu
darkModeBurger?.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enabledDarkMode();
        // @ts-ignore
        darkModeBurger.checked = true;
    } else {
        disabledDarkMode();
        // @ts-ignore
        darkModeBurger.checked = false;
    }
})