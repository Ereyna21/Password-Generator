// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//define generate password function which asks the user
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// variables
var length;
var conlowCase;
var conupCase;
var numbers;
var special;


var lowCase = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];

var upCase = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = ["!", "@", "#", "$", "%", "^", "&", "*,", "(", ")", "-", "=","_", "+", "{", "}", "[", "]","<", ",", ">", ".", "?", "/", "~", "`"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", function(){ });


 function generatePassword() {
  let length = prompt("Please enter a password that is between 8 and 128 characters.");
    if (length < 8 || length > 128){
     let length = prompt("Password must be between 8 and 128 characters");
    } else {
      let lowCase = confirm("Would you like lowercase characters in your password?");
      
      let upCase = confirm("Would you like uppercase characters in your password?");
      
      let numbers = confirm("Would you like numbers in your password?");
      
      let special = confirm("Would you like special characters in your password?");
    }

    function getGeneratePassword(){
      
    } }    
