var slider = document.getElementById("slider-img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var imagearray = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];
var count = 0;
slider.src = imagearray[count];

function disableBtn(count) {
  if (count == 0) {
    prev.disabled = true;
  } else if (count == imagearray.length - 1) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

disableBtn(count);

prev.addEventListener("click", function () {
  if (count > 0) {
    count -= 1;
    slider.src = imagearray[count];
  }
  disableBtn(count);
});

next.addEventListener("click", function () {
  count += 1;
  if (count < imagearray.length) {
    slider.src = imagearray[count];
  }
  disableBtn(count);
});
