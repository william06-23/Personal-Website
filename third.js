document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backToSecondPage');

    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = '../Second_Page/second.html';
        });
    }
});