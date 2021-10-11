// Assignment code here

// variables for arrays used in password generation
var lettersCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "-"];
var passTotal = [];
var lengthQuestion;

// Notifies user that new password will be generated, resets array choice pool
function notify() {

  // resets text box element to empty, resets passTotal array so new passwords do not contain previous selections
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  passTotal = [];

  alert("Please answer the following prompts to generate a custom password!");
  passCapAsk();
}

// adds capital letters to the random pool if answered "true." If not, continue to lowercase question
function passCapAsk() {
  var confirmCap = confirm("Include capital letters?");
  if (confirmCap === true) {
    passTotal = passTotal.concat(lettersCap);
    passLowAsk();
  } else {
    passLowAsk();
  }
}

// adds lowercase letters to the random pool if answered "true." If not, continue to numbers question
function passLowAsk() {
  var confirmLow = confirm("Include lower case letters?");
  if (confirmLow === true) {
    passTotal = passTotal.concat(lettersLow);
    passNumAsk();
  } else {
    passNumAsk();
  }
}

// adds numbers to the random pool if answered "true." If not, continue to symbols question
function passNumAsk() {
  var confirmNum = confirm("Include numbers?");
  if (confirmNum === true) {
    passTotal = passTotal.concat(numbers);
    passSymAsk();
  } else {
    passSymAsk();
  }
}

// adds symbols to the random pool if answered "true." If not, continue to password length question
function passSymAsk() {
  var confirmSym = confirm("Include symbols?");
  if (confirmSym === true) {
    passTotal = passTotal.concat(symbols);
    totalCheck();
  } else {
    totalCheck();
  }
}

// if user has made no selections, then return to beginning and alert stating that at least one option must be selected.
function totalCheck() {
  if (passTotal.length <= 0) {
    alert("You must choose at least one option before continuing! Please retry.");
    passCapAsk();
  } else {
    passLengthAsk();
  }
}

// "How long should this password be? min 8 char, max 128"
function passLengthAsk() {
  var lengthQuestion = prompt("How long should it be? Please type a number between 8 and 128.");
  if (lengthQuestion >= 8 && lengthQuestion <= 128) {
    randomizeThisPass(lengthQuestion);

    // if wrong input is detected, prompt user to retry
  } else {
    alert("Incorrect input, Please try again!");
    passLengthAsk();
  }
}

// Function to randomize user selections into new array
function randomizeThisPass(pass) {
  var randomPassword = []

  // generate random number between minimum and user length choice
  function randomArrayNum(min, max) {
    return Math.random() * (max - min) + min;
  }

  // select a random string from the user selected pool
  for (var i = 0; i < pass; i++) {
    var randomNum = randomArrayNum(0, passTotal.length);
    randomNum = Math.floor(randomNum);

    // push random string to new pool
    var randomFromTotal = passTotal[randomNum];
    randomPassword.push(randomFromTotal);
  }

  // remove commas from array output, print randomized password to screen
  randomPassword = randomPassword.join("");
  writePassword(randomPassword);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(finalPassword) {
  var password = finalPassword;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", notify);
