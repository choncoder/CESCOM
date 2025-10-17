// m-ton.js

document.addEventListener('DOMContentLoaded', () => {
    const cescomCards = document.querySelectorAll('.cescom-card');

    cescomCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            window.location.href = `category-detail.html?category=${category}`;
        });
    });
});