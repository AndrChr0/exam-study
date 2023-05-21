// const oP = document.querySelector(".output");

// for (i = 10; i <= 100; i++) {
//   const paR = document.createElement("p");
//   paR.textContent = `${i} små kinesere`;
//   oP.append(paR);
//   sessionStorage.setItem(i, i);

//   if (i % 9 === 0) {
//     sessionStorage.setItem(i, "ææææææææ");
//     // Add your logic for every tenth iteration here
//   }
// }

// let netrix = [];

// for (i = 1  ; i <= 11; i++) {
//   netrix.push(i);
//   oP.textContent = netrix;
//   console.log(netrix);
//   if (netrix.length === 2 || netrix.length >= 7) {
//     sessionStorage.setItem(i, "ææææææææ");
//   }
// }

// let para = document.querySelector("p");
// let jojo = ["æææ", "øøø", "ååå"];
// // for (const vokal of jojo) {
// //   const pp = document.createElement("div");
// //   pp.textContent = `av og til sier jeg ${vokal}`;
// //   para.append(pp);
// // }

// for (i = 0; i < jojo.length; i++) {
//   const pp = document.createElement("div");
//   pp.textContent = `av og til sier jeg ${jojo[i]}`;
//   para.append(pp);
// }

// let liS = document.querySelectorAll("li");

// for (i = 0; i < liS.length; i++) {
//   if (i === 0 || i === 1) {
//     liS[i].classList.add("favorite");
//   }
// }

// const mainID = document.querySelector("#shoppingList");

// let newLI = document.createElement("li");

// newLI.textContent = "pasat";

// newLI.firstChild.after(newLI);

const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const msg = document.querySelector(".msg");
// let val = 0;

// btn.addEventListener("click", () => {
//   val += 1;
//   console.log(val);
//   if (val === 5) {
//     btn.remove();
//   }
// });

// function checkUser(e) {
//   let target = e.target;
//   console.log(e);
//   if (target.value.length < 5) {
//     msg.textContent = "less than 5";
//   } else {
//     msg.textContent = "";
//   }
// }

// input.addEventListener("input", checkUser);

// const btn = document.querySelector('.off');

// Add your code here

btn.addEventListener("click", () => {
  if (btn.textContent === "Machine is on") {
    btn.textContent = "Machine is off";
  } else {
    btn.textContent = "Machine is on";
  }
});
