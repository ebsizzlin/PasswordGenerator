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
var character_pool = "";

// characters in variables arrays
number = "0123456789";

special = "`~!@#$%^&*()_-+={[}]|\"':;<,>.?/";

upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

lower = "abcdefghijklmnopqrstuvwxyz";

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
    // character_pool.push(number);
    character_pool += number;
  }
  if (confirmSpecial) {
    // add special characters to the eligible pool
    // character_pool.push(special);
    character_pool += special;
  }
  if (confirmUpper) {
    // add uppercase to the eligible pool
    // character_pool.push(upper);
    character_pool += upper;
  }
  if (confirmLower) {
    // add lowercase to the eligible pool
    // character_pool.push(lower);
    character_pool += lower;
  } else if (
    !confirmNumber &&
    !confirmSpecial &&
    !confirmUpper &&
    !confirmLower
  ) {
    alert("Pick at least one of the four options.");
  }
  console.log(typeof character_pool);
  // character_pool = character_pool.toString();
  console.log(character_pool, "character_pool");

  var randomPassword = "";

  // for loop (corrected after much help from tutor !!)
  for (var i = 0; i < charCount; i++) {
    console.log("charCount:", charCount);
    // randomPassword = Math.floor(Math.random() * charCount.length);
    var index = Math.floor(Math.random() * character_pool.length);
    randomPassword += character_pool[index];
    console.log("randomPassword:", randomPassword);
  }

  return randomPassword;
}
