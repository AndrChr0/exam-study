// Implement the JavaScript part only for checking the length of a username when this has been filled in by the user in a form field.
// Check the length of the username to not be less than 5 characters.
// If the user enters a username that is less than 5 characters write a message to the user informing that “The username must be 5 characters or more.”.
// Otherwise clear the message.

const inputField = document.querySelector("#inputID"); // assign variables
const btn = document.querySelector("#btnID");
const msg = document.querySelector("#pID");

// btn.addEventListener("click", () => {
//   // add evenlitener to btn, click event
//   if (inputField.value.length < 5) {
//     // when usr clicks, if statmenmt checks if length of value of inputfiled is less than 5
//     msg.textContent = "“The username must be 5 characters or more.”"; // if less than 5, textconetent of msg becomes this
//   } else {
//     // if more than 5, value is set to nothing, text says "submitted"
//     inputField.value = "";
//     msg.textContent = "Submitted";
//   }
// });

// function method

function checkUN() {
  // add evenlitener to btn, click event
  if (inputField.value.length < 5) {
    // when usr clicks, if statmenmt checks if length of value of inputfiled is less than 5
    msg.textContent = "“The username must be 5 characters or more.”"; // if less than 5, textconetent of msg becomes this
  } else {
    // if more than 5, value is set to nothing, text says "submitted"
    inputField.value = "";
    msg.textContent = "Submitted";
    inputField.disabled = true;
  }
}

btn.addEventListener("click", checkUN);
