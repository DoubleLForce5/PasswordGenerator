// Assignment Code
var generateBtn = document.querySelector("#generate");

// various characters that will be used to create password | Computer needs to calculate its input choice | criteria = object, lowercase/uppercase/numbers/specialcharacters = names and their contents = values 
var criteria = {
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9],
  specialCharacters: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
}

// min/max used to set parameters for password's length 
var minLength = 8;
var maxLength = 128;

// empty array and string to hold generated items 
var characterPool = [];
var password = [];

// conditionals, adding to the character pool
function generatePassword() {
  passwordLength = prompt ('How many characters would you like in your password? Please enter a number between 8 and 128!');
    // If, else statement 
    if (passwordLength < minLength || passwordLength > maxLength) {
    alert ('Invalid please try again');
    console.log(passwordLength);
  } else {
    confirmNumber = confirm ('Would you like numbers in your password?');
    confirmSpecialCharacter = confirm ('Would you like special characters in your password?');
    confirmUppercase = confirm ('Would you like uppercase letters in your password?');
    confirmLowercase = confirm('Would you like lowercase letters in your password?');
  };
    // if even one confirmation is not confirmed the alert will be returned to the user 
    if (!confirmNumber || !confirmSpecialCharacter || !confirmUppercase || !confirmLowercase) {
    alert ('Invalid please try again');
    // or
  } else if 
    (confirmNumber) { 
    characterPool = characterPool.concat(criteria.numbers);
    console.log(confirmNumber);
  }
    // special characters ------------------
    if (confirmSpecialCharacter) {
    characterPool = characterPool.concat(criteria.specialCharacters);
    console.log(confirmSpecialCharacter);
  }
    // uppercase ---------------------------------------
    if (confirmUppercase) {
    characterPool = characterPool.concat(criteria.upperCase);
    console.log(confirmUppercase);
   }
    // lowercase -------------------------------
    if (confirmLowercase) {
    characterPool = characterPool.concat(criteria.lowerCase);
    console.log(confirmLowercase);
  }
    // for loop is used to set how many times the computer will loop through the values based on the password length 
    for (i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * characterPool.length);
    // console.log(index);
    // console.log(characterPool[index]);
    password.push(characterPool[index]);
  }

    console.log("password: ", password)
    return password.join(''); 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("password in writePassword: ", password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
