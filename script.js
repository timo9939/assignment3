// Assignment code here
const lowalphabet = "abcdefghijklmnopqrstuvwxyz";
const upalphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const lowupalphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lownumbers ="abcdefghijklmnopqrstuvwxyz0123456789";
const lowspecial="abcdefghijklmnopqrstuvwxyz!@#$%^&*_-+=";
const upnumber="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const upspecial="ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_-+=";
const numbersspecial="0123456789!@#$%^&*_-+=";

const lowupnumbers="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const lownumspecial="abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-+=";
const upnumsspecial ="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";
const specialnumlower= "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_-+=";

const lowupnumspecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*_-+=";

let len;
let passwordNumber;
let islowercase;
let isuppercase;
let isnumeric;
let isspecial;
let randomNumber;
let password="";
// Get references to the #generate element
let generateBtn = document.querySelector("#generate");


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

  //Reminder if criteria does not match
  if (!islowercase && !isuppercase && !isnumeric && !isspecial){
    alert("Invalid Criteria!\nYou need to choose at least one character type")
  }

  //Only one character type
  if (islowercase && !isuppercase && !isnumeric && !isspecial){
  for(var i=0;i<len;i++){
    randomNumber = Math.floor(Math.random()*lowalphabet.length);
    password += lowalphabet.substring(randomNumber,randomNumber+1);
  }}
  
  if (!islowercase && isuppercase && !isnumeric && !isspecial){
    for(var i=0;i<len;i++){
      randomNumber = Math.floor(Math.random()*upalphabet.length);
      password += upalphabet.substring(randomNumber,randomNumber+1);
  }}

  if (!islowercase && !isuppercase && isnumeric && !isspecial){
    for(var i=0;i<len;i++){
      randomNumber = Math.floor(Math.random()*numbers.length);
      password += numbers.substring(randomNumber,randomNumber+1);
  }}

  if (!islowercase && !isuppercase && !isnumeric && isspecial){
    for(var i=0;i<len;i++){
      randomNumber = Math.floor(Math.random()*symbols.length);
      password += symbols.substring(randomNumber,randomNumber+1);
  }}

// two character type

if (islowercase && isuppercase && !isnumeric && !isspecial){
  for(var i=0;i<len;i++){
  randomNumber = Math.floor(Math.random()*lowupalphabet.length);
  password += lowupalphabet.substring(randomNumber,randomNumber+1);}}
  
if (islowercase && !isuppercase && isnumeric && !isspecial){
  for(var i=0;i<len;i++){
  randomNumber = Math.floor(Math.random()*lownumbers.length);
  password += lownumbers.substring(randomNumber,randomNumber+1);}}

if (islowercase && !isuppercase && !isnumeric && isspecial){
  for(var i=0;i<len;i++){
  randomNumber = Math.floor(Math.random()*lowspecial.length);
  password += lowspecial.substring(randomNumber,randomNumber+1);}}

if (!islowercase && isuppercase && !isnumeric && !isspecial){
  for(var i=0;i<len;i++){
  randomNumber = Math.floor(Math.random()*upnumber.length);
  password += upnumber.substring(randomNumber,randomNumber+1);}}

if (!islowercase && isuppercase && !isnumeric && isspecial){
  for(var i=0;i<len;i++){
  randomNumber = Math.floor(Math.random()*upspecial.length);
  password += upspecial.substring(randomNumber,randomNumber+1);}}

if (!islowercase && !isuppercase && isnumeric && isspecial){
  for(var i=0;i<len;i++){
  randomNumber = Math.floor(Math.random()*numbersspecial.length);
  password += numbersspecial.substring(randomNumber,randomNumber+1);}}

// 3 types character situation
if (islowercase && isuppercase && isnumeric && !isspecial){
  for(var i=0;i<len;i++){
  randomNumber = Math.floor(Math.random()* lowupnumbers.length);
  password += lowupnumbers.substring(randomNumber,randomNumber+1);}}

if (islowercase && !isuppercase && isnumeric && isspecial){
  for(var i=0;i<len;i++){
  randomNumber = Math.floor(Math.random()* lownumspecial.length);
  password += lownumspecial.substring(randomNumber,randomNumber+1);}}

if (islowercase && !isuppercase && isnumeric && isspecial){
  for(var i=0;i<len;i++){
  randomNumber = Math.floor(Math.random()* specialnumlower.length);
  password += specialnumlower.substring(randomNumber,randomNumber+1);}}

// 4 character types situation
if (islowercase && isuppercase && isnumeric && isspecial){
  for(var i=0;i<len;i++){
  randomNumber = Math.floor(Math.random()* lowupnumspecial.length);
  password += lowupnumspecial.substring(randomNumber,randomNumber+1);}}


return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

