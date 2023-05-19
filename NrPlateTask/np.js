const input = document.querySelector("#inputID");
const btn = document.querySelector("#btnID");
const textBox = document.querySelector("#textID");
const textP = document.querySelector("#pID");
textP.textContent = "Nerd, du har ikke skreve noe enda";

let randomNumber = Math.floor(Math.random() * 5) + 1;

input.addEventListener("input", () => {
  if (input.value === "") {
    return "";
  } else {
    textP.textContent = "der jaaaa";
  }
});

function nrPlateGen() {
  if (input.value === "") {
    textBox.textContent = "Please write smtn";
  } else {
    let valueTot = input.value.length * 5;
    textBox.textContent = `plate cost of "${input.value}": ${valueTot} kr`;
    input.value = "";
  }
}

btn.addEventListener("click", nrPlateGen);

let bodyVar = document.querySelector("body");
bodyVar.style.height = "200vh";

document.body.addEventListener("click", () => {
  if (window.innerWidth <= 1000) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "white";
  }
});

let newP = document.createElement("p");
newP.style.position = "fixed";
textP.after(newP);

function scrollWatch() {
  let scrollVal = window.scrollY;
  newP.textContent = `You have scrolled ${scrollVal}px`;
}

window.addEventListener("scroll", scrollWatch);
