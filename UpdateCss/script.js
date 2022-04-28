const inputs = document.querySelectorAll(".input-holder input");
function changeStyle() {
  const suffix = this.dataset.size || ""; // gives all attributes starting with data-

  document.documentElement.style.setProperty(
    `--${this.name}`, //-- is for css variable we are handling css variable
    this.value + suffix
  );
  console.log(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => input.addEventListener("change", changeStyle));
inputs.forEach((input) => input.addEventListener("mousemove", changeStyle));
