const input = document.querySelector("#inputID");
const btn = document.querySelector("#btnID");
const textBox = document.querySelector("#textID");
const textP = document.querySelector("#pID");
textP.textContent = "Nerd, du har ikke skreve noe enda";
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
