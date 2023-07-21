// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  //Length of password: At least 8 characters but no more than 128.
  let passwordLength = prompt(
    "Please enter the length of your password (between 8 & 128 characters):",
    "e.g.10"
  );
  console.log(typeof passwordLength);
  if (
    // typeof passwordLength !== "number"
    // ||
    passwordLength < 8 ||
    passwordLength > 128
  ) {
    alert("Please enter a number between 8 & 128 characters.");
  } else {
    //Uppercase
    let passwordUppercase = confirm(
      "Would you like your password to have uppercase letters?"
    );

    //Lowercase
    let passwordLowercase = confirm(
      "Would you like your password to have lowercase letters?"
    );

    //Numeric
    let passwordNumeric = confirm(
      "Would you like your password to have numbers?"
    );

    //Special characters
    let passwordSpecial = confirm(
      "Would you like your password to have special characters?"
    );

    //test whether the character type is selected
    if (
      passwordUppercase ||
      passwordLowercase ||
      passwordNumeric ||
      passwordSpecial
    )
      alert("You are all set!");
    else alert("You haven't selected a character type. Please try again!");

    //if none: log: You have not selected a character type. please refresh to start again!
  }
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);
generateBtn.addEventListener("click", getPasswordOptions);
