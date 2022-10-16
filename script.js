// Assignment code here
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
var len;
var passwordNumber;
var islowercase;
var isuppercase;
var isnumeric;
var isspecial;
var randomNumber;
var password;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// main function start
function generatePassword(){
  len =prompt("Enter the length of your password\nThe length must be between 8 and 128");
  
  if(len<8 || len>128 ){
    alert("The length of password must be between 8 and 128 characters"); 
  };
  if(len<8 || len>128 ) {
   return 
  }
  



  islowercase = confirm("Do you want to include lowercase letter?");
  isuppercase = confirm("Do you want to include uppercase letter?");
  isnumeric = confirm("Do you want to include number?");
  isspecial = confirm("Do you want to include special character?");

  if (!islowercase && !isuppercase && !isnumeric && !isspecial){
    alert("Invalid Criteria!\nYou need to choose at least one character type")
  }

  

  if (islowercase && isuppercase && isnumeric && isspecial){
  for(var i=0;i<len;i++){
    randomNumber = Math.floor(Math.random()*alphabet.length);
    password += alphabet.substring(randomNumber,randomNumber+1);
  }}
  return password;
}








// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

