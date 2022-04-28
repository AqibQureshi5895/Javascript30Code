function toPlaySound(e) {
  //   console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // selecting elements based on datakey and keycode
  const keyPressed = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0; // to stop and  restart the sound from start whenever a key is pressed
  audio.play(); //to play the sound

  keyPressed.classList.add("sound");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("sound");
}

const keys = document.querySelectorAll(".key");
console.log(keys);
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", toPlaySound);
