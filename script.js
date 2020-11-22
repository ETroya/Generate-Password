// Assignment Code

//Array
var generateBtn = document.querySelector("#generate");
var upper =[ "A", "B", "C", "D", "E", "F"];
var lower= ["a", "b", "c","d","e", "f"];
var numbers= ["1", "2", "3", "4", "5"];
var spec= ["'", "!", '#','$',"&","'"];


//Prompt Box//
// prompt("How many characteristics would you like?" )

// Generate Password//
function generatePassword(){

var userLength= prompt ("How many characteristics would you like?")
// console.log(length)

var upperboo= confirm ("Do you need upper in the password?")
// console.log(upperboo)

var lowerboo= confirm ("Do you need lower in the password?")
// console.log(lowerboo)

var specboo= confirm ("Do you need spec in the password?")
// console.log(specboo)

var numberboo= confirm ("Do you need numbers in the password?")
// console.log(numberboo)

// console.log(random)

// array for loops//
var passwordarray= [];
var passwordchoices = [];


if(upperboo){
  Array.prototype.push.apply(passwordchoices, upper);
}
// [] => [ "A", "B", "C", "D", "E", "F" ]
if(lowerboo){
  Array.prototype.push.apply(passwordchoices, lower);
}
// [ "A", "B", "C", "D", "E", "F" ] -> [ "A", "B", "C", "D", "E", "F", "a", "b", "c","d","e", "f" ]
if(numberboo)
{
  Array.prototype.push.apply(passwordchoices, numbers);
}
// [ "A", "B", "C", "D", "E", "F", "a", "b", "c","d","e", "f" ] -> [ "A", "B", "C", "D", "E", "F", "a", "b", "c","d","e", "f" , "1", "2", "3", "4", "5"]
if (specboo){
  Array.prototype.push.apply(passwordchoices, spec);
}
// [ "A", "B", "C", "D", "E", "F", "a", "b", "c","d","e", "f" , "1", "2", "3", "4", "5"]-> [" ", "!", '#','$',"&","'"]
var random = 0;

for (let i = 0; i < userLength; i++) 
{
  random = Math.floor(Math.random()*passwordchoices.length);
  passwordarray.push(passwordchoices[random])  
  console.log(passwordchoices[random])  
}


  // console.log(passwordarray);
  return passwordarray;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//
// if(lowerboo){
// for (let i = 0; i < length; i++) {
// var random = Math.floor(Math.random()*lower.length);
// passwordarray.push (lower[random])    
// }
// }

// if(specboo){
// for (let i = 0; i < length; i++) {
// var random = Math.floor(Math.random()*spec.length);
// passwordarray.push (spec[random]) 
// }
// }

// if(numberboo){
// for (let i = 0; i < length; i++) {
//   var random = Math.floor(Math.random()*numbers.length);
//   passwordarray.push (numbers[random]) 
//   }
// }

// return passwordarray.join("")
// }
// console.log(lower[3])

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);