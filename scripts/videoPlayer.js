const initVideo = () => {
  const videoPlayer = document.querySelector('.video-player');
  const videoButtonPlay = document.querySelector('.video-button__play');
  const videoButtonStop = document.querySelector('.video-button__stop');
  const videoProgress = document.querySelector('.video-progress');
  const videoTimePassed = document.querySelector('.video-time__passed');
  const videoTimeTotal = document.querySelector('.video-time__total');

  const togglePlay = () => {
    if (videoPlayer.paused) {
      videoPlayer.play();
      videoPlayer.volume = 0.05;
      videoButtonPlay.classList.add('fa-pause');
      videoButtonPlay.classList.remove('fa-play');
    } else {
      videoPlayer.pause();
      videoButtonPlay.classList.add('fa-play');
      videoButtonPlay.classList.remove('fa-pause');
    }
  }

  const stop = () => {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoButtonPlay.classList.add('fa-play');
    videoButtonPlay.classList.remove('fa-pause');
  }

  videoPlayer.addEventListener('click', togglePlay);
  videoButtonPlay.addEventListener('click', togglePlay);
  videoButtonStop.addEventListener('click', stop);

  videoPlayer.addEventListener('timeupdate', () => {
    const { currentTime, duration } = videoPlayer;
    const totalMin = Math.floor(duration / 60);
    const totalSec = Math.floor(duration % 60);

    videoProgress.value = (currentTime / duration) * 100;
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);
    const addZero = (num) => num < 10 ? `0${num}` : num;

    videoTimePassed.textContent = `${addZero(minutes)}:${addZero(seconds)}`;
    videoTimeTotal.textContent = `${addZero(totalMin)}:${addZero(totalSec)}`;
  });

  videoProgress.addEventListener('change', () => {
    const { duration } = videoPlayer;
    const { value } = videoProgress;
    videoPlayer.currentTime = (duration * value) / 100;
  })

}

export default initVideo;