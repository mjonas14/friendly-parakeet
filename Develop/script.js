// Assignment code here

// Empty object for containing all of the user's requested characters
let chars = [];

// Number of character types in the chars array
let charTypes = 0;

// Define special character array
let specialChars = [
  " ", 
  "!", 
  '"', 
  '#', 
  '$', 
  '%', 
  '&', 
  "'", 
  '(', 
  ')', 
  '*', 
  '+', 
  "'", 
  ',', 
  '-', 
  '.', 
  '/', 
  ':', 
  ';', 
  '<', 
  '=', 
  '>', 
  '?', 
  '@', 
  '[', 
  ']', 
  '^', 
  '_', 
  '`', 
  '{', 
  '|', 
  '}', 
  '~'
]

// Define lower case alphabet array
let lowerAlpha = [
  'a', 
  'b', 
  'c', 
  'd', 
  'e', 
  'f', 
  'g', 
  'h', 
  'i', 
  'j', 
  'k', 
  'l', 
  'm', 
  'n', 
  'o', 
  'p', 
  'q', 
  'r', 
  's', 
  't', 
  'u', 
  'v', 
  'w',
  'x', 
  'y', 
  'z'
]

// Define upper case alhpabet array
let upperAlpha = [];

for (let i = 0; i < lowerAlpha.length; i++) {
  upperAlpha[i] = lowerAlpha[i].toUpperCase();
}

// Define numbers array
let numbers = [
  '0', 
  '1', 
  '2', 
  '3', 
  '4', 
  '5', 
  '6', 
  '7', 
  '8', 
  '9'
]

// Get user to set password length, ensuring a value between 8 and 128 characters
let pswrdLength = 0;

function passwordLength() {
  pswrdLength = prompt('How long do you want the random password to be?');

  while (pswrdLength < 8 || pswrdLength > 128) {
    alert("Password must be between 8 and 128 characters!");
    pswrdLength = prompt("How long do you want your password to be?");
  }
}

// Get user to state if they want special characters
function incSpecialChars() {
  let incSC = prompt('Do you wish your password to include special characters (y/n)? (Ex. %$^&*{]\.)');

  while (incSC !== 'y' && incSC !== 'n') {
    alert('Please write "y" or "n".');
    incSC = prompt('Do you wish your password to include special characters (y/n)? (Ex. %$^&*{]\.)');
  }

  if (incSC === 'y') {
    chars[charTypes] = specialChars;
    charTypes++;
  }
 }

 // Get user to state if they want numbers
 function incNumbers() {
  let incNum = prompt("Do you wish your password to include numbers? (y/n)");

  while (incNum !== 'y' && incNum !== 'n') {
    alert('Please write "y" or "n".');
    incNum = prompt("Do you wish your password to include numbers? (y/n)")
  }

  if (incNum === 'y') {
    chars[charTypes] = numbers;
    charTypes++;
  }
 }

 //Get user to state if they want upper case letters
 function incUpperCase() {
  let incUpperCase = prompt("Do you wish your password to include upper case letters? (y/n)");

  while (incUpperCase !== 'y' && incUpperCase !== 'n') {
    alert('Please write "y" or "n".');
    incUpperCase = prompt("Do you wish your password to include upper case letters? (y/n)");
  }

  if (incUpperCase === 'y') {
    chars[charTypes] = upperAlpha;
    charTypes++;
  }
 }

 // Get user to state if they want lower case letters
 function incLowerCase() {
  let incLowerCase = prompt("Do you wish your password to include lower case letters? (y/n)");

  while (incLowerCase !== 'y' && incLowerCase !== 'n') {
    alert('Please write "y" or "n".');
    incLowerCase = prompt("Do you wish your password to include lower case letters? (y/n)");
  }

  if (incLowerCase === 'y') {
    chars[charTypes] = lowerAlpha;
    charTypes++;
  }
 }

function generatePassword() {

  // Call all functions to define parameters
  passwordLength();
  incSpecialChars();
  incNumbers();
  incUpperCase();
  incLowerCase();

  // Tests to make sure at least one character type has been chosen
  while (charTypes === 0) {
    alert("At least one character type needs to be included.")
    incSpecialChars();
    incNumbers();
    incUpperCase();
    incLowerCase();
  }

  let finalPassword = '';

  for (let j = 0; j < pswrdLength; j++) {

    // Randomly pick a character type
    let temp1 = Math.floor(Math.random() * charTypes);

    // Randomly pick a character within that character type and concatinate it to the end of the password
    let randomChar = Math.floor(Math.random() * chars[temp1].length);
    finalPassword += chars[temp1][randomChar];
  }

  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
