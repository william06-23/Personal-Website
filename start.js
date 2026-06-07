document.addEventListener('DOMContentLoaded', () => {
    const findOutMoreButton = document.querySelector('.find-out-more-button');
    if (findOutMoreButton) {
        findOutMoreButton.addEventListener('click', () => {
            window.location.href = '../second.html';
        });
    }
});
