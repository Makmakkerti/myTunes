import initRadio from './radioPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');

const removeActiveClass = (index) => {
  playerBtn.forEach((btn, i) => {
    if (index !== i) {
      btn.classList.remove('active');
      playerBlock[i].classList.remove('active');
    }
  });
};

playerBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    btn.classList.add('active');
    playerBlock[index].classList.add('active');
    removeActiveClass(index);
  });
});

initRadio();