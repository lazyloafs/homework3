// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.preventDefault()

function generatePassword() {
  var length = 8,
      charset = "a#bc!defg*hi&jkl%mno@pq.rstuvwxyzAB#CDEFGH#JKLM%NOP!QRS&TUV*WXY%Z012$345#678$9!",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}