// Assignment code here
const lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
const upperAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const specialChar = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

let passLength = prompt("Please enter your desired password length (between 8 and 128 characters)");
if (passLength < 8|| passLength > 128 || passLength === undefined) {
  alert("Please enter a password length between 8 and 128 characters")
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
