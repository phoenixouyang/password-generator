// Generate strings for password criteria
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Get user input for password length
let passLength = parseInt(window.prompt("Please enter your desired password length (between 8 and 128 characters)"));

// Validate user input for password length
if (passLength < 8|| passLength > 128 || !passLength) {
  passLength = parseInt(window.prompt("You did not enter a valid number. Please enter a length between 8 and 128 characters"));
}
// Get user input for password characters
else {
  var lowerAlphaConfirm = window.confirm("Do you want lower case letters in your password? Click 'OK' for yes, 'Cancel' for no.");
  var upperAlphaConfirm = window.confirm("Do you want upper case letters in your password? Click 'OK' for yes, 'Cancel' for no.");
  var numbersConfirm = window.confirm("Do you want numbers in your password? Click 'OK' for yes, 'Cancel' for no.");
  var specialCharConfirm = window.confirm("Do you want special characters in your password? Click 'OK' for yes, 'Cancel' for no.");
};

// Validate whether user chose at least one type of character to include
if (!lowerAlphaConfirm && !upperAlphaConfirm && !numbersConfirm && !specialCharConfirm) {
  alert("Please try again. You must select at least one type of character for your password.")
};

let passCharacters = ""

if (lowerAlphaConfirm === true) {
  passCharacters = passCharacters.concat(lowerAlpha)
};
if (upperAlphaConfirm === true) {
  passCharacters = passCharacters.concat(upperAlpha)
};
if (numbersConfirm === true) {
  passCharacters = passCharacters.concat(numbers)
};
if (specialCharConfirm === true) {
  passCharacters = passCharacters.concat(specialChar)
};


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
