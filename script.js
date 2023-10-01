// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var valueOptions = document.getElementById("valueOptions");
  var chars = "";
  // var lowercase = document.getElementById("lowercase");
  // var uppercase = document.getElementById("uppercase");
  // var numbers = document.getElementById("numbers");
  // var special = document.getElementById("special");

  for (var v = 0; v < valueOptions.length; v++) {
    currentOption = valueOptions[v];
    if (currentOption.selected) {
      chars += currentOption.value;
    }
  }

  // for (var v = 0; v < valueOptions.length; v++) {
  //   currentOption = valueOptions[v];
  //   if (currentOption = lowercase && currentOption.selected == true ) {
  //     chars = chars + "abcdefghijklmnopqrstuvwxyz";
  //   } else if (currentOption = uppercase && currentOption.selected) {
  //     chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   } else if (currentOption = numbers && currentOption.selected) {
  //     chars = chars + "0123456789";
  //   } else if (currentOption = special && currentOption.selected) {
  //     chars = chars + "!@#$%^&*()";
  //   } else {
  //     confirm("Please select one or more options.")
  //   }
  // }

  // if (valueOptions.value == "lowercase"){
  //   console.log("lower");

  // for (var v = 0; v < valueOptions.length; v++) {
  // switch (true) {
  //   case valueOptions.value == "lowercase":
  //     chars = chars + "abcdefghijklmnopqrstuvwxyz";
  //     break;
  //   case currentOption==uppercase && uppercase.selected:
  //     chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //     break;
  //   case currentOption==numbers && numbers.selected:
  //     chars = chars + "0123456789";
  //     break;
  //   case currentOption==special && special.selected:
  //     chars = chars + "!@#$%^&*()";
  //     break;
  //   default:
  //     confirm("Please select one or more options.")
  // }
  // }

  password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
   }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
var password = "";
var chars = "";
// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;


function copyText() {
    navigator.clipboard.writeText(password);
}
