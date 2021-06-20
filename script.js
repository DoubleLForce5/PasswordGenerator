var generateBtn = document.querySelector("#generate");

var criteria = {
  lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9],
  specialCharacters: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
}

var minLength = 8;
var maxLength = 128;

var characterPool = [];
var password = [];

function generatePassword() {

  password = [];
  characterPool = [];

  passwordLength = prompt('How many characters would you like in your password? Please enter a number between 8 and 128!');
  if (passwordLength < minLength || passwordLength > maxLength) {
    alert('Invalid please try again');
    // console.log(passwordLength);
  } else {

    confirmNumber = confirm('Click OK to confirm including numbers in your password.');
    if (confirmNumber) {
      characterPool = characterPool.concat(criteria.numbers);
      // console.log(confirmNumber);
    };

    confirmSpecialCharacter = confirm('Click OK to confirm including special characters in your password.')
    if (confirmSpecialCharacter) {
      characterPool = characterPool.concat(criteria.specialCharacters);
    };

    confirmUppercase = confirm('Click OK to confirm including uppercase letters in your password.')
    if (confirmUppercase) {
      characterPool = characterPool.concat(criteria.upperCase);
    };

    confirmLowercase = confirm('Click OK to confirm including lowercase letters in your password.')
    if (confirmLowercase) {
      characterPool = characterPool.concat(criteria.lowerCase);
      console.log(confirmLowercase);
    };

    for (i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * characterPool.length);
      password.push(characterPool[index]);
    };

  };

  console.log("password: ", password)
  return password.join('');
};

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("password in writePassword: ", password);
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);