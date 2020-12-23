const initRadio = () => {
  const radio = document.querySelector('.radio');
  const radioCoverImg = document.querySelector('.radio-cover__img');
  const radioNavigation = document.querySelector('.radio-navigation');
  const radioHeader = document.querySelector('.radio-header__big');
  const radioStop = document.querySelector('.radio-stop');

  const toggleIcon = () => {
    if (audio.paused) {
      radio.classList.add('play');
      radioStop.classList.add('fa-pause');
      radioStop.classList.remove('fa-play');
    } else {
      radio.classList.remove('play');
      radioStop.classList.remove('fa-pause');
      radioStop.classList.add('fa-play');
    }
  }
  radioStop.style.display = 'none';

  const audio = new Audio();
  audio.type = 'audio/aac';

  radioNavigation.addEventListener('change', (e) => {
    const { target } = e;
    const parent = target.closest('.radio-item');
    const title = parent.querySelector('.radio-name').textContent;
    const img = parent.querySelector('.radio-img').src;
    radioHeader.textContent = title;
    radioCoverImg.src = img;
    audio.src = target.dataset.radioStation;
    audio.volume = 0.2;
    audio.play();
    radioStop.disabled = false;
    radioStop.style.display = 'block';
    radio.classList.add('play');
  })

  radioStop.addEventListener('click', () => {
    toggleIcon();
    audio.paused ? audio.play() : audio.pause();
  });

}

export default initRadio;