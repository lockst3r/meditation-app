const app = () => {
  const audioElem = document.querySelector(".player__song");
  const playElem = document.querySelector(".player__image-play");
  const outlineElem = document.querySelector(".player__moving-outline circle");
  const videoElem = document.querySelector(".video-container__video");

  // Sounds
  const soundsElems = document.querySelectorAll(".sound-picker__button");
  // Timer
  const timerElem = document.querySelector(".player__timer");
  // Get length of the outline
  const getLengthOutline = outlineElem.getTotalLength();

  let fakeDirection = 600;

  outlineElem.style.strokeDasharray = getLengthOutline;
  outlineElem.style.strokeDashoffset = getLengthOutline;

  const chekPlaying = (song) => {
    if (audioElem.paused) {
      song.play();
      videoElem.play();
      playElem.src = "src/svg/pause.svg";
    } else {
      song.pause();
      videoElem.pause();
      playElem.src = "src/svg/play.svg";
    }
  };

  playElem.addEventListener("click", () => chekPlaying(audioElem));
};
app();
