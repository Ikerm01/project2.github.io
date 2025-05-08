document.addEventListener("DOMContentLoaded", function () {
    const goTopButton = document.querySelector('.go-top-container');

    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 100) {
            goTopButton.classList.add('show');
        } else {
            goTopButton.classList.remove('show');
        }
    });
});