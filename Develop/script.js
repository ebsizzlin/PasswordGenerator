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

// character count statements
function generatePassword() {
  charCount = prompt("How many characters in the password?");
  // ! = not entered
  if (!charCount) {
    alert("Enter a number!");
    // || = or
  } else if (charCount < 8 || charCount > 128) {
    charCount = alert("Pick a number between 8 and 128.");
    // the other prompts under one else statement
  } else {
    confirmNumber = confirm("Do you want to use numbers?");
    confirmSpecial = confirm("Do you want to use special characters?");
    confirmUpper = confirm("Do you want to use uppercase letters?");
    confirmLower = confirm("Do you want to use lowercase letters?");
  }

  var value;

  // if user chooses 0/4
  // ! = not entered // && = and
  if (!confirmNumber && !confirmSpecial && !confirmUpper && !confirmLower) {
    alert("Pick at least one of the four options.");
    // use else if for multiple options (?)
    // 1/4 chosen
  } else if (confirmNumber) {
    value = number;
  } else if (confirmSpecial) {
    value = special;
  } else if (confirmUpper) {
    value = upper;
  } else if (confirmLower) {
    value = lower;
    // 2/4 chosen
  } else if (confirmNumber && confirmSpecial) {
    value = number.special;
  } else if (confirmNumber && confirmUpper) {
    value = number.upper;
  } else if (confirmNumber && confirmLower) {
    value = number.lower;
  } else if (confirmSpecial && confirmUpper) {
    value = special.upper;
  } else if (confirmSpecial && confirmLower) {
    value = special.lower;
  } else if (confirmUpper && confirmLower) {
    value = upper.lower;
    // 3/4 chosen
  } else if (confirmSpecial && confirmNumber && confirmUpper) {
    value = special.number.upper;
  } else if (confirmSpecial && confirmNumber && confirmLower) {
    value = special.number.lower;
  } else if (confirmSpecial && confirmUpper && confirmLower) {
    value = special.upper.lower;
  } else if (confirmNumber && confirmUpper && confirmLower) {
    value = number.upper.lower;
    // 4/4 chosen
  } else if (confirmSpecial && confirmNumber && confirmUpper && confirmLower) {
    choice = special.number.upper.lower;
  }

  // for loop to randomly select variables
  for (var i = 0; i < 4; i++) {
    var value = value[Math.floor(Math.random() * value.length)];
  }
}
