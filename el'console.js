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
