let scrollUpBtn = document.querySelector('.scroll-up')
let scrollUpSpan = document.querySelector('.scroll-up-span')
let ShowBtn = false
window.addEventListener("scroll", showScrollButton)

scrollUpBtn.addEventListener("click", scrollToTop)

function showScrollButton() {
    if (window.scrollY > 800 && ShowBtn === false){
        scrollUpBtn.style.visibility = "visible"
        scrollUpSpan.style.visibility = "visible"
        scrollUpBtn.style.opacity = 1
        scrollUpSpan.style.opacity = 1
    }
    else {
        scrollUpBtn.style.visibility = "hidden"
        scrollUpSpan.style.visibility = "hidden"
        scrollUpBtn.style.opacity = 0 
        scrollUpSpan.style.opacity = 0
    }
}

function scrollToTop() {
    if (window.scrollY !== 0) {
        smoothScrollTo(0, 500)
        ShowBtn = true
    }
}

function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const distance = targetPosition - startPosition;
    let startTime = null;
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutCubic(t) {
        if(t === 1){ShowBtn = false}
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    requestAnimationFrame(animation);
}

