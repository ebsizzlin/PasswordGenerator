// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("password:", password);
  var passwordText = document.querySelector("#password");
  console.log("passwordText:", passwordText);

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log("generateBtn:", generateBtn);

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
  if (!charCount) {
    alert("Enter a number!");
  } else if (charCount < 8 || charCount > 128) {
    charCount = alert("Pick a number between 8 and 128.");
    // the other prompts under one else statement -- separate statements doesn't work
  } else {
    confirmNumber = confirm("Do you want to use numbers?");
    console.log("confirmNumber:", confirmNumber);
    confirmSpecial = confirm("Do you want to use special characters?");
    console.log("confirmSpecial:", confirmSpecial);
    confirmUpper = confirm("Do you want to use uppercase letters?");
    console.log("confirmUpper:", confirmUpper);
    confirmLower = confirm("Do you want to use lowercase letters?");
    console.log("confirmLower:", confirmLower);
  }

  if (confirmNumber) {
    // add numbers to the eligible pool
    character_pool.push(number);
  }
  if (confirmSpecial) {
    // add special characters to the eligible pool
    character_pool.push(special);
  }
  if (confirmUpper) {
    // add uppercase to the eligible pool
    character_pool.push(upper);
  }
  if (confirmLower) {
    // add lowercase to the eligible pool
    character_pool.push(lower);
  } else if (
    !confirmNumber &&
    !confirmSpecial &&
    !confirmUpper &&
    !confirmLower
  ) {
    alert("Pick at least one of the four options.");
  }
  console.log(character_pool, "character_pool");
  // 1/4 chosen
  // } else if (confirmNumber) {
  //   // value = number;
  //   character_pool.push(confirmNumber);
  // } else if (confirmSpecial) {
  //   // value = special;
  //   character_pool.push(confirmSpecial);
  // } else if (confirmUpper) {
  //   // value = upper;
  //   character_pool.push(confirmUpper);
  // } else if (confirmLower) {
  //   // value = lower;
  //   character_pool.push(confirmLower);

  //   // 2/4 chosen
  // } else if (confirmNumber && confirmSpecial) {
  //   // value = number.special;
  //   character_pool.push(confirmNumber);
  //   character_pool.push(confirmSpecial);
  // } else if (confirmNumber && confirmUpper) {
  //   // value = number.upper;
  //   character_pool.push(confirmNumber);
  //   character_pool.push(confirmUpper);
  // } else if (confirmNumber && confirmLower) {
  //   // value = number.lower;
  //   character_pool.push(confirmNumber);
  //   character_pool.push(confirmLower);
  // } else if (confirmSpecial && confirmUpper) {
  //   // value = special.upper;
  //   character_pool.push(confirmSpecial);
  //   character_pool.push(confirmUpper);
  // } else if (confirmSpecial && confirmLower) {
  //   // value = special.lower;
  //   character_pool.push(confirmSpecial);
  //   character_pool.push(confirmLower);
  // } else if (confirmUpper && confirmLower) {
  //   // value = upper.lower;
  //   character_pool.push(confirmUpper);
  //   character_pool.push(confirmLower);

  //   // 3/4 chosen
  // } else if (confirmSpecial && confirmNumber && confirmUpper) {
  //   // value = special.number.upper;
  //   character_pool.push(confirmSpecial);
  //   character_pool.push(confirmNumber);
  //   character_pool.push(confirmUpper);
  // } else if (confirmSpecial && confirmNumber && confirmLower) {
  //   // value = special.number.lower;
  //   character_pool.push(confirmSpecial);
  //   character_pool.push(confirmNumber);
  //   character_pool.push(confirmLower);
  // } else if (confirmSpecial && confirmUpper && confirmLower) {
  //   // value = special.upper.lower;
  //   character_pool.push(confirmSpecial);
  //   character_pool.push(confirmUpper);
  //   character_pool.push(confirmLower);
  // } else if (confirmNumber && confirmUpper && confirmLower) {
  //   // value = number.upper.lower;
  //   character_pool.push(confirmNumber);
  //   character_pool.push(confirmUpper);
  //   character_pool.push(confirmLower);

  //   // 4/4 chosen
  // } else if (confirmSpecial && confirmNumber && confirmUpper && confirmLower) {
  //   // choice = special.number.upper.lower;
  //   character_pool.push(confirmSpecial);
  //   character_pool.push(confirmNumber);
  //   character_pool.push(confirmUpper);
  //   character_pool.push(confirmLower);
  // }

  var randomPassword = "";

  // for loop
  for (var i = 0; i < charCount; i++) {
    console.log("charCount:", charCount);
    // randomPassword = Math.floor(Math.random() * charCount.length);
    randomPassword += Math.floor(Math.random() * character_pool.length);
    console.log("randomPassword:", randomPassword);
  }

  return randomPassword;

  // var superFinal = randomPassword.join("");
  // console.log(superFinal);

  // document.getElementById("display").textContent = superFinal;

  // document.getElementById("password").innerHTML = writePassword;

  //Generate new password into text area
  // password.passwordText = randomPassword;
  // to make it appear in the box
  // document.getElementById("password").value = password;
  // return password;
  // localStorage.setItem("password", JSON.stringify(password));
  // return randomPassword;
}
