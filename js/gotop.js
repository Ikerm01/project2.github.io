document.addEventListener("DOMContentLoaded", function () {
    const goTopButton = document.querySelector('.go-top-container');

    if (goTopButton) {
        goTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    }
});