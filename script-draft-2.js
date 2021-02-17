// Assignment Code
var generateBtn = document.querySelector("#generate");

// various characters that will be used to create password | Computer needs to calculate its input choice | criteria = object, lowercase/uppercase/numbers/specialcharacters = names and their contents = values 

var criteria = {
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9],
  specialCharacters: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
}

// var choices;
var confirmNumber;
var confirmSpecialCharacter;
var confirmUppercase;
var confirmLowercase;

function generatePassword(){
  // do stuff to generate a password
  passwordLength = prompt ('How many characters would you like in your password? Please enter a number between 8 and 128!');
  // If, else statement 
    if (passwordLength < 8 || passwordLength > 128) {
    alert ('Invalid please try again');
    } else {
  // changed method from prompt to confirm because prompt is asking for input while confirm is simply requesting validation 
  confirmNumber = confirm ('Would you like numbers in your password?');
  confirmSpecialCharacter = confirm ('Would you like special characters in your password?');
  confirmUppercase = confirm ('Would you like uppercase letters in your password?');
  confirmLowercase = confirm('Would you like lowercase letters in your password?');
  };
  // if even one confirmation is not confirmed the alert will be returned to the user 
  if (!confirmNumber || !confirmSpecialCharacter || !confirmUppercase || !confirmLowercase) {
    alert ('Invalid please try again');
    // numbers --------------
  } else if (confirmNumber === criteria.numbers) { 
    // How values are chosen 
    for (i = 1; i <= passwordLength; i++) {
    index = Math.floor(Math.random() * criteria.numbers.length);
    character = criteria.numbers[index];
    console.log(character);
    }
    // special characters ------------------
  } else if (confirmSpecialCharacter === criteria.specialCharacters) {  
    for (i = 1; i <= passwordLength; i++) {
    index = Math.floor(Math.random() * criteria.specialCharacters.length);
    character = criteria.specialCharacters[index];
    console.log(character);
    }
    // uppercase ---------------------------------------
  } else if (confirmUppercase === criteria.confirmUppercase) {  
    for (i = 1; i <= passwordLength; i++) {
    index = Math.floor(Math.random() * criteria.confirmUppercase.length);
    character = criteria.confirmUppercase[index];
    console.log(character);
    }
    // lowercase -------------------------------
  } else if (confirmLowercase === criteria.confirmLowercase) {  
    for (i = 1; i <= passwordLength; i++) {
    index = Math.floor(Math.random() * criteria.confirmLowercase.length);
    character = criteria.confirmLowercase[index];
    console.log(character);
    }
  } return password; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);  
