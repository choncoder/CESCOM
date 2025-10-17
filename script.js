// script.js

const cards = document.querySelectorAll('.world-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const level = card.dataset.level;

    if (level === 'ม.ต้น') {
      window.location.href = 'm-ton.html'; 
    } else {
      alert('คุณเลือก: ' + level + ' (ยังไม่เปิดให้บริการ)');
    }
  });
});