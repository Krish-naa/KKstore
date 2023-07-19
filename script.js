// we want the hamburger menu clickble when we click we want navbar to open
const bar = document.getElementById("bar"); // variable name is bar
const close = document.getElementById("close");
const nav = document.getElementById("navbar"); // by clicking on hamburger we are opening naavbar

if (bar) {
  // if bar is already open then will check
  bar.addEventListener("click", () => {
    // if click
    nav.classList.add("active"); // open hamburger
  });
}
if (close) {
  close.addEventListener("click", () => {
    // if anyone click on close then close not add this time
    nav.classList.remove("active");
  });
}

function openNewPage() {
  window.location.href = "sproduct.html";
}
