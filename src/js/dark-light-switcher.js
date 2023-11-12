let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const logoToggle = document.querySelectorAll('.logo-container');

//check if dark mode is enabled:
// if it's enabled - turn it off;
// if it's disabled - turn it on

const enabledDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', "enabled");
};

const disabledDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
};
// Розібратись з привязкою із зміною світча до зміни кольорів.
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== "enabled") {
        enabledDarkMode();
        console.log(darkMode);
        // Не вірно змінюється лого-мод.
        logoToggle.forEach(logo => {
            if (logo.classList.contains('logo-light')) {
                logo.classList.toggle('hidden-header')
            } else {
                logo.classList.toggle('hidden-header');
            }
        })
    } else {
        disabledDarkMode();
        console.log(darkMode);
        logoToggle.forEach(logo => {
            if (logo.classList.contains('logo-dark')) {
                logo.classList.toggle('hidden-header')
            } else {
                logo.classList.toggle('hidden-header');
            }
        })
    }
})