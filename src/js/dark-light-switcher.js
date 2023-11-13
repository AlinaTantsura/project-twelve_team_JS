let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode-toggle');
const logoToggle = document.querySelectorAll('.logo-container');

//check if dark mode is enabled:
// if it's enabled - turn it off;
// if it's disabled - turn it on

const enabledDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', "enabled");
    darkModeToggle.checked = true;
    logoToggle.forEach(logo => {
        logo.classList.toggle('hidden');
    })
};

const disabledDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
    darkModeToggle.checked = false;
    logoToggle.forEach(logo => {
        logo.classList.toggle('hidden');
    })
};

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== "enabled") {
        enabledDarkMode();
        console.log(darkMode);
        console.log(logoToggle[0].classList, logoToggle[1].classList);
} else {
    disabledDarkMode();
        console.log(darkMode);
        console.log(logoToggle[0].classList, logoToggle[1].classList);
}
});

