// Assignment Code
var generateBtn = document.querySelector("#generate");

// various characters that will be used to create password | Computer needs to calculate its input choice | criteria = object, lowercase/uppercase/numbers/specialcharacters = names and their contents = values 

  var criteria = {
    lowerCase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upperCase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numbers: [0, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9],
    specialCharacters: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
  }

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
  // (confirmNumber && confirmSpecialCharacter && confirmUppercase && confirmLowercase); 
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
  // console.log(confirmNumber);
  // console.log(confirmSpecialCharacter);
  // console.log(confirmUppercase);
  // console.log(confirmLowercase); 
  
  for (i = 0; i < passwordLength; i++) {
  var index = Math.floor(Math.random() * characterPool.length);
  console.log(index);
  console.log(characterPool[index]);
  password.push(characterPool[index]);
}
  
  // console.log(obj[numbers], obj[specialCharacters], Obj[upperCase], obj[lowerCase]);
  // Object.keys(characterPool).forEach(function (key) {
  // console.log(characterPool[key]); }
  // tempPs.forEach(password, index)



  // console.log('criteriaTypes', criteriaTypes);
  // Object.keys(criteria);
  // console.log(object.keys(criteria));
  console.log("password: ", password)
  return password; 
}

var joinedPassword = password.join(",");
console.log(password.join(","));

 

  // (confirmNumber) { 
  //   console.log(confirmNumber);
  //   }
  //   // special characters ------------------
  //   if (confirmSpecialCharacter) {
  //   console.log(confirmSpecialCharacter);
  //   }
  //   // uppercase ---------------------------------------
  //   if (confirmUppercase) {
  //   console.log(confirmUppercase);
  //   }
  //   // lowercase -------------------------------
  //   if (confirmLowercase) {
  //   console.log(confirmLowercase);
  //   }
    // loop over the character pool x times, adding a random character from this pool to the new password
    // for (i = 1; i <= passwordLength; i++) 
    // get a random index between 0 and the length of the character pool
    // index = Math.floor(Math.random() * characterPool.push(criteria));
    // use ^ to get a random character from the array
    // add ( concatenate ) it to the password variable

   // after the loop, return the password
//     console.log("password: ", password)
//     return password; 
// }


// function generatePassword() {
//   // do stuff to generate a password
//   passwordLength = prompt ('How many characters would you like in your password? Please enter a number between 8 and 128!');
//   // If, else statement 
//     if (passwordLength < 8 || passwordLength > 128) {
//     alert ('Invalid please try again');
//     console.log(passwordLength)
//     } else {
//   // changed method from prompt to confirm because prompt is asking for input while confirm is simply requesting validation 
//   confirmNumber = confirm ('Would you like numbers in your password?');
//   confirmSpecialCharacter = confirm ('Would you like special characters in your password?');
//   confirmUppercase = confirm ('Would you like uppercase letters in your password?');
//   confirmLowercase = confirm('Would you like lowercase letters in your password?');
//   };
//   // if even one confirmation is not confirmed the alert will be returned to the user 
//   if (!confirmNumber || !confirmSpecialCharacter || !confirmUppercase || !confirmLowercase) {
//     alert ('Invalid please try again');

//     // numbers --------------
//     // confirmNumber will never === criteria.numbers because they are different data types 
//   } else if (confirmNumber) { 
//     // How values are chosen 
//     for (i = 0; i <= passwordLength - 1; i++) {
//     index = Math.floor(Math.random() * characterPool.push(criteria.numbers));
//     console.log(characterPool);
//     }
//     // special characters ------------------
//   } else if (confirmSpecialCharacter) {  
//     for (i = 1; i <= passwordLength; i++) {
//     index = Math.floor(Math.random() * characterPool.push(criteria.specialCharacters));
//     // character = characterPool.specialCharacters[index];
//     console.log(characterPool);
//     }
//     // uppercase ---------------------------------------
//   } else if (confirmUppercase) {  
//     for (i = 1; i <= passwordLength; i++) {
//     index = Math.floor(Math.random() * characterPool.push(criteria.uppercase));
//     // character = characterPool.uppercase[index];
//     console.log(characterPool);
//     }
//     // lowercase -------------------------------
//   } else if (confirmLowercase) {  
//     for (i = 1; i <= passwordLength; i++) {
//     index = Math.floor(Math.random() * characterPool.push(criteria.lowercase));
//     // character = characterPool.lowercase[index];
//     console.log(characterPool);
//     }
//     console.log("password: ", password)
//   } return password; 
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log("password in writePassword: ", password);
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
