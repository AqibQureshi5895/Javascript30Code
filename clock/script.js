function clock() {
  const secondsHand = document.querySelector(".sec-hand");
  const minsHand = document.querySelector(".mins-hand");
  const hrsHand = document.querySelector(".hour-hand");
  const allhand = document.querySelectorAll(".clock-hand");

  const date = new Date();

  // hrs/60 gives the percentage and + 360 gives rotation and + 90 actual resets the offset of rotate 90 deg in css
  const hrs = date.getHours();
  const hrsDegree = (hrs / 60) * 360 + 90;

  const mins = date.getMinutes();
  const minDegree = (mins / 60) * 360 + 90;

  const secs = date.getSeconds();
  const secDegree = (secs / 60) * 360 + 90;

  //to rotate  clock hands
  secondsHand.style.transform = `rotate(${secDegree}deg)`;
  minsHand.style.transform = `rotate(${minDegree}deg)`;
  hrsHand.style.transform = `rotate(${hrsDegree}deg)`;

  //handling transitions on 90deg or 0 sec
  allhand.forEach((hand) => {
    if (secs == 0) {
      hand.style.transition = "none";
    } else {
      hand.style.transition = "all 0.02s cubic-bezier(0, 3.47, 0.58, 1)";
    }
  });
}

setInterval(clock, 1000);
