// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // Establishing variables for characters and 
  let characterNum = window.prompt("How many characters would you like your password to have?");
  let upperChoice = window.confirm("Would you like your password to contain uppercase letters?");
  let lowerChoice = window.confirm("Would you like your password to contain lowercase letters?");
  let numberChoice = window.confirm("Would you like your password to contain numbers?");
  let specialChoice = window.confirm("Would you like your password to contain special characters?");
  
  let upperC = ["A", "B", "C", "D", "E"];
  let lowerC = ["a", "b", "c", "d", "e"];
  let number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let special = ["%", "!", "&", "*", "@"];
  let chosenValues = [];
  let password = [];
   for(let i = 0; i < characterNum; i++) {
     if(upperChoice && lowerChoice && numberChoice && specialChoice){
      chosenValues = [...upperC, ...lowerC, ...number, ...special];
      let randomNumber = Math.floor(Math.random() * chosenValues.length);
      password.push(chosenValues[randomNumber]);
      password.join("");
    } else if(lowerChoice && numberChoice && specialChoice) {
      chosenValues = [...lowerC, ...number, ...special];
      let randomNumber = Math.floor(Math.random() * chosenValues.length);
      password.push(chosenValues[randomNumber]);
      password.join("");
    } else if(numberChoice && specialChoice) {
      chosenValues = [...number, ...special];
      let randomNumber = Math.floor(Math.random() * chosenValues.length);
      password.push(chosenValues[randomNumber]);
      password.join("");
    } else if(specialChoice) {
      chosenValues = [...special];
      let randomNumber = Math.floor(Math.random() * chosenValues.length);
      password.push(chosenValues[randomNumber]);
      password.join("");
    } else if(upperChoice && lowerChoice) {
      chosenValues = [...upperC, ...lowerC];
      let randomNumber = Math.floor(Math.random() * chosenValues.length);
      password.push(chosenValues[randomNumber]);
      password.join("");
    } else if(lowerChoice && numberChoice) {
      chosenValues = [...lowerC, ...number,];
      let randomNumber = Math.floor(Math.random() * chosenValues.length);
      password.push(chosenValues[randomNumber]);
      password.join("");
    } else if (upperChoice && lowerChoice && numberChoice && specialChoice){
      chosenValues = [...upperC, ...lowerC, ...number, ...special];
      let randomNumber = Math.floor(Math.random() * chosenValues.length);
      password.push(chosenValues[randomNumber]);
      password.join("");
    } else if (upperChoice && specialChoice){
      chosenValues = [...upperC, ...special];
      let randomNumber = Math.floor(Math.random() * chosenValues.length);
      password.push(chosenValues[randomNumber]);
      password.join("");
    }
  }

  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


