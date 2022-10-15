// Assignment code here
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
var len;
var passwordAlphabet;


function generateNo(){
for (i = 0; i <len; i++) {
  passwordAlphabet = Math.floor(Math.random() *10)
  return passwordAlphabet;
   }}
   var passwordAlphabet2 = passwordAlphabet;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  len =prompt("Enter the length of your password\nThe length must be between 8 and 128");
  return password;

}







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;}




 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

