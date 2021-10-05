// Assignment code here

// variables for arrays used in password generation
var lettersCap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "-"];
var passTotal = []

// "answer the following prompts to generate a custom password" 
function notify() {
  alert("Please answer the following prompts to generate a custom password!")
  passCapAsk()
}
passCapAsk()

// "Include capital letters?"
// Function for this choice
function passCapAsk() {
  var confirmCap = confirm("Include capital letters?")
  if(confirmCap === true) {
    passTotal = passTotal.concat(lettersCap)
    passLowAsk()
  } else {
    passLowAsk()
  }
}

// "Include lower case letters?"
// Function for this choice
function passLowAsk() {
  var confirmLow = confirm("Include lower case letters?")
  if(confirmLow === true) {
    passTotal = passTotal.concat(lettersLow)
    passNumAsk()
  } else {
    passNumAsk()
  }
}

// "Include numbers?"
// Function for this choice

function passNumAsk() {
  var confirmNum = confirm("Include numbers?")
  if(confirmNum === true) {
    passTotal = passTotal.concat(numbers)
    passSymAsk()
  } else {
    passSymAsk()
  }
}

// "Include symbols?"
// Function for this choice
function passSymAsk() {
  var confirmSym = confirm("Include symbols?")
  if(confirmSym === true) {
    passTotal = passTotal.concat(symbols)
    totalCheck()
  } else {
    totalCheck()
  }
}

// if passTotal = [], then return to beginning and alert stating that at least one option must be selected.
function totalCheck() {
  if(passTotal.length <= 0) {
    alert("You must choose at least one option before continuing! Please retry.")
    passCapAsk()
  } else {
    writePassword()
  }
}
// "How long should this password be? min 8 char, max 128"

// Function to randomize letters/numbers/symbols with appropriate arrays




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
