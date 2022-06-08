console.log('bingo!');

const hamburger = document.querySelector('.hamburger');

// Toogle Hamurger
hamburger.onclick = () => {
  hamburger.classList.toggle('hamburger--active');
}