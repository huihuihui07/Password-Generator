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
  let passwordLength = parseInt(
    prompt(
      "Please enter the length of your password (between 8 & 128 characters):",
      "e.g.10"
    )
  );

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 & 128 characters.");
    return;
  }
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
    !passwordUppercase ||
    !passwordLowercase ||
    !passwordNumeric ||
    !passwordSpecial
  ) {
    alert("needs to be at least one option chosen");
    return;
  }

  return {
    passwordUppercase: passwordUppercase,
    passwordLowercase: passwordLowercase,
    passwordLength: passwordLength,
    passwordNumeric: passwordNumeric,
    passwordSpecial: passwordSpecial,
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  randomNum = Math.floor(Math.random() * arr.length);
  return arr[randomNum];
}

// Function to generate password with user input
function generatePassword() {
  const object = getPasswordOptions();

  // //if none: log: You have not selected a character type. please start again!
  // else {
  //   alert("You haven't selected a character type. Please try again!");
  //   return;
  // }
  //create an array with the selected elements

  let charArray = [];

  if (object.passwordUppercase)
    charArray = charArray.concat(upperCasedCharacters);
  if (object.passwordLowercase)
    charArray = charArray.concat(lowerCasedCharacters);
  if (object.passwordNumeric) charArray = charArray.concat(numericCharacters);
  if (object.passwordSpecial) charArray = charArray.concat(specialCharacters);

  //create an array to store password
  let passwordArr = [];
  //iterate through the array and pick random number to fill each position of the selected length
  for (let i = 0; i < object.passwordLength; i++) {
    passwordArr[i] = getRandom(charArray);
  }
  return passwordArr.join("");
}

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
