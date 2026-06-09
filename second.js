document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backToFirstPage');
    const nextButton = document.getElementById('goToThirdPage');

    if (backButton) {
        backButton.addEventListener('click', () => {
            window.location.href = '../index.html';
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            window.location.href = '../third.html';
        });
    }
});
