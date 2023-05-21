let colors = ["red", "green", "blue", "yellow"];
console.log(colors); //[ 'red', 'green', 'blue', 'yellow' ]

colors.unshift("æææ");
console.log(colors); // [ 'æææ', 'red', 'green', 'blue', 'yellow' ]

colors.shift();
console.log(colors); // ['red', 'green', 'blue', 'yellow' ]

colors.push("øøøøø");
console.log(colors); // [ 'red', 'green', 'blue', 'yellow', 'øøøøø' ]

console.log(colors.slice(1, 4)); // [ 'green', 'blue', 'yellow' ]

let others = [4, 5, 6];

colors.push(...others);
console.log(colors); // ['red', 'green', 'blue', 'yellow', 'øøøøø', 4, 5, 6]

colors = [...others, "red", "green", "blue", "yellow"];
console.log(colors); // [ 4, 5, 6, 'red', 'green', 'blue', 'yellow' ]

delete colors[1];
console.log(colors); // [ 4, 5, 6, 'red', 'green', 'blue', 'yellow' ]
// ================================================================
class Salary {
  constructor(nameX, hourly, hours) {
    this.nameX = nameX;
    this.hourly = hourly;
    this.hours = hours;
  }
  checkSalary() {
    return `${this.hours * this.hourly} kr.`;
  }
}

let JoeSalary = new Salary("joe", 170, 40);

console.log(JoeSalary.checkSalary());

console.log(Math.floor(Math.random() * 6));

let lol = "     hahahahahahaha        ";
console.log(lol.replace(/h/g, "i"));

var score1 = 5; // Round 1 score
var score2 = 6; // Round 2 score
var pass1 = 6; // Round 1 pass mark
var pass2 = 6; // Round 2 pass mark

if (score1 >= pass1 && score2 >= pass2) {
  console.log("both passed");
} else {
  console.log("not passed");
}

let response;
let score = 990;
let machineActive = true;

if (machineActive === false) {
  response = "machine not active";
} else {
  if ((machineActive = true)) {
    if (score < 0 || score > 100) {
      response = "This is not possible, an error has occurred.";
    } else if (score <= 19) {
      response = "That was a terrible score — total fail!";
    } else if (score >= 20 || score <= 39) {
      response =
        "You know some things, but it's a pretty bad score. Needs improvement.";
    } else if (score >= 40 || score <= 69) {
      response = "You did a passable job, not bad!";
    } else if (score >= 70 || score <= 89) {
      response = "That's a great score, you really know your stuff.";
    } else if (score >= 90 || score <= 100) {
      response = "What an amazing score! Did you cheat? Are you for real?";
    }
  }
}

console.log(response);

console.log(2 < 5 || 2 < 1);

let val = 0;

val == 10 ? console.log("GG") : console.log("LL");
