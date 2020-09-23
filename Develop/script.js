// variables
var charCount;
var confirmNumber;
var confirmSpecial;
var confirmUpper;
var confirmLower;

// characters in variables arrays
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  ";",
  ":",
  "'",
  ",",
  ".",
  "?",
  "/",
  "`",
  "~",
  "|",
  "<",
  "=",
  ">",
];

upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// i don't really understand the provided assignment code so just going for it here

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// character count statements
function generatePassword() {
  charCount = prompt("How many characters in the password?");
  // ! = not entered
  if (!charCount) {
    alert("Enter a number please!");
    // || = or
  } else if (charCount < 8 || charCount > 128) {
    charCount = prompt("Pick a number between 8 and 128.");
  }
}
