// Assignment Code
var generateBtn = document.querySelector("#generate");


function writePassword() {
//character selection
  var valueOptions = document.getElementById("valueOptions");
  var chars = "";
  // var passwordLength = document.getElementById("pwLength").innerHTML;
  for (var v = 0; v < valueOptions.length; v++) {
    currentOption = valueOptions[v];
    if (currentOption.selected) {
      chars += currentOption.value;
    }
  }

  var passwordLength = document.getElementById("pwLength").value;
function pwLength() {
  document.getElementById("pwLength").value == passwordLength;
}

pwLength();

  password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// var passwordLength = document.getElementById("pwLength").value;
// function pwLength() {
//   document.getElementById("pwLength").value == passwordLength;
// }


generateBtn.addEventListener("click", writePassword);
var password = "";
var chars = "";
// var passwordLength = document.getElementById("pwLength").value;

function copyText() {
    navigator.clipboard.writeText(password);
}
