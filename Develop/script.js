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

// added later -- variable to store new pw
var character_pool = [];

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
    character_pool.push(confirmNumber);
  } else if (confirmSpecial) {
    // value = special;
    character_pool.push(confirmSpecial);
  } else if (confirmUpper) {
    // value = upper;
    character_pool.push(confirmUpper);
  } else if (confirmLower) {
    // value = lower;
    character_pool.push(confirmLower);

    // 2/4 chosen
  } else if (confirmNumber && confirmSpecial) {
    // value = number.special;
    character_pool.push(confirmNumber);
    character_pool.push(confirmSpecial);
  } else if (confirmNumber && confirmUpper) {
    // value = number.upper;
    character_pool.push(confirmNumber);
    character_pool.push(confirmUpper);
  } else if (confirmNumber && confirmLower) {
    // value = number.lower;
    character_pool.push(confirmNumber);
    character_pool.push(confirmLower);
  } else if (confirmSpecial && confirmUpper) {
    // value = special.upper;
    character_pool.push(confirmSpecial);
    character_pool.push(confirmUpper);
  } else if (confirmSpecial && confirmLower) {
    // value = special.lower;
    character_pool.push(confirmSpecial);
    character_pool.push(confirmLower);
  } else if (confirmUpper && confirmLower) {
    // value = upper.lower;
    character_pool.push(confirmUpper);
    character_pool.push(confirmLower);

    // 3/4 chosen
  } else if (confirmSpecial && confirmNumber && confirmUpper) {
    // value = special.number.upper;
    character_pool.push(confirmSpecial);
    character_pool.push(confirmNumber);
    character_pool.push(confirmUpper);
  } else if (confirmSpecial && confirmNumber && confirmLower) {
    // value = special.number.lower;
    character_pool.push(confirmSpecial);
    character_pool.push(confirmNumber);
    character_pool.push(confirmLower);
  } else if (confirmSpecial && confirmUpper && confirmLower) {
    // value = special.upper.lower;
    character_pool.push(confirmSpecial);
    character_pool.push(confirmUpper);
    character_pool.push(confirmLower);
  } else if (confirmNumber && confirmUpper && confirmLower) {
    value = number.upper.lower;
    character_pool.push(confirmNumber);
    character_pool.push(confirmUpper);
    character_pool.push(confirmLower);

    // 4/4 chosen
  } else if (confirmSpecial && confirmNumber && confirmUpper && confirmLower) {
    choice = special.number.upper.lower;
  }
  character_pool.push(confirmSpecial);
  character_pool.push(confirmNumber);
  character_pool.push(confirmUpper);
  character_pool.push(confirmLower);

  // added later - way to get the actual password to create itself
  var character_pool = character_pool.join("");

  // while loop added with tutor -- while the pw length is less than desired, add a random character from character_pool at the end
  while (i < charCount) {
    console.log("charCount:", charCount);
    charCount += 1;
    // character_pool += charCount[i] + "<br>";
    // i++;
  }

  return password;
  //   // concat = joining 2+ strings without changing the original string
  //   // password = password.concat(newValue);
}
// document.getElementById("passwordText").textContent = character_pool;
