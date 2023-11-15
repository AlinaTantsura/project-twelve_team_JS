// @ts-nocheck
export function switcherDarklLight() {
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const darkModeBurger = document.querySelector('#dark-mode-toggle-burger');

//check if dark mode is enabled:
// if it's enabled - turn it off;
// if it's disabled - turn it on

const enabledDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', "enabled");
    darkModeToggle.checked = true;
    darkModeBurger.checked = true;
};

const disabledDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
    darkModeToggle.checked = false;
    darkModeBurger.checked = false;
};

if (darkMode === 'enabled') {
    enabledDarkMode();
}

// Add Event Listener for toggle in Header
darkModeToggle?.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
   
    if(darkMode !== 'enabled') {
        enabledDarkMode();
    } else {
        disabledDarkMode();
    }
})

// Add Event Listenet for toggle in Burger menu
darkModeBurger?.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if(darkMode !== 'enabled') {
        enabledDarkMode();
        darkModeBurger.checked = true;
    } else {
        disabledDarkMode();
        darkModeBurger.checked = false;
    }
})
};
switcherDarklLight();