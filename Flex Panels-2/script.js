var panels = document.querySelectorAll(".panel");

function showElement() {
  this.classList.toggle("open");
}

function changeflex(e) {
  if (e.propertName.includes("flex")) {
    this.classList.toggle("on-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", showElement));
panels.forEach((panel) => panel.addEventListener("transitionend", changeflex));
