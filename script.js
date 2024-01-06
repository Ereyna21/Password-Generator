// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();//define generate password function which asks the user
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// variables
var length;//password length
var lowCase;// confirm lowercase 
var upCase;// confirm uppercase
var numbers;// confirm numbers
var special;// confirm special characters
var options;// users password options

var lowCase = ["a", "b", "c", "d","e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];

var upCase = ["A", "B", "C", "D","E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = ["!", "@", "#", "$", "%", "^", "&", "*,", "(", ")", "=","_", "+", "{", "}", "[", "]","<", ",", ">", ".", "?", "/", "~", "`"];
var options = [];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", function(){ });


 function generatePassword() {
  let length = prompt("Please enter a password that is between 8 and 128 characters.");
    if (length < 8 || length > 128){
      length = prompt("Password must be between 8 and 128 characters");
    } else {
      console.log(length);
      let lowCase = confirm("Would you like lowercase characters in your password?");
      console.log(lowCase);
      
      let upCase = confirm("Would you like uppercase characters in your password?");
      console.log(upCase);
      
      let numbers = confirm("Would you like numbers in your password?");
      console.log(numbers);
      
      let special = confirm("Would you like special characters in your password?");
      console.log(special);
        
    } 
    function generatePassword(){
      if (!lowCase && !upCase && !numbers && !special);{
        options = prompt("Your password needs to have atleast one of the character types.");
        generatePassword();

    }
  }
var passNone =[];

for (var i =0; i < length; i++){
  var aray = [Math.floor(Math.random()) * options.length];
  passNone.push(aray);
}
    passcode = passNone.join("");

    return passcode

    function getGeneratePassword(){
      
    } }    
