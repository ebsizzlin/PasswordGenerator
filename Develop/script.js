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
// var confirmSpecial = "!$^&*-=+_?{}[]()<>|/~`';:";
// var confirmNumber = "0123456789";
// var confirmUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var confirmLower = "abcdefghijklmnopqrstuvwxyz";

// added later -- variable to store new pw
var newPassword = [];

// characters in variables arrays
confirmNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

confirmSpecial = [
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

confirmUpper = [
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

confirmLower = [
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
  var charCount = prompt("How many characters in the password?");
  // ! = not entered
  if (!charCount) {
    alert("Enter a number!");
    // || = or
  } else if (charCount < 8 || charCount > 128) {
    charCount = alert("Pick a number between 8 and 128.");
    // the other prompts under one else statement -- separate statements doesn't work
  } else {
    confirmNumber = confirm("Do you want to use numbers?");
    confirmSpecial = confirm("Do you want to use special characters?");
    confirmUpper = confirm("Do you want to use uppercase letters?");
    confirmLower = confirm("Do you want to use lowercase letters?");
  }

  // if user chooses 0/4 - read something that said push so tried that
  // ! = not entered // && = and
  if (!confirmNumber && !confirmSpecial && !confirmUpper && !confirmLower) {
    alert("Pick at least one of the four options.");
    // use else if for multiple options (?)
    // 1/4 chosen
  } else if (confirmNumber) {
    // value = number;
    newPassword.push(confirmNumber);
  } else if (confirmSpecial) {
    // value = special;
    newPassword.push(confirmSpecial);
  } else if (confirmUpper) {
    // value = upper;
    newPassword.push(confirmUpper);
  } else if (confirmLower) {
    // value = lower;
    newPassword.push(confirmLower);

    // 2/4 chosen
  } else if (confirmNumber && confirmSpecial) {
    // value = number.special;
    newPassword.push(confirmNumber);
    newPassword.push(confirmSpecial);
  } else if (confirmNumber && confirmUpper) {
    // value = number.upper;
    newPassword.push(confirmNumber);
    newPassword.push(confirmUpper);
  } else if (confirmNumber && confirmLower) {
    // value = number.lower;
    newPassword.push(confirmNumber);
    newPassword.push(confirmLower);
  } else if (confirmSpecial && confirmUpper) {
    // value = special.upper;
    newPassword.push(confirmSpecial);
    newPassword.push(confirmUpper);
  } else if (confirmSpecial && confirmLower) {
    // value = special.lower;
    newPassword.push(confirmSpecial);
    newPassword.push(confirmLower);
  } else if (confirmUpper && confirmLower) {
    // value = upper.lower;
    newPassword.push(confirmUpper);
    newPassword.push(confirmLower);

    // 3/4 chosen
  } else if (confirmSpecial && confirmNumber && confirmUpper) {
    // value = special.number.upper;
    newPassword.push(confirmSpecial);
    newPassword.push(confirmNumber);
    newPassword.push(confirmUpper);
  } else if (confirmSpecial && confirmNumber && confirmLower) {
    // value = special.number.lower;
    newPassword.push(confirmSpecial);
    newPassword.push(confirmNumber);
    newPassword.push(confirmLower);
  } else if (confirmSpecial && confirmUpper && confirmLower) {
    // value = special.upper.lower;
    newPassword.push(confirmSpecial);
    newPassword.push(confirmUpper);
    newPassword.push(confirmLower);
  } else if (confirmNumber && confirmUpper && confirmLower) {
    value = number.upper.lower;
    newPassword.push(confirmNumber);
    newPassword.push(confirmUpper);
    newPassword.push(confirmLower);

    // 4/4 chosen
  } else if (confirmSpecial && confirmNumber && confirmUpper && confirmLower) {
    choice = special.number.upper.lower;
  }
  newPassword.push(confirmSpecial);
  newPassword.push(confirmNumber);
  newPassword.push(confirmUpper);
  newPassword.push(confirmLower);

  // added later - way to get the actual password to create itself
  var newPassword = newPassword.join("");
  var password = "";

  // for loop to randomly select variables
  for (var i = 0; i < charCount; i++) {
    var newValue =
      newPassword.charAt[Math.floor(Math.random() * newPassword.length)];
    console.log("newValue:", newValue);
    // concat = joining 2+ strings without changing the original string
    // password = password.concat(newValue);
  }
  return newPassword;

  // document.getElementById("passwordText").textContent = newPassword;
}
